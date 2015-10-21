'use strict';

var _             = require('underscore')
  , anchor        = require('anchor-markdown-header')
  , updateSection = require('update-section')
  , getHtmlHeaders = require('./get-html-headers');

var start = '<!-- START doctoc generated TOC please keep comment here to allow auto update -->\n' +
            '<!-- DON\'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->'
  , end   = '<!-- END doctoc generated TOC please keep comment here to allow auto update -->'

function matchesStart(line) {
  return (/<!-- START doctoc /).test(line);
}

function matchesEnd(line) {
  return (/<!-- END doctoc /).test(line);
}

function notNull(x) { return  x !== null; }

function addAnchor(mode, header) {
  header.anchor = anchor(header.name, mode, header.instance);
  return header;
}


function getHashedHeaders (lines, maxHeaderLevel) {
  var inCodeBlock = false
    , lineno = 0;

  // Turn all headers into '## xxx' even if they were '## xxx ##'
  function normalize(header) {
    return header.replace(/[ #]+$/, '');
  }

  // Find headers of the form '### xxxx xxx xx [###]'
  return lines
    .map(function (x, idx) {
      return { lineno: idx, line: x }
    })
    .filter(function (x) {
      if (x.line.match(/^```/)) {
        inCodeBlock = !inCodeBlock;
      }
      return !inCodeBlock;
    })
    .map(function (x) {
      var match = /^(\#{1,8})[ ]*(.+)\r?$/.exec(x.line);

      return match && (!maxHeaderLevel || match[1].length <= maxHeaderLevel)
        ? { rank :  match[1].length
          , name :  normalize(match[2])
          , line :  x.lineno
          }
        : null;
    })
    .filter(notNull)
}

function getUnderlinedHeaders (lines, maxHeaderLevel) {
    // Find headers of the form
    // h1       h2
    // ==       --

    return lines
      .map(function (line, index, lines_) {
        if (index === 0) return null;
        var rank;

        if (/^==+ *\r?$/.exec(line))      rank = 1;
        else if (/^--+ *\r?$/.exec(line)) rank = 2;
        else                              return null;

        return !maxHeaderLevel || (rank <= maxHeaderLevel)
          ? { rank  :  rank
            , name  :  lines_[index - 1]
            , line  :  index - 1
            }
          : null;
      })
      .filter(notNull)
}

function countHeaders (headers) {
  var instances = {};

  for (var i = 0; i < headers.length; i++) {
    var header = headers[i];
    var name = header.name;

    if (Object.prototype.hasOwnProperty.call(instances, name)) {
      // `instances.hasOwnProperty(name)` fails when there’s an instance named "hasOwnProperty".
      instances[name]++;
    } else {
      instances[name] = 0;
    }

    header.instance = instances[name];
  }

  return headers;
}

function getLinesToToc (lines, currentToc, info) {
  if (!currentToc) return lines;

  var tocableStart = 0;

  // when updating an existing toc, we only take the headers into account
  // that are below the existing toc
  if (info.hasEnd) tocableStart = info.endIdx;

  return lines.slice(tocableStart);
}

// Use document context as well as command line args to infer the title
function determineTitle(title, notitle, lines, info) {
  var defaultTitle = '**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*';

  if (notitle) return '';
  if (title) return title;
  return info.hasStart ? lines[info.startIdx + 2] : defaultTitle;
}

exports = module.exports = function transform(content, mode, maxHeaderLevel, title, notitle) {
  mode = mode || 'github.com';
  // only limit *HTML* headings by default
  var maxHeaderLevelHtml = maxHeaderLevel || 4;

  var lines = content.split('\n')
    , info = updateSection.parse(lines, matchesStart, matchesEnd)

  var inferredTitle = determineTitle(title, notitle, lines, info);

  var currentToc = info.hasStart && lines.slice(info.startIdx, info.endIdx).join('\n')
    , linesToToc = getLinesToToc(lines, currentToc, info);

  var headers = getHashedHeaders(linesToToc, maxHeaderLevel)
    .concat(getUnderlinedHeaders(linesToToc, maxHeaderLevel))
    .concat(getHtmlHeaders(linesToToc, maxHeaderLevelHtml))

  headers.sort(function (a, b) {
    return a.line - b.line;
  });

  var allHeaders    =  countHeaders(headers)
    , lowestRank    =  _(allHeaders).chain().pluck('rank').min().value()
    , linkedHeaders =  _(allHeaders).map(addAnchor.bind(null, mode));

  if (linkedHeaders.length === 0) return { transformed: false };

  // 4 spaces required for proper indention on Bitbucket
  var indentation = (mode === 'bitbucket.org' || mode === 'gitlab.com') ? '    ' : '  ';

  var toc =
      inferredTitle
    + '\n\n'
    + linkedHeaders
        .map(function (x) {
          var indent = _(_.range(x.rank - lowestRank))
            .reduce(function (acc, x) { return acc + indentation; }, '');

          return indent + '- ' + x.anchor;
        })
        .join('\n')
    + '\n';

  var wrappedToc =  start + '\n' + toc + '\n' + end;

  if (currentToc === toc) return { transformed: false };

  var data = updateSection(lines.join('\n'), wrappedToc, matchesStart, matchesEnd, true);
  return { transformed : true, data : data, toc: toc, wrappedToc: wrappedToc };
};

exports.start = start;
exports.end = end;

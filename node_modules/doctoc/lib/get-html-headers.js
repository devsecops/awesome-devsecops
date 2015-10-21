'use strict';

var htmlparser = require('htmlparser2');

function addLinenos(lines, headers) {
  var current = 0, line;

  return headers.map(function (x) {
    for (var lineno = current; lineno < lines.length; lineno++) {
      line = lines[lineno];
      if (new RegExp(x.text[0]).test(line)) {
        current = lineno;
        x.line = lineno;
        x.name = x.text.join('');
        return x
      }
    }

    // in case we didn't find a matching line, which is odd,
    // we'll have to assume it's right on the next line
    x.line = ++current;
    x.name = x.text.join('');
    return x
  })
}

function rankify(headers, max) {
  return headers
    .map(function (x) {
      x.rank = parseInt(x.tag.slice(1), 10);
      return x;
    })
    .filter(function (x) {
      return x.rank <= max;
    })
}

var go = module.exports = function (lines, maxHeaderLevel) {
  var md = lines.join('\n');
  var headers = [], grabbing = null, text = [];

  var parser = new htmlparser.Parser({
    onopentag: function (name, attr) {
      if ((/h\d/).test(name)) {
        grabbing = name;
      }
    },
    ontext: function (text_) {
      if (!grabbing) return;
      text.push(text_);
    },
    onclosetag: function (name) {
      if (!grabbing) return;
      if (grabbing === name) {
        headers.push({ text: text, tag: grabbing });
        grabbing = null;
        text = [];
      }
    }
  },
  { decodeEntities: true })

  parser.write(md);
  parser.end();

  headers = addLinenos(lines, headers)
  // consider anything past h4 to small to warrant a link, may be made configurable in the future
  headers = rankify(headers, maxHeaderLevel);
  return headers;
}

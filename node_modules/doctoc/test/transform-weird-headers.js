'use strict';
/*jshint asi: true */

var test = require('tap').test
  , transform = require('../lib/transform');

test('\ngiven a file with edge-case header names', function (t) {
  var content = require('fs').readFileSync(__dirname + '/fixtures/readme-with-weird-headers.md', 'utf8');
  var headers = transform(content);

  t.deepEqual(
      headers.toc.split('\n')
    , [ '## Table of Contents',
        '',
        '- [hasOwnProperty](#hasownproperty)',
        '- [something else](#something-else)',
        '' ]
    , 'generates a correct toc when headers are weird'
  )

  t.end()
})

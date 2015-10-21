'use strict';
/*jshint asi: true */

var test = require('tap').test
  , transform = require('../lib/transform')

test('\ngiven a file that includes html with header tags and maxHeaderLevel 8', function (t) {
  var content = require('fs').readFileSync(__dirname + '/fixtures/readme-with-html.md', 'utf8');
  var headers = transform(content, 'github.com', 8);

  t.deepEqual(
      headers.toc.split('\n')
    , [ '**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*',
        '',
        '- [Installation](#installation)',
        '- [API](#api)',
        '    - [dockops::Containers(docker) → {Object}](#dockopscontainersdocker-%E2%86%92-object)',
        '      - [Parameters:](#parameters)',
        '      - [Returns:](#returns)',
        '    - [dockops::Containers::activePorts(cb)](#dockopscontainersactiveportscb)',
        '      - [Parameters:](#parameters-1)',
        '    - [dockops::Containers::clean(id, cb)](#dockopscontainerscleanid-cb)',
        '      - [Parameters:](#parameters-2)',
        '- [License](#license)',
        '' ]
    , 'generates correct toc for non html and html headers'
  )

  t.end()
})

test('\ngiven a file that includes html with header tags using default maxHeaderLevel', function (t) {
  var content = require('fs').readFileSync(__dirname + '/fixtures/readme-with-html.md', 'utf8');
  var headers = transform(content);

  t.deepEqual(
      headers.toc.split('\n')
    , [ '**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*',
        '',
        '- [Installation](#installation)',
        '- [API](#api)',
        '    - [dockops::Containers(docker) → {Object}](#dockopscontainersdocker-%E2%86%92-object)',
        '    - [dockops::Containers::activePorts(cb)](#dockopscontainersactiveportscb)',
        '    - [dockops::Containers::clean(id, cb)](#dockopscontainerscleanid-cb)',
        '- [License](#license)',
        '' ]
    , 'generates correct toc for non html and html headers omitting headers larger than maxHeaderLevel'
  )
  t.end()
})

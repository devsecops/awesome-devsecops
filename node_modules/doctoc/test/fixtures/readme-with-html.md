# dockops [![build status](https://secure.travis-ci.org/thlorenz/dockops.png)](http://travis-ci.org/thlorenz/dockops)

docker convenience functions on top of dockerode

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Installation](#installation)
- [API](#api)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

```js
var dockops = require('dockops')
var docker = dockops.createDocker({ dockerhost: dockerhost });

var images = new dockops.Images(docker);
dockops.logEvents(images, 'verbose');

var containers = new dockops.Containers(docker);
dockops.logEvents(containers, 'verbose');

build('test:uno', testUnoTar, function () {
  build('toast:uno', toastUnoTar, function () {

    containers.run(.. // run test:uno and toast:uno containers

    containers.listRunning(function (err, res) {
      inspect(res);
      containers.stopRemoveGroup('test', function (err, res) {
        containers.listRunning(function (err, res) {
          inspect(res);
          http.request({ port: 49222 }, function (res) {
            console.log('--------------------------')
            inspect({ status: res.statusCode, headers: res.headers })
            res.pipe(process.stdout)
          }).end()
        }) 
      })
    })
  })
})
```

[full example](https://github.com/thlorenz/dockops/blob/master/example/create-wipe.js)

![output](https://github.com/thlorenz/dockops/raw/master/assets/output.gif)

## Installation

    npm install dockops

## API

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="dockops::Containers"><span class="type-signature"></span>dockops::Containers<span class="signature">(docker)</span><span class="type-signature"> &rarr; {Object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Creates a new containers instance that will use the given docker instance to communicate with docker.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>docker</code></td>
<td class="type">
<span class="param-type">Object</span>
</td>
<td class="description last"><p>dockerode instance to communicate with docker</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/dockops/blob/master/containers.js">containers.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/dockops/blob/master/containers.js#L24">lineno 24</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>initialized containers</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Object</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="dockops::Containers::activePorts"><span class="type-signature"></span>dockops::Containers::activePorts<span class="signature">(cb)</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Lists all running containers by the ports they expose.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>cb</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="description last"><p>called back with list of containers hashed by their port number</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/dockops/blob/master/containers.js">containers.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/dockops/blob/master/containers.js#L275">lineno 275</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="dockops::Containers::clean"><span class="type-signature"></span>dockops::Containers::clean<span class="signature">(id, cb)</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Stops and/or kills and then removes a container.</p>
<p>Heavy machinery clean operation.
It was useful when running on arch with docker not always working as promised.
This may not be needed anymore as docker got more stable.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>id</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"><p>container id</p></td>
</tr>
<tr>
<td class="name"><code>cb</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="description last"><p>called back after container was cleaned or maximum attempts were exceeded</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/dockops/blob/master/containers.js">containers.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/dockops/blob/master/containers.js#L97">lineno 97</a>
</li>
</ul></dd>
</dl>
</dd>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT

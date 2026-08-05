<h2><img width="30" src="../../docs/antd-logo.svg"> Ant Design For Lowcode</h2>

[![NPM version][npm-image-antd]][npm-url-antd]

### [Live demo](https://cdn.jsdelivr.net/npm/@rchh/antd-lowcode-materials@1.2.7/build/lowcode/index.html)

### Usage
#### NPM
```js
const { material } from '@rchh/lowcode-engine';
const assets = require('@rchh/antd-lowcode-materials/build/lowcode/assets-prod.json');

// in GeneralWorkbench init
material.setAssets(assets);
```

#### CDN
```js
// in GeneralWorkbench init
const assets = await (await fetch(`https://cdn.jsdelivr.net/npm/@rchh/antd-lowcode-materials@1.2.7/build/lowcode/assets-prod.json`)).json();
material.setAssets(assets);
```

[npm-image-antd]: https://img.shields.io/npm/v/@rchh/antd-lowcode-materials.svg?style=flat-square
[npm-url-antd]: http://npmjs.org/package/@rchh/antd-lowcode-materials

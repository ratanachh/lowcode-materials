<h2><img width="50" src="../../docs/fusion-logo.svg"> Fusion Design For Lowcode</h2>

[![NPM version][npm-image-fusion]][npm-url-fusion]

### [在线示例 / DEMO](https://cdn.jsdelivr.net/npm/@rchh/lowcode-materials@1.2.1/build/lowcode/index.html)

### 使用 / Usage
#### NPM
```js
const { material } from '@rchh/lowcode-engine';
const assets = require('@rchh/lowcode-materials/dist/assets.json');

// in GeneralWorkbench init
material.setAssets(assets);
```

#### CDN
```js
// in GeneralWorkbench init
const assets = await (await fetch(`https://cdn.jsdelivr.net/npm/@rchh/lowcode-materials@1.2.1/dist/assets.json`)).json();
material.setAssets(assets);
```

[npm-image-fusion]: https://img.shields.io/npm/v/@rchh/lowcode-materials.svg?style=flat-square
[npm-url-fusion]: http://npmjs.org/package/@rchh/lowcode-materials

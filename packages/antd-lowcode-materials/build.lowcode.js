const { name, version } = require("./package.json");

const library = 'AntdLowcode';

module.exports = {
  sourceMap: false,
  alias: {
    '@': './src',
    lowcode: './lowcode'
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        noParse: true,
        engineScope: '@alilc',
        library,
        staticResources: {
          engineCoreCssUrl:
            'https://cdn.jsdelivr.net/npm/@rchh/lowcode-engine@1.3.7/dist/css/engine-core.css',
          engineExtCssUrl:
            'https://cdn.jsdelivr.net/npm/@rchh/lowcode-engine-ext@1.0.8/dist/css/engine-ext.css',
          engineCoreJsUrl:
            'https://cdn.jsdelivr.net/npm/@rchh/lowcode-engine@1.3.7/dist/js/engine-core.js',
          engineExtJsUrl:
            'https://cdn.jsdelivr.net/npm/@rchh/lowcode-engine-ext@1.0.8/dist/js/engine-ext.js',
        },
        npmInfo: {
          package: name,
          version,
        },
        lowcodeDir: 'lowcode',
        entryPath: 'src/index.tsx',
        categories: ['General', 'Navigation', 'Data Entry', 'Data Display', 'Feedback'],
        baseUrl: {
          prod: `https://cdn.jsdelivr.net/npm/${name}@${version}`,
          daily: `https://cdn.jsdelivr.net/npm/${name}@${version}`,
        },
        builtinAssets: [
          {
            packages: [
              {
                package: 'moment',
                version: '2.24.0',
                urls: ['https://cdn.jsdelivr.net/npm/moment@2.24.0/min/moment.min.js'],
                library: 'moment',
              },
              {
                package: 'lodash',
                library: '_',
                urls: ['https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'],
              },
              {
                package: '@ant-design/icons',
                version: '4.7.0',
                urls: ['https://cdn.jsdelivr.net/npm/@ant-design/icons@4.7.0/dist/index.umd.min.js'],
                library: 'icons',
              },
              {
                package: 'antd',
                version: '4.23.0',
                urls: [
                  'https://cdn.jsdelivr.net/npm/antd@4.23.0/dist/antd.min.js',
                  'https://cdn.jsdelivr.net/npm/antd@4.23.0/dist/antd.min.css',
                ],
                library: 'antd',
              },
            ],
            components: [],
          },
        ],
      },
    ],
  ],
};

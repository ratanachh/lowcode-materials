export default [{
  title: "Cascader",
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/cascader-1.png',
  schema: {
    componentName: 'Cascader',
    props: {
      options: [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [{
            value: 'xihu',
            label: 'West Lake'
          }]
        }]
      }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
          value: 'nanjing',
          label: 'Nanjing',
          children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }]
        }]
      }],
      placeholder: "Please select"
    }
  }
}];

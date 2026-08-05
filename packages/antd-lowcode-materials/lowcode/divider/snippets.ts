export default [{
  title: "Divider",
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/divider-1.png',
  schema: {
    componentName: 'Divider',
    props: {}
  }
}, {
  title: "With text dividing line",
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/divider-2.png',
  schema: {
    componentName: 'Divider',
    props: {
      children: [{
        componentName: 'Typography.Text',
        props: {
          children: "Split text"
        }
      }]
    }
  }
}];

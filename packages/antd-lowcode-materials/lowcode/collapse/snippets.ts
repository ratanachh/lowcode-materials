export default [{
  title: "Collapse",
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/collapse-1.png',
  schema: {
    componentName: 'Collapse',
    props: {
      defaultActiveKey: ['collapse-item-1']
    },
    children: [{
      componentName: 'Collapse.Panel',
      props: {
        header: "Collapse item1",
        key: 'collapse-item-1'
      }
    }, {
      componentName: 'Collapse.Panel',
      props: {
        header: "Collapse item2",
        key: 'collapse-item-2'
      }
    }]
  }
}];

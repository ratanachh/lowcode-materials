export default [{
  title: "Popconfirm",
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/popconfirm-1.jpg',
  schema: {
    componentName: 'Popconfirm',
    props: {
      title: "OKDelete?",
      okType: 'primary',
      okText: "OK",
      cancelText: "Cancel"
    },
    children: {
      componentName: 'Button',
      props: {
        children: "Delete"
      }
    }
  }
}];

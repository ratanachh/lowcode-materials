export default [{
  title: "Normal",
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/modal-1.png',
  schema: {
    componentName: 'Modal',
    props: {
      title: 'Basic Modal',
      okText: "OK",
      cancelText: "Cancel",
      open: true,
      destroyOnClose: true
    },
    children: []
  }
}, {
  title: "Hide Bottom",
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/modal-2.png',
  schema: {
    componentName: 'Modal',
    props: {
      title: 'Basic Modal',
      okText: "OK",
      cancelText: "Cancel",
      open: true,
      footer: null,
      destroyOnClose: true
    },
    children: []
  }
}];

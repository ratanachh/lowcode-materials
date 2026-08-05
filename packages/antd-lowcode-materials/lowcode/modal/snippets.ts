import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("普通型", "Normal"),
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
  title: i18n("隐藏底部", "Hide Bottom"),
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

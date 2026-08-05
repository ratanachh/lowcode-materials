import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("气泡确认框", "Popconfirm"),
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

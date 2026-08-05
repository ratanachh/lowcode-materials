import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("分割线", "Divider"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/divider-1.png',
  schema: {
    componentName: 'Divider',
    props: {}
  }
}, {
  title: i18n("带文字分割线", "With text dividing line"),
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

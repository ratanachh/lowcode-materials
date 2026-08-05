import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("选择器", "Select"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/select-1.png',
  schema: {
    componentName: 'Select',
    props: {
      style: {
        width: 200
      },
      options: [{
        label: 'A',
        value: 'A'
      }, {
        label: 'B',
        value: 'B'
      }, {
        label: 'C',
        value: 'C'
      }]
    }
  }
}];

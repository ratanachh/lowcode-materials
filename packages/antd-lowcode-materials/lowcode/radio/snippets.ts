import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("单选框", "Radio"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/radio-1.png',
  schema: {
    componentName: 'Radio',
    props: {
      children: 'Radio'
    }
  }
}, {
  title: i18n("单选框组", "radio button group"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/radio-group-1.png',
  schema: {
    componentName: 'Radio.Group',
    props: {
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

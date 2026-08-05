import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("多选框", "checkbox"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/checkbox-1.png',
  schema: {
    componentName: 'Checkbox',
    props: {
      children: 'Checkbox'
    }
  }
}, {
  title: i18n("多选框组", "Checkbox group"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/checkbox-group-1.png',
  schema: {
    componentName: 'Checkbox.Group',
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

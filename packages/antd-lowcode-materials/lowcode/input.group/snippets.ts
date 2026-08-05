import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("输入框组合", "Input box combination"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/input-group-1.jpg',
  schema: {
    componentName: 'Input.Group',
    props: {},
    children: [{
      componentName: 'Input',
      props: {
        placeholder: "Please enter"
      }
    }, {
      componentName: 'Input',
      props: {
        placeholder: "Please enter"
      }
    }]
  }
}];

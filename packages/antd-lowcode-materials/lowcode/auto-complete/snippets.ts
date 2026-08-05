import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("辅助提示输入框", "AutoComplete"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/auto-complete-1.png',
  schema: {
    componentName: 'AutoComplete',
    props: {
      placeholder: "Please enter",
      options: [{
        label: "Test 1",
        value: 'aaa'
      }, {
        label: "Test 2",
        value: 'bbb'
      }],
      filterOption: true,
      style: {
        width: '200px'
      }
    }
  }
}];

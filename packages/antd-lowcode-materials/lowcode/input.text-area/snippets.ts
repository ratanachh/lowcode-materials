import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("长文本", "long text"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/input-text-area-1.png',
  schema: {
    componentName: 'Input.TextArea',
    props: {
      autoSize: {
        minRows: 3,
        maxRows: 3
      },
      placeholder: "Please enter"
    }
  }
}];

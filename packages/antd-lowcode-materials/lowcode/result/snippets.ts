import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("结果", "Result"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/result-1.png',
  schema: {
    componentName: 'Result',
    props: {
      status: 'success',
      title: 'Success!',
      subTitle: 'Order number: 123'
    }
  }
}];

import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("描述列表", "Descriptions"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/descriptions-1.jpg',
  schema: {
    componentName: 'Descriptions',
    props: {
      title: "User information",
      items: [{
        label: "username",
        children: 'Mo Yao'
      }]
    }
  }
}];

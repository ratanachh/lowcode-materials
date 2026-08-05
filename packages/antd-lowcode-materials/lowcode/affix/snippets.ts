import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("固钉", "Affix"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/affix-1.jpg',
  schema: {
    componentName: 'Affix',
    props: {
      offsetTop: 100
    },
    children: [{
      componentName: 'Button',
      props: {
        children: 'Affix Top'
      }
    }]
  }
}];

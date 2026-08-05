import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("间距", "Space"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/space-1.png',
  schema: {
    componentName: 'Space',
    props: {},
    children: [{
      componentName: 'Button',
      props: {
        children: 'Button-1'
      }
    }, {
      componentName: 'Button',
      props: {
        children: 'Button-2'
      }
    }]
  }
}];

import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("走马灯", "Carousel"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/carousel-1.jpg',
  schema: {
    componentName: 'Carousel',
    children: [{
      componentName: 'Card',
      props: {
        key: 'panel-1'
      }
    }, {
      componentName: 'Card',
      props: {
        key: 'panel-2'
      }
    }]
  }
}];

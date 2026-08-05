import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("折叠面板", "Collapse"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/collapse-1.png',
  schema: {
    componentName: 'Collapse',
    props: {
      defaultActiveKey: ['collapse-item-1']
    },
    children: [{
      componentName: 'Collapse.Panel',
      props: {
        header: i18n("折叠项1", "Collapse item1"),
        key: 'collapse-item-1'
      }
    }, {
      componentName: 'Collapse.Panel',
      props: {
        header: i18n("折叠项2", "Collapse item2"),
        key: 'collapse-item-2'
      }
    }]
  }
}];

import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("侧边抽屉", "Side drawer"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/drawer-1.png',
  schema: {
    componentName: 'Drawer',
    props: {
      title: 'Basic Drawer',
      open: true,
      placement: 'right',
      destroyOnClose: true
    },
    children: [{
      componentName: 'Typography.Paragraph',
      children: 'Some contents...'
    }]
  }
}, {
  title: i18n("底部抽屉", "BottomDrawer"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/drawer-2.png',
  schema: {
    componentName: 'Drawer',
    props: {
      title: 'Basic Drawer',
      open: true,
      placement: 'bottom',
      destroyOnClose: true
    },
    children: [{
      componentName: 'Typography.Paragraph',
      children: 'Some contents...'
    }]
  }
}];

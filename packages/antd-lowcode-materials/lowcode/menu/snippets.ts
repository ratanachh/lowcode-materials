import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("导航菜单", "NavigationMenu"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/menu-1.jpg',
  schema: {
    componentName: 'Menu',
    props: {
      mode: 'inline',
      defaultSelectedKeys: ['1'],
      defaultOpenKeys: ['sub1'],
      theme: 'dark',
      items: [{
        key: 'item-i5wd',
        category: 'Menu.Item',
        children: "Menu name"
      }]
    }
  }
}];

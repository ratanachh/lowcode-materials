import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("下拉菜单", "Dropdown"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/dropdown-1.png',
  schema: {
    componentName: 'Dropdown',
    props: {
      overlay: {
        type: 'JSSlot',
        value: [{
          componentName: 'Menu',
          props: {
            items: [{
              key: 'timeLinei5wd',
              category: 'Item',
              title: "Menu name"
            }]
          },
          children: [{
            componentName: 'Menu.Item',
            id: 'node_ocky01yzdq3',
            props: {
              key: 'timeLinei5wd',
              category: 'Item',
              title: "Menu name",
              children: "Menu name"
            }
          }]
        }]
      }
    },
    children: [{
      componentName: 'Button',
      props: {
        type: 'link',
        children: {
          type: 'JSSlot',
          value: [{
            componentName: 'Typography.Text',
            props: {
              children: 'Hover me',
              style: {
                color: 'inherit'
              }
            }
          }, {
            componentName: 'Icon',
            props: {
              type: 'DownOutlined',
              size: 15,
              style: {
                marginLeft: 4,
                verticalAlign: 'middle'
              }
            }
          }]
        }
      }
    }]
  }
}];

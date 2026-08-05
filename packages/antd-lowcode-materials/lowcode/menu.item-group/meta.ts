import { uuid } from '../_utils/utils';
import { itemsExtraProps } from '../menu/utils';
import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Menu.ItemGroup',
  title: i18n("菜单组", "menu group"),
  props: [{
    name: 'items',
    title: i18n("菜单组项", "menu group item"),
    setter: {
      componentName: 'ArraySetter',
      props: {
        itemSetter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [{
                name: 'key',
                title: 'key',
                setter: 'StringSetter',
                initialValue: val => val || uuid()
              }, {
                name: 'children',
                tite: i18n("菜单名", "Menu name"),
                setter: 'StringSetter'
              }, {
                name: 'category',
                title: {
                  label: i18n("类型", "Type"),
                  tip: i18n("菜单项类型", "Menu item type")
                },
                propType: {
                  type: 'oneOf',
                  value: ['Menu.Item', 'Menu.SubMenu', 'Menu.ItemGroup']
                },
                setter: [{
                  componentName: 'RadioGroupSetter',
                  props: {
                    options: [{
                      title: 'Item',
                      value: 'Menu.Item'
                    }, {
                      title: 'SubMenu',
                      value: 'Menu.SubMenu'
                    }, {
                      title: 'ItemGroup',
                      value: 'Menu.ItemGroup'
                    }]
                  }
                }, 'VariableSetter']
              }]
            }
          },
          initialValue: () => {
            return {
              key: `item-${uuid()}`,
              category: 'Menu.Item',
              children: i18n("子菜单名", "Submenu name")
            };
          }
        }
      }
    },
    extraProps: itemsExtraProps
  }, {
    name: 'children',
    title: {
      label: i18n("分组的菜单项", "Grouped menu items"),
      tip: i18n("分组的菜单项", "Grouped menu items")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'title',
    title: {
      label: i18n("分组标题", "Group title"),
      tip: i18n("分组标题", "Group title")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['Menu', 'Menu.SubMenu']
      }
    },
    supports: {
      style: true
    }
  }
};

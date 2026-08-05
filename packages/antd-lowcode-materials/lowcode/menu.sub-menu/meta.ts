import { uuid } from '../_utils/utils';
import { itemsExtraProps } from '../menu/utils';
import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Menu.SubMenu',
  title: i18n("子菜单", "SubMenu"),
  props: [{
    name: 'items',
    title: i18n("子菜单项", "submenu item"),
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
                title: i18n("子菜单名", "Submenu name"),
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
    name: 'danger',
    title: {
      label: i18n("错误状态", "ErrorStatus"),
      tip: i18n("展示错误状态样式", "Display error status style")
    },
    propType: 'bool',
    defaultValue: true
  }, {
    name: 'disabled',
    title: {
      label: i18n("是否禁用", "Disabled"),
      tip: i18n("是否为禁用状态", "Whether disabled")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'icon',
    title: {
      label: i18n("菜单图标", "Menu icon"),
      tip: i18n("菜单图标", "Menu icon")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    },
    defaultValue: false
  }, {
    name: 'key',
    title: {
      label: i18n("唯一标志", "unique sign"),
      tip: i18n("item 的唯一标志", "unique identifier of item")
    },
    propType: 'string'
  }, {
    name: 'title',
    title: {
      label: i18n("悬浮标题", "Hover Title"),
      tip: i18n("设置收缩时展示的悬浮标题", "Set the floating title displayed when shrinking")
    },
    propType: 'string'
  }],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['Menu']
      }
    },
    supports: {
      style: true
    }
  }
};

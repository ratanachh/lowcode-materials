import { uuid } from '../_utils/utils';
import { itemsExtraProps } from './utils';
import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Menu',
  title: i18n("导航菜单", "NavigationMenu"),
  category: "Navigation",
  props: [{
    name: 'items',
    title: i18n("菜单项", "Menu Item"),
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
                title: i18n("菜单名称", "Menu name"),
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
              key: 'item-' + uuid(),
              category: 'Menu.Item',
              children: i18n("菜单名", "Menu name")
            };
          }
        }
      }
    },
    extraProps: itemsExtraProps
  }, {
    name: 'defaultOpenKeys',
    title: {
      label: i18n("初始展开菜单项", "Initial expanded menu item"),
      tip: i18n("初始展开的 SubMenu 菜单项 key 数组", "Initial expanded SubMenu menu item key array")
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    }
  }, {
    name: 'defaultSelectedKeys',
    title: {
      label: i18n("初始选中的菜单项", "Initial selected menu item"),
      tip: i18n("初始选中的菜单项 key 数组", "Initial selected menu item key array")
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    }
  }, {
    name: 'forceSubMenuRender',
    title: {
      label: i18n("子菜单预渲染", "SubMenuForce render"),
      tip: i18n("在子菜单展示之前就渲染进 DOM", "Render into DOM before submenu is displayed")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'inlineCollapsed',
    title: {
      label: i18n("是否收起", "YesNoCollapse"),
      tip: i18n("inline 时菜单是否收起状态", "Whether the menu is closed when inline")
    },
    propType: 'bool'
  }, {
    name: 'inlineIndent',
    title: {
      label: i18n("缩进宽度", "indent width"),
      tip: i18n("inline 模式的菜单缩进宽度", "Menu indent width in inline mode")
    },
    propType: 'number'
  }, {
    name: 'mode',
    title: {
      label: i18n("菜单类型", "MenuType"),
      tip: i18n("菜单类型，现在支持垂直、水平、和内嵌模式三种", "Menu type, now supports vertical, horizontal, and inline modes")
    },
    propType: {
      type: 'oneOf',
      value: ['vertical', 'horizontal', 'inline']
    }
  }, {
    name: 'multiple',
    title: {
      label: i18n("是否允许多选", "YesNoAllow Multiple"),
      tip: i18n("是否允许多选", "YesNoAllow Multiple")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'openKeys',
    title: {
      label: i18n("当前展开的菜单项", "Current Expand Menu Item"),
      tip: i18n("当前展开的 SubMenu 菜单项 key 数组", "The currently expanded SubMenu menu item key array")
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    }
  }, {
    name: 'selectable',
    title: {
      label: i18n("是否允许选中", "Whether to allow selection"),
      tip: i18n("是否允许选中", "Whether to allow selection")
    },
    propType: 'bool',
    defaultValue: true
  }, {
    name: 'selectedKeys',
    title: {
      label: i18n("当前选中项", "Current selected"),
      tip: i18n("当前选中的菜单项 key 数组", "The currently selected menu item key array")
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    }
  }, {
    name: 'style',
    title: {
      label: i18n("根节点样式", "Root node style"),
      tip: i18n("根节点样式", "Root node style")
    },
    propType: 'object'
  }, {
    name: 'subMenuCloseDelay',
    title: {
      label: i18n("关闭延时", "Off delay"),
      tip: i18n("用户鼠标离开子菜单后关闭延时，单位：秒", "The closing delay after the user mouse leaves the submenu, unit: seconds")
    },
    propType: 'number'
  }, {
    name: 'subMenuOpenDelay',
    title: {
      label: i18n("开启延时", "Turn on delay"),
      tip: i18n("用户鼠标进入子菜单后开启延时，单位：秒", "Start delay after the user mouse enters the submenu, unit: seconds")
    },
    propType: 'number'
  }, {
    name: 'theme',
    title: {
      label: i18n("主题颜色", "theme color"),
      tip: i18n("主题颜色", "theme color")
    },
    propType: {
      type: 'oneOf',
      value: ['light', 'dark']
    }
  }, {
    name: 'onClick',
    title: {
      label: i18n("点击 MenuItem 调用函数", "Click the MenuItem to call the function"),
      tip: i18n("点击 MenuItem 调用函数", "Click the MenuItem to call the function")
    },
    propType: 'func'
  }, {
    name: 'onDeselect',
    title: {
      label: i18n("取消选中时调用函数", "Function called when deselected"),
      tip: i18n("取消选中时调用，仅在 multiple 生效", "Called when unchecked, only effective in multiple")
    },
    propType: 'func'
  }, {
    name: 'triggerSubMenuAction',
    title: {
      label: i18n("触发方式", "Trigger mode"),
      tip: i18n("展开/关闭的触发行为", "Expand/Off Trigger Row")
    },
    propType: {
      type: 'oneOf',
      value: ['hover', 'click']
    }
  }, {
    name: 'onOpenChange',
    title: {
      label: i18n("SubMenu 展开/关闭的回调", "Callback when SubMenu opens/closes"),
      tip: i18n("展开/关闭的回调", "Expand/Off callback")
    },
    propType: 'func'
  }, {
    name: 'onSelect',
    title: {
      label: i18n("被选中时调用函数", "Function called when selected"),
      tip: i18n("被选中时调用函数", "Function called when selected")
    },
    propType: 'func'
  }, {
    name: 'overflowedIndicator',
    title: {
      label: i18n("折叠图标", "fold icon"),
      tip: i18n("自定义 Menu 折叠时的图标", "Customize the icon when the Menu is collapsed")
    },
    propType: 'node'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onClick',
        template: "onClick({item,key,keyPath,domEvent},${extParams}){\n// Click MenuItem to call this function\nconsole.log('onClick',item,key,keyPath,domEvent);}"
      }, {
        name: 'onDeselect',
        template: "onDeselect({item,key,keyPath,selectedKeys,domEvent},${extParams}){\n// Called when deselecting, only effective in multiple\nconsole.log('onDeselect',item,key,keyPath,selectedKeys,domEvent);}"
      }, {
        name: 'onOpenChange',
        template: "onOpenChange(openKeys,${extParams}){\n// SubMenu Expand/Off callback\nconsole.log('onOpenChange',openKeys);}"
      }, {
        name: 'onSelect',
        template: "onSelect({item,key,keyPath,selectedKeys,domEvent},${extParams}){\n// On select\nconsole.log('onSelect',item,key,keyPath,selectedKeys,domEvent);}"
      }]
    }
  }
};

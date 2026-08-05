import { uuid } from '../_utils/utils';
import { itemsExtraProps } from './utils';
import snippets from './snippets';
export default {
  snippets,
  componentName: 'Menu',
  title: "NavigationMenu",
  category: "Navigation",
  props: [{
    name: 'items',
    title: "Menu Item",
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
                title: "Menu name",
                setter: 'StringSetter'
              }, {
                name: 'category',
                title: {
                  label: "Type",
                  tip: "Menu item type"
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
              children: "Menu name"
            };
          }
        }
      }
    },
    extraProps: itemsExtraProps
  }, {
    name: 'defaultOpenKeys',
    title: {
      label: "Initial expanded menu item",
      tip: "Initial expanded SubMenu menu item key array"
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    }
  }, {
    name: 'defaultSelectedKeys',
    title: {
      label: "Initial selected menu item",
      tip: "Initial selected menu item key array"
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    }
  }, {
    name: 'forceSubMenuRender',
    title: {
      label: "SubMenuForce render",
      tip: "Render into DOM before submenu is displayed"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'inlineCollapsed',
    title: {
      label: "YesNoCollapse",
      tip: "Whether the menu is closed when inline"
    },
    propType: 'bool'
  }, {
    name: 'inlineIndent',
    title: {
      label: "indent width",
      tip: "Menu indent width in inline mode"
    },
    propType: 'number'
  }, {
    name: 'mode',
    title: {
      label: "MenuType",
      tip: "Menu type, now supports vertical, horizontal, and inline modes"
    },
    propType: {
      type: 'oneOf',
      value: ['vertical', 'horizontal', 'inline']
    }
  }, {
    name: 'multiple',
    title: {
      label: "YesNoAllow Multiple",
      tip: "YesNoAllow Multiple"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'openKeys',
    title: {
      label: "Current Expand Menu Item",
      tip: "The currently expanded SubMenu menu item key array"
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    }
  }, {
    name: 'selectable',
    title: {
      label: "Whether to allow selection",
      tip: "Whether to allow selection"
    },
    propType: 'bool',
    defaultValue: true
  }, {
    name: 'selectedKeys',
    title: {
      label: "Current selected",
      tip: "The currently selected menu item key array"
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    }
  }, {
    name: 'style',
    title: {
      label: "Root node style",
      tip: "Root node style"
    },
    propType: 'object'
  }, {
    name: 'subMenuCloseDelay',
    title: {
      label: "Off delay",
      tip: "The closing delay after the user mouse leaves the submenu, unit: seconds"
    },
    propType: 'number'
  }, {
    name: 'subMenuOpenDelay',
    title: {
      label: "Turn on delay",
      tip: "Start delay after the user mouse enters the submenu, unit: seconds"
    },
    propType: 'number'
  }, {
    name: 'theme',
    title: {
      label: "theme color",
      tip: "theme color"
    },
    propType: {
      type: 'oneOf',
      value: ['light', 'dark']
    }
  }, {
    name: 'onClick',
    title: {
      label: "Click the MenuItem to call the function",
      tip: "Click the MenuItem to call the function"
    },
    propType: 'func'
  }, {
    name: 'onDeselect',
    title: {
      label: "Function called when deselected",
      tip: "Called when unchecked, only effective in multiple"
    },
    propType: 'func'
  }, {
    name: 'triggerSubMenuAction',
    title: {
      label: "Trigger mode",
      tip: "Expand/Off Trigger Row"
    },
    propType: {
      type: 'oneOf',
      value: ['hover', 'click']
    }
  }, {
    name: 'onOpenChange',
    title: {
      label: "Callback when SubMenu opens/closes",
      tip: "Expand/Off callback"
    },
    propType: 'func'
  }, {
    name: 'onSelect',
    title: {
      label: "Function called when selected",
      tip: "Function called when selected"
    },
    propType: 'func'
  }, {
    name: 'overflowedIndicator',
    title: {
      label: "fold icon",
      tip: "Customize the icon when the Menu is collapsed"
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

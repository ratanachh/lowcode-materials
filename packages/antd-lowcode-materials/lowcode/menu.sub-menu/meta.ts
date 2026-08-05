import { uuid } from '../_utils/utils';
import { itemsExtraProps } from '../menu/utils';
import snippets from './snippets';
export default {
  snippets,
  componentName: 'Menu.SubMenu',
  title: "SubMenu",
  props: [{
    name: 'items',
    title: "submenu item",
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
                title: "Submenu name",
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
              key: `item-${uuid()}`,
              category: 'Menu.Item',
              children: "Submenu name"
            };
          }
        }
      }
    },
    extraProps: itemsExtraProps
  }, {
    name: 'danger',
    title: {
      label: "ErrorStatus",
      tip: "Display error status style"
    },
    propType: 'bool',
    defaultValue: true
  }, {
    name: 'disabled',
    title: {
      label: "Disabled",
      tip: "Whether disabled"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'icon',
    title: {
      label: "Menu icon",
      tip: "Menu icon"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    },
    defaultValue: false
  }, {
    name: 'key',
    title: {
      label: "unique sign",
      tip: "unique identifier of item"
    },
    propType: 'string'
  }, {
    name: 'title',
    title: {
      label: "Hover Title",
      tip: "Set the floating title displayed when shrinking"
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

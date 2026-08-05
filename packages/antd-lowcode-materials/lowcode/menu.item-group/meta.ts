import { uuid } from '../_utils/utils';
import { itemsExtraProps } from '../menu/utils';
import snippets from './snippets';
export default {
  snippets,
  componentName: 'Menu.ItemGroup',
  title: "menu group",
  props: [{
    name: 'items',
    title: "menu group item",
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
                tite: "Menu name",
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
    name: 'children',
    title: {
      label: "Grouped menu items",
      tip: "Grouped menu items"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'title',
    title: {
      label: "Group title",
      tip: "Group title"
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

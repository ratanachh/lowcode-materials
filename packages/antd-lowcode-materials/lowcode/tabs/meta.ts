import { uuid } from '../_utils/utils';
import snippets from './snippets';
export default {
  snippets,
  componentName: 'Tabs',
  title: "Tabs",
  category: "Data Display",
  props: [{
    name: 'items',
    title: "Tab item",
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
                initialValue: val => val || uuid(),
                supportVariable: true
              }, {
                name: 'label',
                title: "Title",
                setter: 'StringSetter',
                initialValue: "Tab item",
                supportVariable: true
              },
              // {
              //   name: 'closeable',
              // title: 'Closable',
              //   condition(target) {
              //     return target.getProps().getPropValue('type') === 'editable-card';
              //   },
              //   setter: 'BoolSetter',
              //   initialValue: true,
              // },
              {
                name: 'disabled',
                title: "Disabled",
                setter: 'BoolSetter',
                initialValue: false,
                supportVariable: true
              }, {
                name: 'forceRender',
                title: "Force render",
                propType: 'bool',
                setter: 'BoolSetter',
                initialValue: false,
                supportVariable: true
              }, {
                name: 'children',
                title: "Content",
                setter: {
                  componentName: 'SlotSetter',
                  initialValue: {
                    type: 'JSSlot',
                    value: []
                  }
                }
              }]
            }
          },
          initialValue: () => {
            return {
              key: uuid(),
              label: "Tab item",
              disabled: false,
              forceRender: false,
              children: {
                type: 'JSSlot',
                value: []
              }
            };
          }
        }
      }
    }
  },
  // {
  //   name: 'tabs',
  // title: 'Tab item',
  //   setter: {
  //     componentName: 'ArraySetter',
  //     props: {
  //       itemSetter: {
  //         componentName: 'ObjectSetter',
  //         props: {
  //           config: {
  //             items: [
  //               {
  //                 name: 'key',
  //                 title: 'key',
  //                 setter: 'StringSetter',
  //                 initialValue: (val) => val || uuid(),
  //                 supportVariable: true
  //               },
  //               {
  //                 name: 'tab',
  // title: 'Title',
  //                 setter: 'StringSetter',
  // initialValue: 'Tab item',
  //                 supportVariable: true
  //               },
  //               // {
  //               //   name: 'closeable',
  // // title: 'Closable',
  //               //   condition(target) {
  //               //     return target.getProps().getPropValue('type') === 'editable-card';
  //               //   },
  //               //   setter: 'BoolSetter',
  //               //   initialValue: true,
  //               // },
  //               {
  //                 name: 'disabled',
  // title: 'Disabled',
  //                 setter: 'BoolSetter',
  //                 initialValue: false,
  //                 supportVariable: true
  //               },
  //               {
  //                 name: 'forceRender',
  // title: 'Force render',
  //                 propType: 'bool',
  //                 setter: 'BoolSetter',
  //                 initialValue: false,
  //                 supportVariable: true
  //               },
  //             ],
  //           },
  //         },
  //         initialValue: () => {
  //           return {
  //             key: uuid(),
  // tab: 'Tab item',
  //             closeable: true,
  //             disabled: false,
  //             forceRender: false,
  //           };
  //         },
  //       },
  //     },
  //   },
  //   extraProps: {
  //     getValue(target, fieldValue) {
  //       const map = target.node.children.map((child) => {
  //         const key = child.getPropValue('key') ? String(child.getPropValue('key')) : child.id;
  //         return {
  //           key,
  //           tab: child.getPropValue('tab'),
  //           closeable: child.getPropValue('closeable'),
  //           disabled: child.getPropValue('disabled'),
  //           forceRender: child.getPropValue('forceRender'),
  //         };
  //       });
  //       return map;
  //     },
  //     setValue(target, value) {
  //       const { node } = target;
  //       const map = {};

  //       if (!Array.isArray(value)) {
  //         value = [];
  //       }
  //       value.forEach((item) => {
  //         const tabItem = Object.assign({}, item);
  //         map[item.key] = tabItem;
  //       });

  //       node.children.mergeChildren(
  //         (child) => {
  //           const key = String(child.getPropValue('key'));
  //           if (Object.hasOwnProperty.call(map, key)) {
  //             child.setPropValue('tab', map[key].tab);
  //             child.setPropValue('closeable', map[key].closeable);
  //             child.setPropValue('disabled', map[key].disabled);
  //             child.setPropValue('forceRender', map[key].forceRender);
  //             delete map[key];
  //             return false;
  //           }
  //           return true;
  //         },
  //         () => {
  //           const items = [];
  //           for (const key in map) {
  //             if (Object.hasOwnProperty.call(map, key)) {
  //               items.push({
  //                 componentName: 'Tabs.TabPane',
  //                 props: map[key],
  //               });
  //             }
  //           }
  //           return items;
  //         },
  //         (child1, child2) => {
  //           const a = value.findIndex(
  //             (item) => String(item.key) === String(child1.getPropValue('key')),
  //           );
  //           const b = value.findIndex(
  //             (item) => String(item.key) === String(child2.getPropValue('key')),
  //           );
  //           return a - b;
  //         },
  //       );
  //     },
  //   },
  // },
  // {

  //   name: 'addIcon',
  // title: { label: 'Custom add button', tip: 'Custom add button' },
  //   propType: 'node',
  // },
  {
    name: 'animated',
    title: {
      label: "Switch animation",
      tip: "Whether to use animation to switch Tabs"
    },
    propType: 'bool',
    setter: 'BoolSetter',
    supportVariable: true
  },
  // {
  //   name: 'renderTabBar',
  // title: { label: 'Replace TabBar', tip: 'Replace TabBar for secondary encapsulation of label headers' },
  //   propType: 'func',
  // },
  {
    name: 'defaultActiveKey',
    title: {
      label: "Initial selection",
      tip: "Initialize the key of the selected panel, if activeKey is not set"
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  },
  // {
  //   name: 'activeKey',
  // title: { label: 'Currently activated tab panel', tip: 'Currently activated tab panel, please note that if you configure this attribute, you need to handle click switching yourself' },
  //   propType: 'string',
  // },
  {
    name: 'hideAdd',
    title: {
      label: "Hide plus sign",
      tip: "Whether to hide the plus icon, valid when `type=\"editable-card\"`"
    },
    condition(target) {
      return target.getProps().getPropValue('type') === 'editable-card';
    },
    propType: 'bool',
    setter: 'BoolSetter',
    defaultValue: false,
    supportVariable: true
  }, {
    name: 'size',
    title: {
      label: "Size",
      tip: "Size, providing `large` `default` and `small` three sizes"
    },
    propType: {
      type: 'oneOf',
      value: ['large', 'default', 'small']
    },
    defaultValue: 'default'
  }, {
    name: 'centered',
    title: {
      label: "TagCenter",
      tip: "Labels are displayed in the center"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'tabBarExtraContent',
    title: {
      label: "Extra",
      tip: "extra elements on tab bar"
    },
    propType: 'node'
  }, {
    name: 'tabBarGutter',
    title: {
      label: "label gap",
      tip: "gaps between tabs"
    },
    propType: 'number',
    setter: 'NumberSetter',
    supportVariable: true
  },
  // {
  //   name: 'tabBarStyle',
  // title: { label: 'Tab bar style', tip: 'Tab bar style' },
  //   propType: 'object',
  // },
  {
    name: 'tabPosition',
    title: {
      label: "Tab position",
      tip: "Tab position"
    },
    propType: {
      type: 'oneOf',
      value: ['top', 'right', 'bottom', 'left']
    },
    defaultValue: 'top'
  }, {
    name: 'type',
    title: {
      label: "Tab style",
      tip: "The basic style of the page label, optional `line`, `card`, `editable-card` types"
    },
    propType: {
      type: 'oneOf',
      value: ['line', 'card', 'editable-card']
    },
    defaultValue: 'line'
  }, {
    name: 'onChange',
    title: {
      label: "Callback when panel switches",
      tip: "Callback when panel switches"
    },
    propType: 'func'
  }, {
    name: 'onEdit',
    title: {
      label: "AddDeletecallback",
      tip: "Callbacks for adding and deleting tabs, valid when `type=\"editable-card\"`"
    },
    condition(target) {
      return target.getProps().getPropValue('type') === 'editable-card';
    },
    propType: 'func'
  }, {
    name: 'onTabClick',
    title: {
      label: "tabClick callback",
      tip: "tab Click callback"
    },
    propType: 'func'
  }, {
    name: 'onTabScroll',
    title: {
      label: "tabScroll Trigger",
      tip: "tabScroll trigger"
    },
    propType: 'func'
  }, {
    name: 'keyboard',
    title: {
      label: "Keyboard switching",
      tip: "Enable keyboard switching"
    },
    propType: 'bool',
    defaultValue: true
  }],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(activeKey,${extParams}){\n// Callback when panel switches\nconsole.log('onChange',activeKey);}"
      }, {
        name: 'onEdit',
        template: "onEdit(targetKey,action,${extParams}){\n// Callbacks for adding and deleting tabs\nconsole.log('onEdit',targetKey,action);}"
      }, {
        name: 'onTabClick',
        template: "onTabClick(key,event,${extParams}){\n// tab Click callback\nconsole.log('onTabClick',key,event);}"
      }, {
        name: 'onTabScroll',
        template: "onTabScroll({direction},${extParams}){\n// Touch when the tab is scrolling\nconsole.log('onTabScroll',direction);}"
      }]
    },
    advanced: {
      // initialChildren: [
      //   {
      //     componentName: 'Tabs.TabPane',
      //     props: { key: 'item1', tab: 'Item 1' },
      //   },
      //   {
      //     componentName: 'Tabs.TabPane',
      //     props: { key: 'item2', tab: 'Item 2' },
      //   },
      // ],
    }
  }
};

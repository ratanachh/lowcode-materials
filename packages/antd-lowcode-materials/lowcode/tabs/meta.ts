import { uuid } from '../_utils/utils';
import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Tabs',
  title: i18n("标签页", "Tabs"),
  category: "Data Display",
  props: [{
    name: 'items',
    title: i18n("标签项", "Tab item"),
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
                title: i18n("标题", "Title"),
                setter: 'StringSetter',
                initialValue: i18n("标签项", "Tab item"),
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
                title: i18n("禁用", "Disabled"),
                setter: 'BoolSetter',
                initialValue: false,
                supportVariable: true
              }, {
                name: 'forceRender',
                title: i18n("隐藏时保留", "Force render"),
                propType: 'bool',
                setter: 'BoolSetter',
                initialValue: false,
                supportVariable: true
              }, {
                name: 'children',
                title: i18n("内容", "Content"),
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
              label: i18n("标签项", "Tab item"),
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
      label: i18n("切换动画", "Switch animation"),
      tip: i18n("是否使用动画切换Tabs", "Whether to use animation to switch Tabs")
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
      label: i18n("初始选中", "Initial selection"),
      tip: i18n("初始化选中面板的key，如果没有设置activeKey", "Initialize the key of the selected panel, if activeKey is not set")
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
      label: i18n("隐藏加号", "Hide plus sign"),
      tip: i18n("是否隐藏加号图标，在`type=\"editable-card\"`时有效", "Whether to hide the plus icon, valid when `type=\"editable-card\"`")
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
      label: i18n("尺寸", "Size"),
      tip: i18n("大小，提供 `large` `default` 和 `small` 三种大小", "Size, providing `large` `default` and `small` three sizes")
    },
    propType: {
      type: 'oneOf',
      value: ['large', 'default', 'small']
    },
    defaultValue: 'default'
  }, {
    name: 'centered',
    title: {
      label: i18n("标签居中", "TagCenter"),
      tip: i18n("标签居中展示", "Labels are displayed in the center")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'tabBarExtraContent',
    title: {
      label: i18n("额外元素", "Extra"),
      tip: i18n("tab bar上额外的元素", "extra elements on tab bar")
    },
    propType: 'node'
  }, {
    name: 'tabBarGutter',
    title: {
      label: i18n("标签间隙", "label gap"),
      tip: i18n("tabs之间的间隙", "gaps between tabs")
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
      label: i18n("页签位置", "Tab position"),
      tip: i18n("页签位置", "Tab position")
    },
    propType: {
      type: 'oneOf',
      value: ['top', 'right', 'bottom', 'left']
    },
    defaultValue: 'top'
  }, {
    name: 'type',
    title: {
      label: i18n("页签样式", "Tab style"),
      tip: i18n("页签的基本样式，可选`line`、`card`、`editable-card`类型", "The basic style of the page label, optional `line`, `card`, `editable-card` types")
    },
    propType: {
      type: 'oneOf',
      value: ['line', 'card', 'editable-card']
    },
    defaultValue: 'line'
  }, {
    name: 'onChange',
    title: {
      label: i18n("切换面板的回调", "Callback when panel switches"),
      tip: i18n("切换面板的回调", "Callback when panel switches")
    },
    propType: 'func'
  }, {
    name: 'onEdit',
    title: {
      label: i18n("新增删除回调", "AddDeletecallback"),
      tip: i18n("新增和删除页签的回调，在`type=\"editable-card\"`时有效", "Callbacks for adding and deleting tabs, valid when `type=\"editable-card\"`")
    },
    condition(target) {
      return target.getProps().getPropValue('type') === 'editable-card';
    },
    propType: 'func'
  }, {
    name: 'onTabClick',
    title: {
      label: i18n("tab点击回调", "tabClick callback"),
      tip: i18n("tab被点击的回调", "tab Click callback")
    },
    propType: 'func'
  }, {
    name: 'onTabScroll',
    title: {
      label: i18n("tab滚动触发", "tabScroll Trigger"),
      tip: i18n("tab滚动时触发", "tabScroll trigger")
    },
    propType: 'func'
  }, {
    name: 'keyboard',
    title: {
      label: i18n("键盘切换", "Keyboard switching"),
      tip: i18n("开启键盘切换功能", "Enable keyboard switching")
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

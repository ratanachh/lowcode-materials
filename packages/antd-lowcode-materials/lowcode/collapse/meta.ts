import { uuid } from '../_utils/utils';
import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Collapse',
  title: i18n("折叠面板", "Collapse"),
  category: "Data Display",
  props: [{
    name: 'bordered',
    title: {
      label: i18n("显示边框", "Show border"),
      tip: i18n("带边框风格的折叠面板", "Folding panel with border style")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'accordion',
    title: {
      label: i18n("手风琴模式", "accordion mode"),
      tip: i18n("手风琴模式", "accordion mode")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'collapsible',
    title: i18n("可折叠触发区域", "Collapsible trigger area"),
    propType: {
      type: 'oneOf',
      value: ['-', 'header', 'disabled']
    }
  },
  // {
  //   name: 'expandIcon',
  // title: { label: 'Customized switching icon', tip: 'Customized switching icon' },
  //   propType: 'func',
  // },
  {
    name: 'expandIconPosition',
    title: {
      label: i18n("图标位置", "IconPosition"),
      tip: i18n("设置图标位置", "Set IconPosition")
    },
    propType: {
      type: 'oneOf',
      value: ['left', 'right']
    }
  }, {
    name: 'destroyInactivePanel',
    title: {
      label: i18n("隐藏时销毁", "Destroyed when hidden"),
      tip: i18n("销毁折叠隐藏的面板", "Destroy collapsed hidden panels")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'ghost',
    title: {
      label: i18n("透明无边框", "Transparent borderless"),
      tip: i18n("使折叠面板透明且无边框", "Make an accordion transparent and borderless")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'collapses',
    title: i18n("折叠项", "Collapse item"),
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
                name: 'header',
                title: i18n("面板头内容", "Panel header content"),
                setter: 'StringSetter',
                initialValue: i18n("折叠项", "Collapse item")
              }]
            }
          },
          initialValue: () => {
            return {
              key: uuid(),
              header: i18n("折叠项", "Collapse item"),
              showArrow: true,
              collapsible: undefined,
              forceRender: false
            };
          }
        }
      }
    },
    extraProps: {
      getValue(target) {
        console.log('getValue', target.node.children.length);
        const map = target.node.children.map(child => {
          const key = child.getPropValue('key') ? String(child.getPropValue('key')) : child.id;
          return {
            key,
            header: child.getPropValue('header'),
            showArrow: child.getPropValue('showArrow'),
            collapsible: child.getPropValue('collapsible'),
            forceRender: child.getPropValue('forceRender')
          };
        });
        return map;
      },
      setValue(target, value) {
        const {
          node
        } = target;
        const map = {};

        // console.log('setValue',value);

        if (!Array.isArray(value)) {
          value = [];
        }
        value.forEach(item => {
          const tabItem = Object.assign({}, item);
          map[item.key] = tabItem;
        });
        node.children.mergeChildren(child => {
          const key = String(child.getPropValue('key'));
          if (Object.hasOwnProperty.call(map, key)) {
            child.setPropValue('header', map[key].header);
            child.setPropValue('showArrow', map[key].showArrow);
            child.setPropValue('collapsible', map[key].collapsible);
            child.setPropValue('forceRender', map[key].forceRender);
            delete map[key];
            return false;
          }
          return true;
        }, () => {
          const items = [];
          for (const key in map) {
            if (Object.hasOwnProperty.call(map, key)) {
              items.push({
                componentName: 'Collapse.Panel',
                props: map[key]
              });
            }
          }
          return items;
        }, (child1, child2) => {
          const a = value.findIndex(item => String(item.key) === String(child1.getPropValue('key')));
          const b = value.findIndex(item => String(item.key) === String(child2.getPropValue('key')));
          return a - b;
        });
      }
    }
  }, {
    name: 'defaultActiveKey',
    title: {
      label: i18n("初始化选中面板的 key", "Initialize the key of the selected panel"),
      tip: i18n("初始化选中面板的 key", "Initialize the key of the selected panel")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', {
        type: 'arrayOf',
        value: 'string'
      }, 'number', {
        type: 'arrayOf',
        value: 'number'
      }]
    }
  }, {
    name: 'activeKey',
    title: {
      label: i18n("当前激活 tab 面板的 key", "Current Active tab Panel key"),
      tip: i18n("当前激活 tab 面板的 key", "Current Active tab Panel key")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', {
        type: 'arrayOf',
        value: 'string'
      }, 'number', {
        type: 'arrayOf',
        value: 'number'
      }]
    }
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(${extParams}){\n// Callback when panel switches\nconsole.log('onChange');}"
      }]
    },
    component: {
      isContainer: true
    }
  }
};

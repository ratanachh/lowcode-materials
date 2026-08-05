import { uuid } from '../_utils/utils';
import snippets from './snippets';
export default {
  snippets,
  componentName: 'Collapse',
  title: "Collapse",
  category: "Data Display",
  props: [{
    name: 'bordered',
    title: {
      label: "Show border",
      tip: "Folding panel with border style"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'accordion',
    title: {
      label: "accordion mode",
      tip: "accordion mode"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'collapsible',
    title: "Collapsible trigger area",
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
      label: "IconPosition",
      tip: "Set IconPosition"
    },
    propType: {
      type: 'oneOf',
      value: ['left', 'right']
    }
  }, {
    name: 'destroyInactivePanel',
    title: {
      label: "Destroyed when hidden",
      tip: "Destroy collapsed hidden panels"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'ghost',
    title: {
      label: "Transparent borderless",
      tip: "Make an accordion transparent and borderless"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'collapses',
    title: "Collapse item",
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
                title: "Panel header content",
                setter: 'StringSetter',
                initialValue: "Collapse item"
              }]
            }
          },
          initialValue: () => {
            return {
              key: uuid(),
              header: "Collapse item",
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
      label: "Initialize the key of the selected panel",
      tip: "Initialize the key of the selected panel"
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
      label: "Current Active tab Panel key",
      tip: "Current Active tab Panel key"
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

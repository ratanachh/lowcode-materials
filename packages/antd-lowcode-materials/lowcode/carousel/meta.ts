import { uuid } from '../_utils/utils';
import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Carousel',
  title: i18n("走马灯", "Carousel"),
  category: "Data Display",
  props: [{
    name: 'afterChange',
    title: {
      label: i18n("切换面板的回调", "Callback when panel switches"),
      tip: i18n("切换面板的回调", "Callback when panel switches")
    },
    propType: 'func'
  }, {
    name: 'autoplay',
    title: {
      label: i18n("是否自动切换", "Whether to switch automatically"),
      tip: i18n("是否自动切换", "Whether to switch automatically")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'beforeChange',
    title: {
      label: i18n("切换面板的回调", "Callback when panel switches"),
      tip: i18n("切换面板的回调", "Callback when panel switches")
    },
    propType: 'func'
  }, {
    name: 'dotPosition',
    title: {
      label: i18n("指示点位置", "Pointer location"),
      tip: i18n("面板指示点位置，可选 `top` `bottom` `left` `right`", "Panel indication point position, optional `top` `bottom` `left` `right`")
    },
    propType: {
      type: 'oneOf',
      value: ['top', 'bottom', 'left', 'right']
    }
  }, {
    name: 'dots',
    title: {
      label: i18n("显示指示点", "Show indicator point"),
      tip: i18n("是否显示面板指示点", "Whether to display panel indicator points")
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'object']
    }
  }, {
    name: 'easing',
    title: {
      label: i18n("动画效果", "Animation"),
      tip: i18n("动画效果", "Animation")
    },
    propType: 'string'
  }, {
    name: 'effect',
    title: {
      label: i18n("动画效果函数", "Animation effect function"),
      tip: i18n("动画效果函数", "Animation effect function")
    },
    propType: {
      type: 'oneOf',
      value: ['scrollx', 'fade']
    }
  }, {
    name: 'items',
    title: i18n("折叠项", "Collapse item"),
    setter: {
      componentName: 'ArraySetter',
      props: {
        itemSetter: {
          componentName: 'ObjectSetter',
          initialValue: () => {
            return {
              key: uuid()
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
            key
          };
        });
        return map;
      },
      setValue(target, value) {
        const {
          node
        } = target;
        const map = {};
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
            delete map[key];
            return false;
          }
          return true;
        }, () => {
          const items = [];
          for (const key in map) {
            if (Object.hasOwnProperty.call(map, key)) {
              items.push({
                componentName: 'Card',
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
  }],
  configure: {
    supports: {
      style: true
    },
    component: {
      isContainer: true
    }
  }
};

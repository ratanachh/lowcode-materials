import { uuid } from '../_utils/utils';
import snippets from './snippets';
export default {
  snippets,
  componentName: 'Carousel',
  title: "Carousel",
  category: "Data Display",
  props: [{
    name: 'afterChange',
    title: {
      label: "Callback when panel switches",
      tip: "Callback when panel switches"
    },
    propType: 'func'
  }, {
    name: 'autoplay',
    title: {
      label: "Whether to switch automatically",
      tip: "Whether to switch automatically"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'beforeChange',
    title: {
      label: "Callback when panel switches",
      tip: "Callback when panel switches"
    },
    propType: 'func'
  }, {
    name: 'dotPosition',
    title: {
      label: "Pointer location",
      tip: "Panel indication point position, optional `top` `bottom` `left` `right`"
    },
    propType: {
      type: 'oneOf',
      value: ['top', 'bottom', 'left', 'right']
    }
  }, {
    name: 'dots',
    title: {
      label: "Show indicator point",
      tip: "Whether to display panel indicator points"
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'object']
    }
  }, {
    name: 'easing',
    title: {
      label: "Animation",
      tip: "Animation"
    },
    propType: 'string'
  }, {
    name: 'effect',
    title: {
      label: "Animation effect function",
      tip: "Animation effect function"
    },
    propType: {
      type: 'oneOf',
      value: ['scrollx', 'fade']
    }
  }, {
    name: 'items',
    title: "Collapse item",
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

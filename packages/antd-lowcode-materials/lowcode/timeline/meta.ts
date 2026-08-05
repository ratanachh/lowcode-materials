import { uuid } from '../_utils/utils';
import snippets from './snippets';
export default {
  snippets,
  componentName: 'Timeline',
  title: "Timeline",
  category: "Data Display",
  props: [{
    name: 'steps',
    title: "Step config",
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
                name: 'color',
                title: "circle color",
                setter: 'StringSetter'
              }, {
                name: 'dot',
                title: "Custom timeline points",
                setter: 'node'
              }, {
                name: 'label',
                title: "Set Tag",
                setter: 'StringSetter'
              }, {
                name: 'position',
                title: {
                  label: "CustomNodePosition",
                  tip: "CustomNodePosition"
                },
                propType: {
                  type: 'oneOf',
                  value: ['left', 'right']
                },
                setter: [{
                  componentName: 'RadioGroupSetter',
                  props: {
                    options: [{
                      title: 'left',
                      value: 'left'
                    }, {
                      title: 'right',
                      value: 'right'
                    }]
                  }
                }, 'VariableSetter']
              }]
            }
          },
          initialValue: () => {
            return {
              key: `timeLine${uuid()}`,
              label: "Timeline"
            };
          }
        }
      }
    },
    extraProps: {
      getValue(target) {
        const map = target.node.children.map(child => {
          const key = child.getPropValue('key') ? String(child.getPropValue('key')) : child.id;
          const result = {
            key
          };
          ['color', 'dot', 'label', 'position'].forEach(propKey => {
            result[propKey] = child.getPropValue(propKey);
          });
          return result;
        });
        return map.length === 0 ? fieldValue : map;
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
            ['color', 'dot', 'label', 'position'].forEach(propKey => {
              child.setPropValue(propKey, map[key][propKey]);
            });
            delete map[key];
            return false;
          }
          return true;
        }, () => {
          const items = [];
          for (const key in map) {
            if (Object.hasOwnProperty.call(map, key)) {
              items.push({
                componentName: 'Timeline.Item',
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
    name: 'mode',
    title: {
      label: "Mode",
      tip: "By setting `mode` you can change the relative position of the timeline and content"
    },
    propType: {
      type: 'oneOf',
      value: ['left', 'alternate', 'right']
    }
  }, {
    name: 'pending',
    title: {
      label: "The last node exists",
      tip: "Specifies whether the last ghost node exists"
    },
    propType: 'bool'
  }, {
    name: 'pendingDot',
    title: {
      label: "When the last ghost node exists, specify its time graph point",
      tip: "When the last ghost node exists, specify its time graph point"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'reverse',
    title: {
      label: "NodeSort",
      tip: "NodeSort"
    },
    propType: 'bool',
    defaultValue: false
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

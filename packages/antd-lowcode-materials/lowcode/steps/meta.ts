import { uuid } from '../_utils/utils';
import snippets from './snippets';
export default {
  snippets,
  componentName: 'Steps',
  title: "Steps",
  category: "Navigation",
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
                name: 'title',
                title: "Title",
                setter: 'StringSetter'
              }, {
                name: 'subTitle',
                title: "Subtitle",
                setter: 'StringSetter'
              }, {
                name: 'description',
                title: "Detailed description",
                setter: 'StringSetter'
              }, {
                name: 'disabled',
                title: "Disabled",
                setter: 'BoolSetter',
                initialValue: false
              }, {
                name: 'status',
                title: {
                  label: "Status",
                  tip: "Select size"
                },
                setter: {
                  componentName: 'RadioGroupSetter',
                  props: {
                    options: [{
                      title: 'wait',
                      value: 'wait'
                    }, {
                      title: 'process',
                      value: 'process'
                    }, {
                      title: 'finish',
                      value: 'finish'
                    }, {
                      title: 'error',
                      value: 'error'
                    }]
                  }
                },
                propType: {
                  type: 'oneOf',
                  value: ['wait', 'process', 'finish', 'error']
                },
                defaultValue: 'wait'
              }]
            }
          },
          initialValue: () => {
            return {
              key: `Steps${uuid()}`,
              title: "Step",
              disabled: false
            };
          }
        }
      }
    },
    extraProps: {
      getValue(target) {
        const map = target.node.children.map(child => {
          const key = child.getPropValue('key') ? String(child.getPropValue('key')) : child.id;
          return {
            key,
            title: child.getPropValue('title'),
            subTitle: child.getPropValue('subTitle'),
            description: child.getPropValue('description'),
            disabled: child.getPropValue('disabled'),
            status: child.getPropValue('status')
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
            child.setPropValue('title', map[key].title);
            child.setPropValue('subTitle', map[key].subTitle);
            child.setPropValue('description', map[key].description);
            child.setPropValue('disabled', map[key].disabled);
            child.setPropValue('status', map[key].status);
            delete map[key];
            return false;
          }
          return true;
        }, () => {
          const items = [];
          for (const key in map) {
            if (Object.hasOwnProperty.call(map, key)) {
              items.push({
                componentName: 'Steps.Step',
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
    name: 'className',
    title: {
      label: "StepsclassName",
      tip: "StepsclassName"
    },
    propType: 'string'
  }, {
    name: 'type',
    title: {
      label: "Type",
      tip: "Step bar types, including `default` and `navigation`"
    },
    propType: {
      type: 'oneOf',
      value: ['default', 'navigation']
    },
    defaultValue: 'default'
  }, {
    name: 'current',
    title: {
      label: "Current Step",
      tip: "Specify the current step, counting from 0. In child Step elements, status can be overridden via the `status` attribute"
    },
    propType: 'number'
  }, {
    name: 'direction',
    title: {
      label: "StepsDirection",
      tip: "Specifies the step bar direction. Currently supports horizontal (`horizontal`) and vertical (`vertical`) directions."
    },
    propType: {
      type: 'oneOf',
      value: ['horizontal', 'vertical']
    }
  }, {
    name: 'labelPlacement',
    title: {
      label: "TagDrop Position",
      tip: "Specify the label placement position. By default, it is placed horizontally to the right of the icon. `vertical` is optional and placed below the icon."
    },
    propType: {
      type: 'oneOf',
      value: ['horizontal', 'vertical']
    },
    defaultValue: 'horizontal'
  }, {
    name: 'progressDot',
    title: {
      label: "dotted step bar",
      tip: "Dotted step bar, can be set to a func"
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'func']
    }
  }, {
    name: 'size',
    title: {
      label: "Size",
      tip: "Specify Size"
    },
    propType: {
      type: 'oneOf',
      value: ['default', 'small']
    },
    defaultValue: 'default'
  }, {
    name: 'status',
    title: {
      label: "Current StepStatus",
      tip: "Specify Current Step Status，Optional `wait` `process` `finish` `error`"
    },
    propType: {
      type: 'oneOf',
      value: ['wait', 'process', 'finish', 'error']
    },
    defaultValue: 'process'
  }, {
    name: 'initial',
    title: {
      label: "Starting sequence number",
      tip: "Starting sequence number, counting from 0"
    },
    propType: 'number',
    defaultValue: 0
  }, {
    name: 'onChange',
    title: {
      label: "Triggered when a switch step is clicked",
      tip: "Triggered when a switch step is clicked"
    },
    propType: 'func'
  }],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        childWhitelist: ['Steps.Step']
      }
    },
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(current,${extParams}){\n// Triggered when a switch step is clicked\nconsole.log('onChange',current);}"
      }]
    }
  }
};

import { uuid } from '../_utils/utils';
import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Steps',
  title: i18n("步骤条", "Steps"),
  category: "Navigation",
  props: [{
    name: 'steps',
    title: i18n("步骤配置", "Step config"),
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
                title: i18n("标题", "Title"),
                setter: 'StringSetter'
              }, {
                name: 'subTitle',
                title: i18n("子标题", "Subtitle"),
                setter: 'StringSetter'
              }, {
                name: 'description',
                title: i18n("详细描述", "Detailed description"),
                setter: 'StringSetter'
              }, {
                name: 'disabled',
                title: i18n("禁用", "Disabled"),
                setter: 'BoolSetter',
                initialValue: false
              }, {
                name: 'status',
                title: {
                  label: i18n("状态", "Status"),
                  tip: i18n("选择框大小", "Select size")
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
              title: i18n("步骤", "Step"),
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
      label: i18n("步骤条类名", "StepsclassName"),
      tip: i18n("步骤条类名", "StepsclassName")
    },
    propType: 'string'
  }, {
    name: 'type',
    title: {
      label: i18n("类型", "Type"),
      tip: i18n("步骤条类型，有 `default` 和 `navigation` 两种", "Step bar types, including `default` and `navigation`")
    },
    propType: {
      type: 'oneOf',
      value: ['default', 'navigation']
    },
    defaultValue: 'default'
  }, {
    name: 'current',
    title: {
      label: i18n("当前步骤", "Current Step"),
      tip: i18n("指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态", "Specify the current step, counting from 0. In child Step elements, status can be overridden via the `status` attribute")
    },
    propType: 'number'
  }, {
    name: 'direction',
    title: {
      label: i18n("步骤条方向", "StepsDirection"),
      tip: i18n("指定步骤条方向。目前支持水平（`horizontal`）和竖直（`vertical`）两种方向", "Specifies the step bar direction. Currently supports horizontal (`horizontal`) and vertical (`vertical`) directions.")
    },
    propType: {
      type: 'oneOf',
      value: ['horizontal', 'vertical']
    }
  }, {
    name: 'labelPlacement',
    title: {
      label: i18n("标签放置位置", "TagDrop Position"),
      tip: i18n("指定标签放置位置，默认水平放图标右侧，可选 `vertical` 放图标下方", "Specify the label placement position. By default, it is placed horizontally to the right of the icon. `vertical` is optional and placed below the icon.")
    },
    propType: {
      type: 'oneOf',
      value: ['horizontal', 'vertical']
    },
    defaultValue: 'horizontal'
  }, {
    name: 'progressDot',
    title: {
      label: i18n("点状步骤条", "dotted step bar"),
      tip: i18n("点状步骤条，可以设置为一个 func", "Dotted step bar, can be set to a func")
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'func']
    }
  }, {
    name: 'size',
    title: {
      label: i18n("尺寸", "Size"),
      tip: i18n("指定大小", "Specify Size")
    },
    propType: {
      type: 'oneOf',
      value: ['default', 'small']
    },
    defaultValue: 'default'
  }, {
    name: 'status',
    title: {
      label: i18n("当前步骤状态", "Current StepStatus"),
      tip: i18n("指定当前步骤的状态，可选 `wait` `process` `finish` `error`", "Specify Current Step Status，Optional `wait` `process` `finish` `error`")
    },
    propType: {
      type: 'oneOf',
      value: ['wait', 'process', 'finish', 'error']
    },
    defaultValue: 'process'
  }, {
    name: 'initial',
    title: {
      label: i18n("起始序号", "Starting sequence number"),
      tip: i18n("起始序号，从 0 开始记数", "Starting sequence number, counting from 0")
    },
    propType: 'number',
    defaultValue: 0
  }, {
    name: 'onChange',
    title: {
      label: i18n("点击切换步骤时触发", "Triggered when a switch step is clicked"),
      tip: i18n("点击切换步骤时触发", "Triggered when a switch step is clicked")
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

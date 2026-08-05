import { uuid } from '../_utils/utils';
import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Timeline',
  title: i18n("时间轴", "Timeline"),
  category: "Data Display",
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
                name: 'color',
                title: i18n("圆圈颜色", "circle color"),
                setter: 'StringSetter'
              }, {
                name: 'dot',
                title: i18n("自定义时间轴点", "Custom timeline points"),
                setter: 'node'
              }, {
                name: 'label',
                title: i18n("设置标签", "Set Tag"),
                setter: 'StringSetter'
              }, {
                name: 'position',
                title: {
                  label: i18n("自定义节点位置", "CustomNodePosition"),
                  tip: i18n("自定义节点位置", "CustomNodePosition")
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
              label: i18n("时间轴", "Timeline")
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
      label: i18n("模式", "Mode"),
      tip: i18n("通过设置 `mode` 可以改变时间轴和内容的相对位置", "By setting `mode` you can change the relative position of the timeline and content")
    },
    propType: {
      type: 'oneOf',
      value: ['left', 'alternate', 'right']
    }
  }, {
    name: 'pending',
    title: {
      label: i18n("存在最后节点", "The last node exists"),
      tip: i18n("指定最后一个幽灵节点是否存在", "Specifies whether the last ghost node exists")
    },
    propType: 'bool'
  }, {
    name: 'pendingDot',
    title: {
      label: i18n("当最后一个幽灵节点存在時，指定其时间图点", "When the last ghost node exists, specify its time graph point"),
      tip: i18n("当最后一个幽灵节点存在時，指定其时间图点", "When the last ghost node exists, specify its time graph point")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'reverse',
    title: {
      label: i18n("节点排序", "NodeSort"),
      tip: i18n("节点排序", "NodeSort")
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

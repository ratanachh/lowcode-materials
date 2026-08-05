import { uuid } from '../_utils/utils';
import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Descriptions',
  title: i18n("描述列表", "Descriptions"),
  category: "Data Display",
  props: [{
    name: 'title',
    title: {
      label: i18n("标题", "Title"),
      tip: i18n("描述列表的标题，显示在最顶部", "A title that describes the list, displayed at the top")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'items',
    title: {
      label: i18n("列表项", "List item"),
      tip: i18n("列表项", "List item")
    },
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
                condition: () => false
              }, {
                name: 'label',
                title: i18n("标题", "Title"),
                setter: 'StringSetter',
                initialValue: i18n("列表项", "List item")
              }, {
                name: 'span',
                title: i18n("所占列数", "Number of columns occupied"),
                setter: 'NumberSetter',
                initialValue: 1
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
              span: 1,
              children: {
                type: 'JSSlot',
                value: []
              }
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
            label: child.getPropValue('label'),
            span: child.getPropValue('span'),
            children: child.getPropValue('children')
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
            child.setPropValue('label', map[key].label);
            child.setPropValue('span', map[key].span);
            child.setPropValue('children', map[key].children);
            delete map[key];
            return false;
          }
          return true;
        }, () => {
          const items = [];
          for (const key in map) {
            if (Object.hasOwnProperty.call(map, key)) {
              items.push({
                componentName: 'Descriptions.Item',
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
      // getValue(target) {
      //   // const node = target.nodes[0];
      //   // const children = node.getChildren();
      //   const map = target.node.children.map(child => {
      //     return {
      //       key: child.getPropValue('key') || uuid(),
      //       label: child.getPropValue('label'),
      //       span: child.getPropValue('span'),
      //       children: child.getPropValue('children'),
      //     };
      //   });
      //   return map;
      // },
      // setValue(target, value) {
      //   const node = target.node;

      //   if (!Array.isArray(value)) {
      //     value = [];
      //   }

      //   node.children.mergeChildren(
      //     () => true,
      //     () => {
      //       return value.map(item => ({
      //         componentName: 'Descriptions.Item',
      //         props: Object.assign({}, item),
      //       }));
      //     }
      //   );
      // },
    }
  }, {
    name: 'bordered',
    title: {
      label: i18n("显示边框", "Show border"),
      tip: i18n("是否展示边框", "Whether to display borders")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'column',
    title: {
      label: i18n("列数", "Number of columns"),
      tip: i18n("一行的列表项数量", "Number of list items in a row")
    },
    propType: 'number',
    defaultValue: 3
  }, {
    name: 'size',
    title: {
      label: i18n("尺寸", "Size"),
      tip: i18n("设置列表的大小。可以设置为 `middle` 、`small`, 或不填（只有设置 `bordered={true}` 生效）", "Set the size of the list. Can be set to `middle`, `small`, or left blank (only setting `bordered={true}` takes effect)")
    },
    propType: {
      type: 'oneOf',
      value: ['default', 'middle', 'small']
    },
    defaultValue: 'middle'
  }, {
    name: 'layout',
    title: {
      label: i18n("布局方向", "LayoutDirection"),
      tip: i18n("描述布局", "Describe layout")
    },
    propType: {
      type: 'oneOf',
      value: ['horizontal', 'vertical']
    },
    defaultValue: 'horizontal'
  }, {
    name: 'colon',
    title: {
      label: i18n("展示冒号", "Colon"),
      tip: i18n("配置 `Descriptions.Item` 的 `colon` 的默认值", "config `Descriptions.Item` `colon` Default value")
    },
    propType: 'bool',
    defaultValue: true
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

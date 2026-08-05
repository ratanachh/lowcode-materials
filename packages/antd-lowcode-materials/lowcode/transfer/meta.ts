import { uuid } from '../_utils/utils';
import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Transfer',
  title: i18n("穿梭框", "Transfer"),
  category: "Data Entry",
  props: [{
    name: 'dataSource',
    title: {
      label: i18n("数据源", "Data source"),
      tip: i18n("数据源，其中的数据将会被渲染到左边一栏中，`targetKeys` 中指定的除外", "The data source whose data will be rendered into the left column, except those specified in `targetKeys`")
    },
    propType: {
      type: 'arrayOf',
      value: 'object'
    },
    setter: {
      componentName: 'ArraySetter',
      props: {
        itemSetter: {
          componentName: 'ObjectSetter',
          initialValue: () => {
            return {
              key: uuid()
            };
          },
          props: {
            config: {
              items: [{
                name: 'key',
                title: 'key',
                setter: 'StringSetter',
                initialValue: (val: any) => val || uuid()
              }, {
                name: 'title',
                title: 'title',
                setter: 'StringSetter',
                isRequired: true
              }, {
                name: 'description',
                title: i18n("描述", "describe"),
                setter: 'StringSetter'
              }, {
                name: 'disabled',
                title: i18n("禁止穿梭", "no shuttle"),
                setter: ['BoolSetter', 'FunctionSetter']
              }]
            }
          }
        }
      }
    }
  }, {
    name: 'selectedKeys',
    title: {
      label: i18n("选中项", "Selected items"),
      tip: i18n("设置哪些项应该被选中", "Set which items should be selected")
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    },
    setter: {
      componentName: 'ArraySetter',
      props: {
        itemSetter: 'StringSetter'
      }
    },
    supportVariable: true
  }, {
    name: 'targetKeys',
    title: {
      label: i18n("右侧框数据", "Right box data"),
      tip: i18n("显示在右侧框数据的 key 集合", "The key collection of data displayed in the right box")
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    },
    setter: {
      componentName: 'ArraySetter',
      props: {
        itemSetter: 'StringSetter'
      }
    },
    supportVariable: true
  }, {
    title: i18n("常用设置", "Common settings"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'oneWay',
      title: {
        label: i18n("展示为单向样式", "Shown as one-way style"),
        tip: i18n("展示为单向样式", "Shown as one-way style")
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'disabled',
      title: {
        label: i18n("是否禁用", "Disabled"),
        tip: i18n("是否为禁用状态", "Whether disabled")
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'showSearch',
      title: {
        label: i18n("是否显示搜索框", "YesNoShowSearch"),
        tip: i18n("是否显示搜索框", "YesNoShowSearch")
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'showSelectAll',
      title: {
        label: i18n("是否展示全选勾选框", "Whether to display the Select All checkbox"),
        tip: i18n("是否展示全选勾选框", "Whether to display the Select All checkbox")
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: true
    }, {
      name: 'pagination',
      title: {
        label: i18n("分页设置", "PaginationSet"),
        tip: i18n("使用分页样式，自定义渲染列表下无效", "Using paging style, it is invalid under custom rendering list")
      },
      setter: ['BoolSetter', {
        componentName: 'ObjectSetter',
        props: {
          config: {
            items: [{
              name: 'pageSize',
              title: i18n("单页条数", "Number of items on a single page"),
              setter: 'NumberSetter'
            }, {
              name: 'simple',
              title: i18n("简单模式", "Simple mode"),
              setter: 'BoolSetter'
            }, {
              name: 'showSizeChanger',
              title: i18n("展示条数切换器", "Display number switcher"),
              setter: 'BoolSetter'
            }]
          }
        }
      }],
      propType: {
        type: 'oneOfType',
        value: ['bool', 'object']
      },
      defaultValue: false
    }, {
      name: 'render',
      title: {
        label: i18n("每行数据渲染函数", "Data rendering function for each row"),
        tip: i18n("每行数据渲染函数，该函数的入参为 `dataSource` 中的项，返回值为 ReactElement。或者返回一个普通对象，其中 `label` 字段为 ReactElement，`value` 字段为 title", "Each row of data rendering function, the input parameter of this function is the item in `dataSource`, and the return value is ReactElement. Or return a normal object, where the `label` field is ReactElement and the `value` field is title")
      },
      propType: 'func',
      setter: [{
        componentName: 'FunctionSetter',
        props: {
          template: 'renderItem(record,${extParams}){\n// Each row of data rendering function\nreturn record.title;\n}'
        }
      }, 'VariableSetter']
    }, {
      name: 'filterOption',
      title: {
        label: i18n("过滤选项", "Filter options"),
        tip: i18n("接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false", "Receives two parameters: `inputValue` and `option`. When `option` meets the filtering conditions, it should return true, otherwise it should return false.")
      },
      propType: 'func',
      setter: [{
        componentName: 'FunctionSetter',
        props: {
          template: 'filterOption(inputValue,option,${extParams}){\n// Receive two parameters inputValue option. When option meets the filtering conditions, it should return true, otherwise it will return false\n\n}'
        }
      }, 'VariableSetter']
    }, {
      name: 'footer',
      title: {
        label: i18n("底部", "Bottom"),
        tip: i18n("footer | 底部", "footer | Bottom")
      },
      propType: 'func',
      setter: [{
        componentName: 'FunctionSetter',
        props: {
          template: 'renderItem(item,${extParams}){\n// CustomRender List item\nreturn `item`;\n}'
        }
      }, {
        componentName: 'SlotSetter',
        title: i18n("渲染函数插槽", "Render function slot"),
        initialValue: {
          type: 'JSSlot',
          value: [],
          params: ['props', 'info']
        }
      }, 'VariableSetter']
    }]
  },
  // {
  //   name: 'listStyle',
  // title: { label: 'Custom style of two shuttle boxes', tip: 'Custom style of two shuttle boxes' },
  //   propType: { type: 'oneOfType', value: ['object', 'func'] },
  // },
  // {
  //   name: 'locale',
  // title: { label: 'Various languages', tip: 'Various languages' },
  //   propType: 'object',
  // },

  {
    name: 'operations',
    title: {
      label: i18n("操作文案", "Operational copy"),
      tip: i18n("操作文案集合，顺序从上至下", "A collection of operation documents, in order from top to bottom")
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    }
  }, {
    name: 'titles',
    title: {
      label: i18n("标题集合", "title collection"),
      tip: i18n("标题集合，顺序从左至右", "A collection of titles, ordered from left to right")
    },
    propType: {
      type: 'arrayOf',
      value: 'node'
    }
  }, {
    name: 'selectAllLabels',
    title: {
      label: i18n("多选框标题集合", "Multiple selection box title collection"),
      tip: i18n("自定义顶部多选框标题的集合", "Collection of custom top checkbox titles")
    },
    propType: {
      type: 'arrayOf',
      value: {
        type: 'oneOfType',
        value: ['node', 'func']
      }
    }
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(targetKeys,direction,moveKeys,${extParams}){\n// Callback function when options are transferred between two columns\nconsole.log('onChange',targetKeys,direction,moveKeys);}"
      }, {
        name: 'onScroll',
        template: "onScroll(direction,event,${extParams}){\n// OptionListScroll on callback\nconsole.log('onScroll',direction,event);}"
      }, {
        name: 'onSearch',
        template: "onSearch(direction,value,${extParams}){\n// Callback function when the search box content changes\nconsole.log('onSearch',direction,value);}"
      }, {
        name: 'onSelectChange',
        template: "onSelectChange(sourceSelectedKeys,targetSelectedKeys,${extParams}){\n// Callback function when the selected item changes\nconsole.log('onSelectChange', sourceSelectedKeys, targetSelectedKeys);}"
      }]
    }
  }
};

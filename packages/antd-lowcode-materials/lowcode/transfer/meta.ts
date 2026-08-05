import { uuid } from '../_utils/utils';
import snippets from './snippets';
export default {
  snippets,
  componentName: 'Transfer',
  title: "Transfer",
  category: "Data Entry",
  props: [{
    name: 'dataSource',
    title: {
      label: "Data source",
      tip: "The data source whose data will be rendered into the left column, except those specified in `targetKeys`"
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
                title: "describe",
                setter: 'StringSetter'
              }, {
                name: 'disabled',
                title: "no shuttle",
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
      label: "Selected items",
      tip: "Set which items should be selected"
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
      label: "Right box data",
      tip: "The key collection of data displayed in the right box"
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
    title: "Common settings",
    display: 'block',
    type: 'group',
    items: [{
      name: 'oneWay',
      title: {
        label: "Shown as one-way style",
        tip: "Shown as one-way style"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'disabled',
      title: {
        label: "Disabled",
        tip: "Whether disabled"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'showSearch',
      title: {
        label: "YesNoShowSearch",
        tip: "YesNoShowSearch"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'showSelectAll',
      title: {
        label: "Whether to display the Select All checkbox",
        tip: "Whether to display the Select All checkbox"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: true
    }, {
      name: 'pagination',
      title: {
        label: "PaginationSet",
        tip: "Using paging style, it is invalid under custom rendering list"
      },
      setter: ['BoolSetter', {
        componentName: 'ObjectSetter',
        props: {
          config: {
            items: [{
              name: 'pageSize',
              title: "Number of items on a single page",
              setter: 'NumberSetter'
            }, {
              name: 'simple',
              title: "Simple mode",
              setter: 'BoolSetter'
            }, {
              name: 'showSizeChanger',
              title: "Display number switcher",
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
        label: "Data rendering function for each row",
        tip: "Each row of data rendering function, the input parameter of this function is the item in `dataSource`, and the return value is ReactElement. Or return a normal object, where the `label` field is ReactElement and the `value` field is title"
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
        label: "Filter options",
        tip: "Receives two parameters: `inputValue` and `option`. When `option` meets the filtering conditions, it should return true, otherwise it should return false."
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
        label: "Bottom",
        tip: "footer | Bottom"
      },
      propType: 'func',
      setter: [{
        componentName: 'FunctionSetter',
        props: {
          template: 'renderItem(item,${extParams}){\n// CustomRender List item\nreturn `item`;\n}'
        }
      }, {
        componentName: 'SlotSetter',
        title: "Render function slot",
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
      label: "Operational copy",
      tip: "A collection of operation documents, in order from top to bottom"
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    }
  }, {
    name: 'titles',
    title: {
      label: "title collection",
      tip: "A collection of titles, ordered from left to right"
    },
    propType: {
      type: 'arrayOf',
      value: 'node'
    }
  }, {
    name: 'selectAllLabels',
    title: {
      label: "Multiple selection box title collection",
      tip: "Collection of custom top checkbox titles"
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

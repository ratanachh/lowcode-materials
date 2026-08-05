import { uuid } from '../_utils/utils';
import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'AutoComplete',
  title: i18n("辅助提示输入框", "AutoComplete"),
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: i18n("默认值", "Default value"),
      tip: i18n("默认选中值", "Default selected value")
    },
    propType: 'string'
  }, {
    name: 'value',
    title: {
      label: i18n("当前值", "Current value"),
      tip: i18n("当前选中值", "Currently selected value")
    },
    propType: 'string'
  }, {
    name: 'allowClear',
    title: {
      label: i18n("支持清除", "Allow clear"),
      tip: i18n("是否允许清除", "Whether allow clear")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'options',
    title: {
      label: i18n("选项内容", "OptionContent"),
      tip: i18n("选项列表", "OptionList")
    },
    setter: {
      componentName: 'ArraySetter',
      props: {
        itemSetter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [{
                name: 'label',
                title: i18n("选项名", "Option label"),
                setter: 'StringSetter'
              }, {
                name: 'value',
                title: i18n("选项值", "Option value"),
                setter: 'StringSetter'
              }]
            }
          },
          initialValue: () => {
            return {
              label: i18n("选项名", "Option label"),
              value: uuid()
            };
          }
        }
      }
    }
  }, {
    name: 'autoFocus',
    title: {
      label: i18n("自动聚焦", "Auto focus"),
      tip: i18n("自动获取焦点", "Auto focus")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'backfill',
    title: {
      label: i18n("键盘选中回填", "Keyboard selection backfill"),
      tip: i18n("使用键盘选择选项的时候把选中项回填到输入框中", "When using the keyboard to select an option, backfill the selected item into the input box")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'defaultActiveFirstOption',
    title: {
      label: i18n("默认高亮首个选项", "The first option is highlighted by default"),
      tip: i18n("是否默认高亮第一个选项", "Whether to highlight the first option by default")
    },
    propType: 'bool',
    defaultValue: true
  }, {
    name: 'disabled',
    title: {
      label: i18n("是否禁用", "Disabled"),
      tip: i18n("是否为禁用状态", "Whether disabled")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'filterOption',
    title: {
      label: i18n("可选项筛选", "Filter options"),
      tip: i18n("是否根据输入项进行筛选", "Whether to filter based on input items")
    },
    propType: 'bool'
  }, {
    name: 'placeholder',
    title: {
      label: i18n("输入框提示", "Input placeholder"),
      tip: i18n("输入框提示", "Input placeholder")
    },
    propType: 'string'
  }, {
    name: 'onBlur',
    title: {
      label: i18n("失去焦点时的回调", "Callback on blur"),
      tip: i18n("失去焦点时的回调", "Callback on blur")
    },
    propType: 'func'
  }, {
    name: 'onChange',
    title: {
      label: i18n("value变化时的回调", "valueChange on callback"),
      tip: i18n("选中 option，或 input 的 value 变化时，调用此函数", "This function is called when the option is selected or the value of the input changes.")
    },
    propType: 'func'
  }, {
    name: 'onFocus',
    title: {
      label: i18n("获得焦点时的回调", "Callback when focus is obtained"),
      tip: i18n("获得焦点时的回调", "Callback when focus is obtained")
    },
    propType: 'func'
  }, {
    name: 'onSearch',
    title: {
      label: i18n("搜索补全项的时候调用", "Called when searching for completion items"),
      tip: i18n("搜索补全项的时候调用", "Called when searching for completion items")
    },
    propType: 'func'
  }, {
    name: 'onSelect',
    title: {
      label: i18n("被选中时的回调", "Callback when selected"),
      tip: i18n("被选中时调用，参数为选中项的 value 值", "Called when selected, the parameter is the value of the selected item")
    },
    propType: 'func'
  }, {
    name: 'defaultOpen',
    title: {
      label: i18n("默认展开菜单", "DefaultExpandMenu"),
      tip: i18n("是否默认展开下拉菜单", "YesNoDefaultExpandDropdown")
    },
    propType: 'bool'
  },
  // {
  //   name: 'open',
  // title: { label: 'ExpandDropdown', tip: 'YesNoExpandDropdown' },
  //   propType: 'bool',
  // },
  {
    name: 'onDropdownVisibleChange',
    title: {
      label: i18n("展开下拉菜单的回调", "Callback when dropdown opens"),
      tip: i18n("展开下拉菜单的回调", "Callback when dropdown opens")
    },
    propType: 'func'
  }, {
    name: 'notFoundContent',
    title: {
      label: i18n("无数据展示", "Not found content"),
      tip: i18n("当下拉列表为空时显示的内容", "What is displayed when the drop-down list is empty")
    },
    propType: 'string'
  }],
  configure: {
    props: [{
      name: 'defaultValue',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '默认值',
          en_US: 'Default Value'
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: defaultValue | 说明: 默认值',
          en_US: 'prop: defaultValue | description: defaultValue'
        }
      },
      setter: 'StringSetter',
      supportVariable: true
    }, {
      name: 'value',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '当前值',
          en_US: 'Value'
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: Value | 说明: 当前值',
          en_US: 'prop: Value | description: Value'
        }
      },
      setter: 'StringSetter',
      supportVariable: true
    }, {
      name: 'allowClear',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '支持清除',
          en_US: 'Allow Clear'
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: allowClear | 说明：是否允许清除',
          en_US: 'prop: allowClear | description: Allow Clear'
        }
      },
      setter: 'BoolSetter',
      supportVariable: true
    }, {
      name: 'options',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '选项内容',
          en_US: 'Options'
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: options | 说明：选项列表',
          en_US: 'prop: options | description: Options'
        }
      },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [{
                  name: 'label',
                  title: i18n("选项名", "Option label"),
                  setter: 'StringSetter',
                  isRequired: true
                }, {
                  name: 'value',
                  title: i18n("选项值", "Option value"),
                  setter: 'StringSetter',
                  isRequired: true
                }]
              }
            },
            initialValue: () => {
              return {
                label: i18n("选项名", "Option label"),
                value: uuid()
              };
            }
          }
        }
      }
    }, {
      name: 'autoFocus',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '自动聚焦',
          en_US: 'Auto Focus'
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: autoFocus | 说明：自动获取焦点',
          en_US: 'prop: autoFocus | description: Auto Focus'
        }
      },
      setter: 'BoolSetter',
      supportVariable: true
    }, {
      name: 'backfill',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '键盘选中回填',
          en_US: 'Backfill'
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: backfill | 说明：使用键盘选择选项的时候把选中项回填到输入框中',
          en_US: 'prop: backfill | description: When using the keyboard to select options, backfill the selected items into the input box'
        }
      },
      setter: 'BoolSetter',
      supportVariable: true
    }, {
      name: 'defaultActiveFirstOption',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '默认高亮首个选项',
          en_US: 'Default Active First Option'
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: defaultActiveFirstOption | 说明：是否默认高亮第一个选项',
          en_US: 'prop: defaultActiveFirstOption | description: Whether to highlight the first option by default'
        }
      },
      setter: 'BoolSetter',
      defaultValue: true,
      supportVariable: true
    }, {
      name: 'disabled',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '是否禁用',
          en_US: 'Disabled'
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: disabled | 说明：是否为禁用状态',
          en_US: 'prop: disabled | description: Disable'
        }
      },
      setter: 'BoolSetter',
      supportVariable: true
    }, {
      name: 'filterOption',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '可选项筛选',
          en_US: 'Filter Option'
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: filterOption | 说明：是否根据输入项进行筛选',
          en_US: 'prop: filterOption | description: Filter based on input'
        }
      },
      setter: 'BoolSetter',
      supportVariable: true
    }, {
      name: 'placeholder',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '输入框提示',
          en_US: 'Placeholder'
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: placeholder | 说明: 输入框提示',
          en_US: 'prop: placeholder | description: Placeholder'
        }
      },
      setter: 'StringSetter',
      supportVariable: true
    }, {
      name: 'defaultOpen',
      propType: 'bool',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '默认展开菜单',
          en_US: 'Default Open'
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: defaultOpen | 说明：是否默认展开下拉菜单',
          en_US: 'prop: defaultOpen | description: Expand drop-down menu by default'
        }
      },
      setter: 'BoolSetter',
      supportVariable: true
    },
    // {
    //   name: 'open',
    //   title: {
    //     label: {
    //       type: 'i18n',
    // zh_CN: 'ExpandDropdown',
    //       en_US: 'Open',
    //     },
    //     tip: {
    //       type: 'i18n',
    // zh_CN: ' prop: open | description：YesNoExpandDropdown',
    //       en_US: 'prop: open | description: Expand drop-down menu',
    //     }
    //   },
    //   setter: 'BoolSetter',
    //   supportVariable: true,
    // },
    {
      name: 'notFoundContent',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '无数据展示',
          en_US: 'Not Found Content'
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: notFoundContent | 说明: 当下拉列表为空时显示的内容',
          en_US: 'prop: notFoundContent | description: Content displayed when the drop-down list is empty'
        }
      },
      setter: 'StringSetter',
      supportVariable: true
    }],
    supports: {
      style: true,
      events: [{
        name: 'onBlur',
        template: "onBlur(${extParams}){\n// Callback on blur\nconsole.log('onBlur');}"
      }, {
        name: 'onChange',
        template: "onChange(value,${extParams}){\n// This function is called when the option is selected or the value of the input changes\nconsole.log('onChange', value);}"
      }, {
        name: 'onFocus',
        template: "onFocus(${extParams}){\n// This function is called when the option is selected or the value of the input changes\nconsole.log('onFocus')}"
      }, {
        name: 'onSearch',
        template: "onSearch(value,${extParams}){\n// When searching for completion items, call\nconsole.log('onSearch',value);}"
      }, {
        name: 'onSelect',
        template: "onSelect(value,option,${extParams}){\n// On select\nconsole.log('onSelect', value, option);}"
      }, {
        name: 'onDropdownVisibleChange',
        template: "onDropdownVisibleChange(open,${extParams}){\n// Callback when dropdown opens\nconsole.log('onDropdownVisibleChange', open);}"
      }]
    }
  }
};

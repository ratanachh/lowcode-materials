import { uuid } from '../_utils/utils';
import snippets from './snippets';
export default {
  snippets,
  componentName: 'AutoComplete',
  title: "AutoComplete",
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: "Default value",
      tip: "Default selected value"
    },
    propType: 'string'
  }, {
    name: 'value',
    title: {
      label: "Current value",
      tip: "Currently selected value"
    },
    propType: 'string'
  }, {
    name: 'allowClear',
    title: {
      label: "Allow clear",
      tip: "Whether allow clear"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'options',
    title: {
      label: "OptionContent",
      tip: "OptionList"
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
                title: "Option label",
                setter: 'StringSetter'
              }, {
                name: 'value',
                title: "Option value",
                setter: 'StringSetter'
              }]
            }
          },
          initialValue: () => {
            return {
              label: "Option label",
              value: uuid()
            };
          }
        }
      }
    }
  }, {
    name: 'autoFocus',
    title: {
      label: "Auto focus",
      tip: "Auto focus"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'backfill',
    title: {
      label: "Keyboard selection backfill",
      tip: "When using the keyboard to select an option, backfill the selected item into the input box"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'defaultActiveFirstOption',
    title: {
      label: "The first option is highlighted by default",
      tip: "Whether to highlight the first option by default"
    },
    propType: 'bool',
    defaultValue: true
  }, {
    name: 'disabled',
    title: {
      label: "Disabled",
      tip: "Whether disabled"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'filterOption',
    title: {
      label: "Filter options",
      tip: "Whether to filter based on input items"
    },
    propType: 'bool'
  }, {
    name: 'placeholder',
    title: {
      label: "Input placeholder",
      tip: "Input placeholder"
    },
    propType: 'string'
  }, {
    name: 'onBlur',
    title: {
      label: "Callback on blur",
      tip: "Callback on blur"
    },
    propType: 'func'
  }, {
    name: 'onChange',
    title: {
      label: "valueChange on callback",
      tip: "This function is called when the option is selected or the value of the input changes."
    },
    propType: 'func'
  }, {
    name: 'onFocus',
    title: {
      label: "Callback when focus is obtained",
      tip: "Callback when focus is obtained"
    },
    propType: 'func'
  }, {
    name: 'onSearch',
    title: {
      label: "Called when searching for completion items",
      tip: "Called when searching for completion items"
    },
    propType: 'func'
  }, {
    name: 'onSelect',
    title: {
      label: "Callback when selected",
      tip: "Called when selected, the parameter is the value of the selected item"
    },
    propType: 'func'
  }, {
    name: 'defaultOpen',
    title: {
      label: "DefaultExpandMenu",
      tip: "YesNoDefaultExpandDropdown"
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
      label: "Callback when dropdown opens",
      tip: "Callback when dropdown opens"
    },
    propType: 'func'
  }, {
    name: 'notFoundContent',
    title: {
      label: "Not found content",
      tip: "What is displayed when the drop-down list is empty"
    },
    propType: 'string'
  }],
  configure: {
    props: [{
      name: 'defaultValue',
      title: {
        label: "Default Value",
        tip: "prop: defaultValue | description: defaultValue"
      },
      setter: 'StringSetter',
      supportVariable: true
    }, {
      name: 'value',
      title: {
        label: "Value",
        tip: "prop: Value | description: Value"
      },
      setter: 'StringSetter',
      supportVariable: true
    }, {
      name: 'allowClear',
      title: {
        label: "Allow Clear",
        tip: "prop: allowClear | description: Allow Clear"
      },
      setter: 'BoolSetter',
      supportVariable: true
    }, {
      name: 'options',
      title: {
        label: "Options",
        tip: "prop: options | description: Options"
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
                  title: "Option label",
                  setter: 'StringSetter',
                  isRequired: true
                }, {
                  name: 'value',
                  title: "Option value",
                  setter: 'StringSetter',
                  isRequired: true
                }]
              }
            },
            initialValue: () => {
              return {
                label: "Option label",
                value: uuid()
              };
            }
          }
        }
      }
    }, {
      name: 'autoFocus',
      title: {
        label: "Auto Focus",
        tip: "prop: autoFocus | description: Auto Focus"
      },
      setter: 'BoolSetter',
      supportVariable: true
    }, {
      name: 'backfill',
      title: {
        label: "Backfill",
        tip: "prop: backfill | description: When using the keyboard to select options, backfill the selected items into the input box"
      },
      setter: 'BoolSetter',
      supportVariable: true
    }, {
      name: 'defaultActiveFirstOption',
      title: {
        label: "Default Active First Option",
        tip: "prop: defaultActiveFirstOption | description: Whether to highlight the first option by default"
      },
      setter: 'BoolSetter',
      defaultValue: true,
      supportVariable: true
    }, {
      name: 'disabled',
      title: {
        label: "Disabled",
        tip: "prop: disabled | description: Disable"
      },
      setter: 'BoolSetter',
      supportVariable: true
    }, {
      name: 'filterOption',
      title: {
        label: "Filter Option",
        tip: "prop: filterOption | description: Filter based on input"
      },
      setter: 'BoolSetter',
      supportVariable: true
    }, {
      name: 'placeholder',
      title: {
        label: "Placeholder",
        tip: "prop: placeholder | description: Placeholder"
      },
      setter: 'StringSetter',
      supportVariable: true
    }, {
      name: 'defaultOpen',
      propType: 'bool',
      title: {
        label: "Default Open",
        tip: "prop: defaultOpen | description: Expand drop-down menu by default"
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
        label: "Not Found Content",
        tip: "prop: notFoundContent | description: Content displayed when the drop-down list is empty"
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

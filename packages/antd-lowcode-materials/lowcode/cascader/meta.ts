import snippets from './snippets';
export default {
  snippets,
  componentName: 'Cascader',
  title: "Cascader",
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: "Default selected keys",
      tip: "Default selected keys"
    },
    propType: {
      type: 'arrayOf',
      value: {
        type: 'oneOfType',
        value: ['string', 'number']
      }
    }
  }, {
    name: 'value',
    title: {
      label: "Current selected",
      tip: "Current selected"
    },
    propType: {
      type: 'arrayOf',
      value: {
        type: 'oneOfType',
        value: ['string', 'number']
      }
    }
  }, {
    name: 'options',
    title: {
      label: "OptionData",
      tip: "Optional data source"
    },
    setter: 'JsonSetter'
  }, {
    name: 'allowClear',
    title: {
      label: "Allow clear",
      tip: "Whether allow clear"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'autoFocus',
    title: {
      label: "Auto focus",
      tip: "Auto focus"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'bordered',
    title: {
      label: "Show border",
      tip: "Whether bordered"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'changeOnSelect',
    title: {
      label: "Click to trigger",
      tip: "Clicking on each level of menu option value will trigger onChange"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'className',
    title: {
      label: "CustomclassName",
      tip: "CustomclassName"
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'disabled',
    title: {
      label: "Disabled",
      tip: "Whether disabled"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'expandTrigger',
    title: {
      label: "Menu triggering method",
      tip: "How to trigger the expansion of secondary menus"
    },
    propType: {
      type: 'oneOf',
      value: ['click', 'hover']
    }
  }, {
    name: 'notFoundContent',
    title: {
      label: "Not found content",
      tip: "NoneData"
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'placeholder',
    title: {
      label: "InputPlaceholderText",
      tip: "InputPlaceholderText"
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'placement',
    title: {
      label: "Floating layer default position",
      tip: "Floating layer default position"
    },
    propType: {
      type: 'oneOf',
      value: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight']
    }
  }, {
    name: 'showSearch',
    title: {
      label: "Support Search",
      tip: "Show search box in select box"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'size',
    title: {
      label: "Size",
      tip: "InputSize"
    },
    propType: {
      type: 'oneOf',
      value: ['large', 'middle', 'small']
    },
    setter: {
      componentName: 'SelectSetter',
      props: {
        options: [{
          title: "Large",
          value: 'large'
        }, {
          title: "Middle",
          value: 'middle'
        }, {
          title: "Small",
          value: 'small'
        }]
      }
    },
    defaultValue: 'middle'
  }, {
    name: 'style',
    title: {
      label: "Custom style",
      tip: "Custom style"
    },
    propType: 'object'
  }, {
    name: 'onChange',
    title: {
      label: "Callback after selection is complete",
      tip: "Callback after selection is complete"
    },
    propType: 'func'
  }, {
    name: 'onPopupVisibleChange',
    title: {
      label: "Show/Hide Overlay callback",
      tip: "Show/Hide Overlay callback"
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(value,selectedOptions,${extParams}){\n// Callback after selection is completed\nconsole.log('onChange', value, selectedOptions);}"
      }, {
        name: 'onPopupVisibleChange',
        template: "onPopupVisibleChange(value,selectedOptions,${extParams}){\n// Show/Hide Overlay callback\nconsole.log('onPopupVisibleChange', value, selectedOptions);}"
      }]
    }
  }
};

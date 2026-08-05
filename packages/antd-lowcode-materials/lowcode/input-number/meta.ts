import snippets from './snippets';
export default {
  snippets,
  componentName: 'InputNumber',
  title: "InputNumber",
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: "Default value",
      tip: "Default value"
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'value',
    title: {
      label: "Current value",
      tip: "Current value"
    },
    propType: 'number',
    setter: 'NumberSetter'
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
    name: 'disabled',
    title: {
      label: "Disabled",
      tip: "Whether disabled"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'placeholder',
    title: {
      label: "Placeholder",
      tip: "Placeholder"
    },
    propType: 'string',
    defaultValue: "Please enter",
    setter: 'StringSetter'
  }, {
    name: 'controls',
    title: {
      label: "Whether to display increase and decrease buttons",
      tip: "Whether to display increase and decrease buttons"
    },
    propType: 'bool',
    defaultValue: true,
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
    name: 'addonAfter',
    title: {
      label: "Addon after",
      tip: "Addon after"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'addonBefore',
    title: {
      label: "Addon before",
      tip: "Addon before"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  },
  // {
  //   name: 'formatter',
  //   title: {
  // label: 'Specify the format of the input box display value',
  // tip: 'Specify the format for displaying values in the input box',
  //   },
  //   propType: 'func',
  // },
  {
    name: 'max',
    title: {
      label: "Max",
      tip: "Max"
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'min',
    title: {
      label: "Min",
      tip: "Min"
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'precision',
    title: {
      label: "Precision",
      tip: "Precision"
    },
    propType: 'number',
    setter: 'NumberSetter'
  },
  // {
  //   name: 'decimalSeparator',
  // title: { label: 'Decimal point', tip: 'Decimal point' },
  //   propType: 'string',
  // },
  {
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
      componentName: 'RadioGroupSetter',
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
    name: 'step',
    title: {
      label: "single step size",
      tip: "Change the number of steps each time"
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'onChange',
    title: {
      label: "Change callback",
      tip: "Change callback"
    },
    propType: 'func'
  }, {
    name: 'onPressEnter',
    title: {
      label: "Callback on press Enter",
      tip: "Callback on press Enter"
    },
    propType: 'func'
  }, {
    name: 'onFocus',
    title: {
      label: "Callback on focus",
      tip: "Callback on focus"
    },
    propType: 'func'
  }, {
    name: 'onKeyDown',
    title: {
      label: "Callback on key down",
      tip: "Callback on key down"
    },
    propType: 'func'
  }, {
    name: 'onKeyPress',
    title: {
      label: "Callback on key press",
      tip: "Callback between key down and key up"
    },
    propType: 'func'
  }, {
    name: 'onKeyUp',
    title: {
      label: "Callback on key up",
      tip: "Callback after key up"
    },
    propType: 'func'
  }, {
    name: 'onBlur',
    title: {
      label: "Callback on blur",
      tip: "Callback on blur"
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(value,${extParams}){\n// Change callback\nconsole.log('onChange',value);}"
      }, {
        name: 'onPressEnter',
        template: "onPressEnter(event,${extParams}){\n// Callback on press Enter\nconsole.log('onPressEnter',event);}"
      }, {
        name: 'onFocus',
        template: "onFocus(event,${extParams}){\n// Callback on focus\nconsole.log('onFocus',event);}"
      }, {
        name: 'onKeyDown',
        template: "onKeyDown(event,${extParams}){\n// Callback on key down\nconsole.log('onKeyDown',event);}"
      }, {
        name: 'onKeyPress',
        template: "onKeyPress(event,${extParams}){\n// Callback on key press\nconsole.log('onKeyPress',event);}"
      }, {
        name: 'onKeyUp',
        template: "onKeyUp(event,${extParams}){\n// Callback on key up\nconsole.log('onKeyUp',event);}"
      }, {
        name: 'onBlur',
        template: "onBlur(event,${extParams}){\n// Callback on key up\nconsole.log('onBlur',event);}"
      }]
    }
  }
};

import snippets from './snippets';
export default {
  snippets,
  componentName: 'Input',
  title: "Input",
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: "Default value",
      tip: "Default content"
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'value',
    title: {
      label: "Current value",
      tip: "Current value"
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'allowClear',
    title: {
      label: "Allow clear",
      tip: "Whether allow clear"
    },
    propType: 'bool',
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
  },
  // {
  //   name: 'id',
  // title: { label: 'Input ID', tip: 'Input ID' },
  //   propType: 'string',
  // },
  {
    name: 'maxLength',
    title: {
      label: "Max length",
      tip: "Max length"
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'size',
    title: {
      label: "Control size",
      tip: "Control size"
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
    propType: {
      type: 'oneOf',
      value: ['large', 'middle', 'small']
    },
    defaultValue: 'middle'
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
  }, {
    name: 'prefix',
    title: {
      label: "Prefix",
      tip: "Prefix"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'suffix',
    title: {
      label: "Suffix",
      tip: "Suffix"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'onChange',
    title: {
      label: "Callback when input content changes",
      tip: "Callback when input content changes"
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
        template: "onChange(event,${extParams}){\n// Callback when input content changes\nconsole.log('onChange',event);}"
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

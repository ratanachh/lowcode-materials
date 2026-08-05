import snippets from './snippets';
export default {
  snippets,
  componentName: 'Input.TextArea',
  title: "long text",
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: "Default value",
      tip: "Default content"
    },
    propType: 'string',
    setter: 'TextAreaSetter'
  }, {
    name: 'value',
    title: {
      label: "Current value",
      tip: "Current value"
    },
    propType: 'string',
    setter: 'TextAreaSetter'
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
  }, {
    name: 'showCount',
    title: {
      label: "display word count",
      tip: "Whether to display word count"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'id',
    title: {
      label: "Input ID",
      tip: "Input ID"
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
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
    name: 'autoSize',
    title: {
      label: "HeightAutoSet",
      tip: "HeightAutoSet"
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', {
        type: 'shape',
        value: [{
          name: 'minRows',
          title: "Minimum number of rows",
          setter: 'NumberSetter',
          defaultValue: 3
        }, {
          name: 'maxRows',
          title: "Maximum number of rows",
          setter: 'NumberSetter',
          defaultValue: 3
        }]
      }]
    },
    defaultValue: false
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
    name: 'onResize',
    title: {
      label: "Resize callback",
      tip: "Resize callback"
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
        name: 'onResize',
        template: "onResize({width,height},${extParams}){\n// resize callback\nconsole.log('onResize',width,height);}"
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

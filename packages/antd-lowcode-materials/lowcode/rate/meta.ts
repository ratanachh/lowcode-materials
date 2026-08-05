import snippets from './snippets';
export default {
  snippets,
  componentName: 'Rate',
  title: "Rate",
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
    name: 'allowClear',
    title: {
      label: "Allow clear",
      tip: "Whether allow clear"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'allowHalf',
    title: {
      label: "Allow half",
      tip: "Allow half"
    },
    propType: 'bool',
    defaultValue: false,
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
    name: 'character',
    title: {
      label: "symbol",
      tip: "Custom characters"
    },
    propType: 'node'
  }, {
    name: 'count',
    title: {
      label: "Total",
      tip: "star Total"
    },
    propType: 'number',
    defaultValue: 5,
    setter: 'NumberSetter'
  },
  // {
  //   name: 'value',
  // title: { label: 'Current value', tip: 'Current number' },
  //   propType: 'number',
  // },

  {
    name: 'disabled',
    title: {
      label: "Disabled",
      tip: "Whether disabled"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'tooltips',
    title: {
      label: "Tooltip",
      tip: "Customize the prompt information for each item"
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    }
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
      label: "Callback on select",
      tip: "Callback on select"
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
    name: 'onHoverChange',
    title: {
      label: "Callback when mouse passes over",
      tip: "Callback for value changes when the mouse passes over"
    },
    propType: 'func'
  }, {
    name: 'onKeyDown',
    title: {
      label: "Key callback",
      tip: "Key callback"
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onBlur',
        template: "onBlur(${extParams}){\n// Callback on blur\nconsole.log('onBlur');}"
      }, {
        name: 'onChange',
        template: "onChange(value,${extParams}){\n// Callback on select\nconsole.log('onChange',value);}"
      }, {
        name: 'onFocus',
        template: "onFocus(${extParams}){\n// Callback on focus\nconsole.log('onFocus');}"
      }, {
        name: 'onHoverChange',
        template: "onHoverChange(value,${extParams}){\n// Callback for value changes when the mouse passes over\nconsole.log('onHoverChange',value);}"
      }, {
        name: 'onKeyDown',
        template: "onKeyDown(event,${extParams}){\n// Key callback\nconsole.log('onKeyDown',event);}"
      }]
    }
  }
};

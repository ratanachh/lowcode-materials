import snippets from './snippets';
export default {
  snippets,
  componentName: 'Switch',
  title: "Switch",
  category: "Data Entry",
  props: [{
    name: 'defaultChecked',
    title: {
      label: "Selected by default",
      tip: "Is it selected by default?"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'checked',
    title: {
      label: "Check or not",
      tip: "Is it currently selected?"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'autoFocus',
    title: {
      label: "Auto focus",
      tip: "ComponentAuto focus"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'checkedChildren',
    title: {
      label: "Content when selected",
      tip: "Content when selected"
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'unCheckedChildren',
    title: {
      label: "Content when unselected",
      tip: "Content when unselected"
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
    name: 'loading',
    title: {
      label: "Loading",
      tip: "Loading"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'size',
    title: {
      label: "Size",
      tip: "SwitchSize"
    },
    propType: {
      type: 'oneOf',
      value: ['default', 'small']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: "Default",
          value: 'default'
        }, {
          title: "Small",
          value: 'small'
        }]
      }
    },
    defaultValue: 'default'
  }, {
    name: 'onChange',
    title: {
      label: "Callback on change",
      tip: "Callback on change"
    },
    propType: 'func'
  }, {
    name: 'onClick',
    title: {
      label: "callback function when clicked",
      tip: "callback function when clicked"
    },
    propType: 'func'
  }
  // {
  //   name: 'className',
  // title: { label: 'className', tip: 'className' },
  //   propType: 'string',
  // },
  ],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(checked,event,${extParams}){\n// Callback on change\nconsole.log('onChange',checked,event);}"
      }, {
        name: 'onClick',
        template: "onClick(checked,event,${extParams}){\n// Callback function when clicked\nconsole.log('onClick',checked,event);}"
      }]
    }
  }
};

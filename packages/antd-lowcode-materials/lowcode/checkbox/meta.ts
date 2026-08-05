import snippets from './snippets';
export default {
  snippets,
  componentName: 'Checkbox',
  title: "checkbox",
  category: "Data Entry",
  props: [{
    name: 'children',
    title: {
      label: "Content",
      tip: "Content"
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'autoFocus',
    title: {
      label: "Auto focus",
      tip: "Auto focus"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'checked',
    title: {
      label: "Current value",
      tip: "Specify whether it is currently selected"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'defaultChecked',
    title: {
      label: "Default value",
      tip: "Is it initially selected?"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'disabled',
    title: {
      label: "Disabled",
      tip: "Whether disabled"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'indeterminate',
    title: {
      label: "Not OKStatus",
      tip: "indeterminateStatus"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'onChange',
    title: {
      label: "Callback on change",
      tip: "Callback on change"
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(event,${extParams}){\n// Callback on change\nconsole.log('onChange', event);}"
      }]
    }
  }
};

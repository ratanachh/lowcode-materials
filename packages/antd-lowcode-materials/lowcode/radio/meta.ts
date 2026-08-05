import snippets from './snippets';
export default {
  snippets,
  componentName: 'Radio',
  title: "Radio",
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
    name: 'defaultChecked',
    title: {
      label: "Selected by default",
      tip: "Is it initially selected?"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'checked',
    title: {
      label: "Check or not",
      tip: "Specify whether it is currently selected"
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
  }
  // {
  //   name: 'value',
  //   title: {
  // label: 'Judge based on value',
  // tip: 'Compare based on value to determine whether it is selected',
  //   },
  //   propType: 'string',
  // },
  ],
  configure: {
    supports: {
      style: true
    }
  }
};

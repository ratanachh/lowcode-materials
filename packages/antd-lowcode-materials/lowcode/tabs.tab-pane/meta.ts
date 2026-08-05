// FIXME: Selecting tabPane and clicking copy will cause problems because the copied components have the same key.

export default {
  componentName: 'Tabs.TabPane',
  title: "tab item",
  category: '',
  props: [{
    name: 'key',
    title: {
      label: 'key',
      tip: 'key'
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'tab',
    title: {
      label: "Title",
      tip: "Title"
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  },
  // {
  //   name: 'closeable',
  //   title: {
  // label: 'Can Delete',
  // tip: 'Closable',
  //   },
  //   propType: 'bool',
  //   defaultValue: true,
  // },
  {
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
    name: 'forceRender',
    title: {
      label: "Force render",
      tip: "Whether to render the DOM structure when hidden"
    },
    propType: 'bool',
    setter: 'BoolSetter',
    supportVariable: true
  }],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['Tab']
      }
    }
  }
};

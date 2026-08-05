// FIXME: Selecting tabPane and clicking copy will cause problems because the copied components have the same key.

export default {
  componentName: 'Collapse.Panel',
  title: "Collapse item",
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
    name: 'header',
    title: {
      label: "Title",
      tip: "Title"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'extra',
    title: {
      label: "Top right corner content",
      tip: "Customize rendering of content in the upper right corner of each panel"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'collapsible',
    title: "Collapsible trigger area",
    propType: {
      type: 'oneOf',
      value: ['-', 'header', 'disabled']
    }
  }, {
    name: 'showArrow',
    title: {
      label: "Show fold icon",
      tip: "Whether to display the arrows on the current panel"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'forceRender',
    title: {
      label: "Render when hidden",
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
        parentWhitelist: ['Collapse']
      }
    }
  }
};

import snippets from './snippets';
export default {
  snippets,
  componentName: 'Typography.Title',
  title: "Title",
  category: "General",
  props: [{
    name: 'children',
    title: {
      label: "Content",
      tip: "Content"
    },
    propType: 'string',
    defaultValue: '',
    supportVariable: true
  }, {
    name: 'level',
    title: {
      label: "importance",
      tip: "Importance (1-5)"
    },
    propType: 'number',
    defaultValue: 1
  }, {
    name: 'code',
    title: {
      label: "Code style",
      tip: "Code style"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'copyable',
    title: {
      label: "Copyable",
      tip: "Copyable"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'delete',
    title: {
      label: "Strikethrough",
      tip: "Strikethrough"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'disabled',
    title: {
      label: "Disabled",
      tip: "Whether disabled"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'editable',
    title: {
      label: "Editable",
      tip: "Editable"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'ellipsis',
    title: {
      label: "Auto ellipsis",
      tip: "To set automatic overflow omission, you need to set the element width"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'mark',
    title: {
      label: "Mark style",
      tip: "Mark style"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'keyboard',
    title: {
      label: "Keyboard style",
      tip: "Keyboard style"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'underline',
    title: {
      label: "Underline",
      tip: "Underline"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'strong',
    title: {
      label: "Bold",
      tip: "Bold"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'type',
    title: {
      label: "Text type",
      tip: "Text type"
    },
    propType: {
      type: 'oneOf',
      value: ['secondary', 'warning', 'danger']
    },
    setter: {
      componentName: 'SelectSetter',
      props: {
        options: [{
          title: "Default",
          value: 'default'
        }, {
          title: "Info",
          value: 'secondary'
        }, {
          title: "Success",
          value: 'success'
        }, {
          title: "Warning",
          value: 'warning'
        }, {
          title: "Error",
          value: 'danger'
        }]
      }
    }
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

import snippets from './snippets';
export default {
  snippets,
  componentName: 'Typography.Paragraph',
  title: "Paragraph",
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
      tip: "Whether it can be copied and can be customized in various ways when it is an object"
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
      tip: "Auto ellipsis"
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
    name: 'underline',
    title: {
      label: "Underline",
      tip: "Underline"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'onChange',
    title: {
      label: "Triggered when user submits edit content",
      tip: "Triggered when user submits edit content"
    },
    propType: 'func'
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
      value: ['default', 'secondary', 'success', 'warning', 'danger']
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
      style: true,
      events: ['onChange']
    }
  }
};

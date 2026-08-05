import snippets from './snippets';
export default {
  snippets,
  componentName: 'Typography.Text',
  title: "Text",
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
  }, {
    title: "Advanced",
    type: 'group',
    display: 'accordion',
    items: [{
      name: 'copyable',
      title: {
        label: "Copyable",
        tip: "Copyable"
      },
      propType: {
        type: 'oneOfType',
        value: ['bool', 'object']
      },
      setter: [{
        componentName: 'BoolSetter',
        isRequired: false,
        initialValue: false
      }, {
        componentName: 'JsonSetter',
        isRequired: false
      }]
    }, {
      name: 'editable',
      title: {
        label: "Editable",
        tip: "Editable"
      },
      propType: {
        type: 'oneOfType',
        value: ['bool', 'object']
      },
      setter: [{
        componentName: 'BoolSetter',
        isRequired: false,
        initialValue: false
      }, {
        componentName: 'JsonSetter',
        isRequired: false
      }]
    }, {
      name: 'ellipsis',
      title: {
        label: "Auto ellipsis",
        tip: "To set automatic overflow omission, you need to set the element width"
      },
      propType: {
        type: 'oneOfType',
        value: ['bool', 'object']
      },
      setter: [{
        componentName: 'BoolSetter',
        isRequired: false,
        initialValue: false
      }, {
        componentName: 'JsonSetter',
        isRequired: false
      }]
    }]
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'copyable.onCopy',
        template: "onCopy(${extParams}){\n// Callback function for successful copy\nconsole.log('onCopy');}"
      }, {
        name: 'editable.onStart',
        template: "onStart(${extParams}){\n// Triggered when entering the editing state\nconsole.log('onStart');}"
      }, {
        name: 'editable.onChange',
        template: "onChange(event,${extParams}){\n// Triggered when text field is edited\nconsole.log('onChange', event);}"
      }, {
        name: 'editable.onEnd',
        template: "onEnd(${extParams}){\n// Triggered when pressing ENTER to end the editing state\nconsole.log('onEnd');}"
      }, {
        name: 'editable.onCancel',
        template: "onCancel(${extParams}){\n// Triggered when pressing ESC to exit the editing state\nconsole.log('onCancel');}"
      }, {
        name: 'ellipsis.onEllipsis',
        template: "onEllipsis(ellipsis,${extParams}){\n// Callback when omission is triggered\nconsole.log('onEllipsis', ellipsis);}"
      }, {
        name: 'ellipsis.onExpand',
        template: "onExpand(event,${extParams}){\n// Click Expand on callback\nconsole.log('onExpand', event);}"
      }]
    }
  }
};

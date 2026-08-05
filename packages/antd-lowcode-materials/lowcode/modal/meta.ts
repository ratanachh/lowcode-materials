import snippets from './snippets';
export default {
  snippets,
  componentName: 'Modal',
  title: "Modal",
  category: "Feedback",
  props: [{
    name: 'title',
    title: {
      label: "Title",
      tip: "Title"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'cancelText',
    title: {
      label: "Cancel text",
      tip: "Cancel text"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'okText',
    title: {
      label: "OK text",
      tip: "OK text"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'open',
    title: {
      label: "Visible",
      tip: "ModalVisible"
    },
    propType: 'bool',
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'centered',
    title: {
      label: "VerticalCenter",
      tip: "Display Modal vertically centered"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'closable',
    title: {
      label: "ShowOffButton",
      tip: "Whether to display the close button in the upper right corner"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'closeIcon',
    title: {
      label: "Close icon",
      tip: "CustomClose icon"
    },
    propType: 'node'
  }, {
    name: 'confirmLoading',
    title: {
      label: "OKButtonloading",
      tip: "OKButtonloading"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'destroyOnClose',
    title: {
      label: "Destroy Children",
      tip: "Destroy child elements in Modal when closed"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'forceRender',
    title: {
      label: "Force Render Modal",
      tip: "Force Render Modal"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'keyboard',
    title: {
      label: "Close on ESC",
      tip: "YesNoSupport Keyboard esc Off"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'mask',
    title: {
      label: "Whether to display the mask",
      tip: "Whether to display the mask"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'maskClosable',
    title: {
      label: "Click on the mask to close",
      tip: "Click whether the mask layer is allowed to be closed"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'zIndex',
    title: {
      label: 'z-index',
      tip: "Set Modal `z-index`"
    },
    propType: 'number',
    setter: 'NumberSetter',
    supportVariable: true
  }, {
    name: 'width',
    title: {
      label: "Width",
      tip: "Width"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'number']
    }
  }, {
    name: 'footer',
    title: {
      label: "BottomContent",
      tip: "Bottom content, when the default bottom button is not required, it can be set to `footer={null}`"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'okType',
    title: {
      label: "OK button type",
      tip: "OK button type"
    },
    propType: {
      type: 'oneOf',
      value: ['default', 'small']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: 'primary',
          value: 'primary'
        }, {
          title: 'ghost',
          value: 'ghost'
        }, {
          title: 'dashed',
          value: 'dashed'
        }, {
          title: 'link',
          value: 'link'
        }, {
          title: 'text',
          value: 'text'
        }, {
          title: 'default',
          value: 'default'
        }]
      }
    }
  }, {
    name: 'okButtonProps',
    title: {
      label: "OKButtonprops",
      tip: "OKButtonprops"
    },
    propType: 'object',
    setter: {
      componentName: 'ObjectSetter',
      props: {
        config: {
          items: [{
            name: 'disabled',
            title: {
              label: "YesNoCan Click",
              tip: 'disabled'
            },
            propType: 'bool',
            setter: [{
              componentName: 'BoolSetter',
              initialValue: false
            }, 'VariableSetter'],
            isRequired: true
          }]
        }
      }
    }
  }, {
    name: 'bodyStyle',
    title: {
      label: "Body style",
      tip: "Modal body style"
    },
    propType: 'object'
  }, {
    name: 'maskStyle',
    title: {
      label: "Mask style",
      tip: "Mask style"
    },
    propType: 'object'
  }, {
    name: 'style',
    title: {
      label: "Overlay style",
      tip: "Can be used to set the style of the floating layer, adjust the position of the floating layer, etc."
    },
    propType: 'object'
  }, {
    name: 'wrapClassName',
    title: {
      label: "Outer container class name",
      tip: "The class name of the outer container of the dialog box"
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'getContainer',
    title: {
      label: "Specify the mounting node",
      tip: "Specify the HTML node mounted by Modal, false means it is mounted in the current dom"
    },
    propType: {
      type: 'oneOfType',
      value: ['node', 'func']
    }
  }, {
    name: 'onCancel',
    title: {
      label: "CancelButtoncallback",
      tip: "Callback for clicking the mask layer or the upper right cross or cancel button"
    },
    propType: 'func'
  }, {
    name: 'onOk',
    title: {
      label: "Click OKcallback",
      tip: "Click OKcallback"
    },
    propType: 'func'
  }],
  configure: {
    component: {
      isContainer: true,
      isModal: true,
      rootSelector: '.ant-modal-content',
      nestingRule: {
        parentWhitelist: ['Page', 'Component']
      }
    },
    supports: {
      style: true,
      events: [{
        name: 'afterClose',
        templete: "onCancel(${extParams}){\n// Callback after complete close\nconsole.log('afterClose');}"
      }, {
        name: 'onCancel',
        template: "onCancel(${extParams}){\n// Callback for clicking the mask layer or the upper right corner or cancel button\nconsole.log('onCancel');}"
      }, {
        name: 'onOk',
        template: "onOk(${extParams}){\n// Click OKcallback\nconsole.log('onOk');}"
      }]
    }
  }
};

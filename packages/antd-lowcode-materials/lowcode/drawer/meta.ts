import snippets from './snippets';
export default {
  snippets,
  componentName: 'Drawer',
  title: "Drawer",
  category: "Feedback",
  props: [{
    title: "General",
    display: 'block',
    type: 'group',
    items: [{
      name: 'open',
      title: {
        label: "Visible",
        tip: "open | Drawer Visible"
      },
      propType: 'bool',
      setter: 'BoolSetter'
    }, {
      name: 'title',
      title: {
        label: "Title",
        tip: "title | Title"
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'node']
      },
      setter: ['StringSetter', {
        componentName: 'SlotSetter',
        title: "title slot",
        initialValue: {
          type: 'JSSlot',
          value: []
        }
      }, 'VariableSetter']
    }]
  }, {
    title: "Appearance",
    display: 'block',
    type: 'group',
    items: [{
      name: 'placement',
      title: {
        label: "Position",
        tip: "placement | Drawer ShowPosition"
      },
      propType: {
        type: 'oneOf',
        value: ['top', 'right', 'bottom', 'left']
      },
      defaultValue: 'right',
      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [{
            title: "Top",
            value: 'top'
          }, {
            title: "Right",
            value: 'right'
          }, {
            title: "Bottom",
            value: 'bottom'
          }, {
            title: "Left",
            value: 'left'
          }]
        }
      }
    }, {
      name: 'size',
      title: {
        label: "Size",
        tip: "size | Drawer Size"
      },
      propType: {
        type: 'oneOf',
        value: ['default', 'large']
      },
      defaultValue: 'default',
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [{
            title: "Default",
            value: 'default'
          }, {
            title: "Extra large",
            value: 'large'
          }]
        }
      }
    }, {
      name: 'width',
      title: {
        label: "Width",
        tip: "width | Width"
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'number']
      },
      setter: ['StringSetter', 'NumberSetter', 'VariableSetter']
    }, {
      name: 'height',
      title: {
        label: "Height",
        tip: "height | height, used when placement is top or bottom"
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'number']
      },
      setter: ['StringSetter', 'NumberSetter', 'VariableSetter']
    }, {
      name: 'zIndex',
      title: {
        label: 'z-index',
        tip: "Set Drawer `z-index`"
      },
      propType: 'number',
      setter: 'NumberSetter'
    }]
  }, {
    title: "Function",
    display: 'block',
    type: 'group',
    items: [{
      name: 'mask',
      title: {
        label: "ShowMask",
        tip: "mask | YesNoShowMask"
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'maskClosable',
      title: {
        label: "Click MaskOff",
        tip: "maskClosable | Click MaskYesNoOffDrawer"
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'autoFocus',
      title: {
        label: "Auto focus",
        tip: "autoFocus | Whether to switch focus to its Dom node after the drawer is expanded"
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'keyboard',
      title: {
        label: "Keyboard EscOff",
        tip: "keyboard | Whether to support keyboard pressing Esc to close"
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'destroyOnClose',
      title: {
        label: "Destroyed on close",
        tip: "destroyOnClose | Destroy the child elements in Drawer when closing"
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }, {
      name: 'closable',
      title: {
        label: "OffButton",
        tip: "closable | Whether to display the close button in the upper left corner"
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'forceRender',
      title: {
        label: "Force render",
        tip: "forceRender | Pre-render elements within Drawer"
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }]
  }, {
    title: "slot expansion",
    display: 'block',
    type: 'group',
    items: [{
      name: 'closeIcon',
      title: {
        label: "Close icon",
        tip: "closeIcon | CustomClose icon"
      },
      propType: 'node',
      setter: {
        componentName: 'SlotSetter',
        title: "Close icon slot",
        initialValue: {
          type: 'JSSlot',
          value: [{
            componentName: 'Icon',
            props: {
              type: 'CloseOutlined',
              size: 16
            }
          }]
        }
      }
    }, {
      name: 'extra',
      title: {
        label: "operating area",
        tip: "extra | operating area in the upper right corner of the drawer"
      },
      propType: 'node',
      setter: {
        componentName: 'SlotSetter',
        title: "Operating area slot",
        initialValue: {
          type: 'JSSlot',
          value: []
        }
      }
    }, {
      name: 'footer',
      title: {
        label: "Drawer Footer",
        tip: "footer | Drawer Footer"
      },
      propType: 'node',
      setter: {
        componentName: 'SlotSetter',
        title: "Drawer footer slot",
        initialValue: {
          type: 'JSSlot',
          value: []
        }
      }
    }]
  }, {
    title: "other",
    display: 'block',
    type: 'group',
    items: [{
      name: 'className',
      title: {
        label: "ContainerclassName",
        tip: "className | The class name of the outer container of the dialog box"
      },
      propType: 'string',
      setter: 'StringSetter'
    }, {
      name: 'drawerStyle',
      title: "Popup layer style",
      type: 'group',
      extraProps: {
        display: 'entry'
      },
      items: [{
        name: 'drawerStyle',
        title: {
          label: "Style settings",
          tip: "drawerStyle | used to set the style of the Drawer pop-up layer"
        },
        setter: 'StyleSetter',
        extraProps: {
          display: 'block'
        }
      }]
    }, {
      name: 'contentWrapperStyle',
      title: "wrap style",
      type: 'group',
      extraProps: {
        display: 'entry'
      },
      items: [{
        name: 'contentWrapperStyle',
        title: {
          label: "Style settings",
          tip: "contentWrapperStyle | Can be used to set the style of the content part of the Drawer wrapper"
        },
        setter: 'StyleSetter',
        extraProps: {
          display: 'block'
        }
      }]
    }, {
      name: 'headerStyle',
      title: "Header style",
      type: 'group',
      extraProps: {
        display: 'entry'
      },
      items: [{
        name: 'headerStyle',
        title: {
          label: "Style settings",
          tip: "headerStyle | Used for Set Drawer Header style"
        },
        setter: 'StyleSetter',
        extraProps: {
          display: 'block'
        }
      }]
    }, {
      name: 'bodyStyle',
      title: "Content style",
      type: 'group',
      extraProps: {
        display: 'entry'
      },
      items: [{
        name: 'bodyStyle',
        title: {
          label: "Style settings",
          tip: "bodyStyle | Can be used to style the content portion of the Drawer"
        },
        setter: 'StyleSetter',
        extraProps: {
          display: 'block'
        }
      }]
    }, {
      name: 'footerStyle',
      title: "Footer style",
      type: 'group',
      extraProps: {
        display: 'entry'
      },
      items: [{
        name: 'footerStyle',
        title: {
          label: "Style settings",
          tip: "footerStyle | The style of the drawer footer component"
        },
        setter: 'StyleSetter',
        extraProps: {
          display: 'block'
        }
      }]
    }, {
      name: 'maskStyle',
      title: "Mask style",
      type: 'group',
      extraProps: {
        display: 'entry'
      },
      items: [{
        name: 'maskStyle',
        title: {
          label: "Style settings",
          tip: "maskStyle | Mask style"
        },
        setter: 'StyleSetter',
        extraProps: {
          display: 'block'
        }
      }]
    }]
  }],
  configure: {
    component: {
      isContainer: true,
      isModal: true,
      nestingRule: {
        parentWhitelist: ['Page', 'Component']
      }
    },
    supports: {
      style: true,
      events: [{
        name: 'onClose',
        template: "onClose(event,${extParams}){\n// Callback for clicking the mask layer or the upper right corner or cancel button\nconsole.log('onClose',event);}"
      }, {
        name: 'afterOpenChange',
        template: "afterOpenChange(open,${extParams}){\n// Callback after the animation ends when switching drawers\nconsole.log('afterOpenChange',open);}"
      }]
    }
  }
};

import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Modal',
  title: i18n("对话框", "Modal"),
  category: "Feedback",
  props: [{
    name: 'title',
    title: {
      label: i18n("标题", "Title"),
      tip: i18n("标题", "Title")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'cancelText',
    title: {
      label: i18n("取消按钮文字", "Cancel text"),
      tip: i18n("取消按钮文字", "Cancel text")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'okText',
    title: {
      label: i18n("确认按钮文字", "OK text"),
      tip: i18n("确认按钮文字", "OK text")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'open',
    title: {
      label: i18n("是否可见", "Visible"),
      tip: i18n("对话框是否可见", "ModalVisible")
    },
    propType: 'bool',
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'centered',
    title: {
      label: i18n("垂直居中", "VerticalCenter"),
      tip: i18n("垂直居中展示 Modal", "Display Modal vertically centered")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'closable',
    title: {
      label: i18n("显示关闭按钮", "ShowOffButton"),
      tip: i18n("是否显示右上角的关闭按钮", "Whether to display the close button in the upper right corner")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'closeIcon',
    title: {
      label: i18n("关闭图标", "Close icon"),
      tip: i18n("自定义关闭图标", "CustomClose icon")
    },
    propType: 'node'
  }, {
    name: 'confirmLoading',
    title: {
      label: i18n("确定按钮loading", "OKButtonloading"),
      tip: i18n("确定按钮loading", "OKButtonloading")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'destroyOnClose',
    title: {
      label: i18n("销毁子元素", "Destroy Children"),
      tip: i18n("关闭时销毁 Modal 里的子元素", "Destroy child elements in Modal when closed")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'forceRender',
    title: {
      label: i18n("强制渲染Modal", "Force Render Modal"),
      tip: i18n("强制渲染Modal", "Force Render Modal")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'keyboard',
    title: {
      label: i18n("esc关闭", "Close on ESC"),
      tip: i18n("是否支持键盘 esc 关闭", "YesNoSupport Keyboard esc Off")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'mask',
    title: {
      label: i18n("是否展示遮罩", "Whether to display the mask"),
      tip: i18n("是否展示遮罩", "Whether to display the mask")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'maskClosable',
    title: {
      label: i18n("点击蒙层关闭", "Click on the mask to close"),
      tip: i18n("点击蒙层是否允许关闭", "Click whether the mask layer is allowed to be closed")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'zIndex',
    title: {
      label: 'z-index',
      tip: i18n("设置 Modal 的 `z-index`", "Set Modal `z-index`")
    },
    propType: 'number',
    setter: 'NumberSetter',
    supportVariable: true
  }, {
    name: 'width',
    title: {
      label: i18n("宽度", "Width"),
      tip: i18n("宽度", "Width")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'number']
    }
  }, {
    name: 'footer',
    title: {
      label: i18n("底部内容", "BottomContent"),
      tip: i18n("底部内容，当不需要默认底部按钮时，可以设为 `footer={null}`", "Bottom content, when the default bottom button is not required, it can be set to `footer={null}`")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'okType',
    title: {
      label: i18n("确认按钮类型", "OK button type"),
      tip: i18n("确认按钮类型", "OK button type")
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
      label: i18n("确认按钮props", "OKButtonprops"),
      tip: i18n("确认按钮props", "OKButtonprops")
    },
    propType: 'object',
    setter: {
      componentName: 'ObjectSetter',
      props: {
        config: {
          items: [{
            name: 'disabled',
            title: {
              label: i18n("是否可点击", "YesNoCan Click"),
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
      label: i18n("body样式", "Body style"),
      tip: i18n("Modal body 样式", "Modal body style")
    },
    propType: 'object'
  }, {
    name: 'maskStyle',
    title: {
      label: i18n("遮罩样式", "Mask style"),
      tip: i18n("遮罩样式", "Mask style")
    },
    propType: 'object'
  }, {
    name: 'style',
    title: {
      label: i18n("浮层样式", "Overlay style"),
      tip: i18n("可用于设置浮层的样式，调整浮层位置等", "Can be used to set the style of the floating layer, adjust the position of the floating layer, etc.")
    },
    propType: 'object'
  }, {
    name: 'wrapClassName',
    title: {
      label: i18n("外层容器类名", "Outer container class name"),
      tip: i18n("对话框外层容器的类名", "The class name of the outer container of the dialog box")
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'getContainer',
    title: {
      label: i18n("指定挂载节点", "Specify the mounting node"),
      tip: i18n("指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom", "Specify the HTML node mounted by Modal, false means it is mounted in the current dom")
    },
    propType: {
      type: 'oneOfType',
      value: ['node', 'func']
    }
  }, {
    name: 'onCancel',
    title: {
      label: i18n("取消按钮回调", "CancelButtoncallback"),
      tip: i18n("点击遮罩层或右上角叉或取消按钮的回调", "Callback for clicking the mask layer or the upper right cross or cancel button")
    },
    propType: 'func'
  }, {
    name: 'onOk',
    title: {
      label: i18n("点击确定回调", "Click OKcallback"),
      tip: i18n("点击确定回调", "Click OKcallback")
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

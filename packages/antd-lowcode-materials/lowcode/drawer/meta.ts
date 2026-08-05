import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Drawer',
  title: i18n("抽屉", "Drawer"),
  category: "Feedback",
  props: [{
    title: i18n("基础", "General"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'open',
      title: {
        label: i18n("是否可见", "Visible"),
        tip: i18n("open | Drawer 是否可见", "open | Drawer Visible")
      },
      propType: 'bool',
      setter: 'BoolSetter'
    }, {
      name: 'title',
      title: {
        label: i18n("标题", "Title"),
        tip: i18n("title | 标题", "title | Title")
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'node']
      },
      setter: ['StringSetter', {
        componentName: 'SlotSetter',
        title: i18n("标题插槽", "title slot"),
        initialValue: {
          type: 'JSSlot',
          value: []
        }
      }, 'VariableSetter']
    }]
  }, {
    title: i18n("外观", "Appearance"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'placement',
      title: {
        label: i18n("位置", "Position"),
        tip: i18n("placement | 抽屉的显示位置", "placement | Drawer ShowPosition")
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
            title: i18n("上方", "Top"),
            value: 'top'
          }, {
            title: i18n("右侧", "Right"),
            value: 'right'
          }, {
            title: i18n("下方", "Bottom"),
            value: 'bottom'
          }, {
            title: i18n("左侧", "Left"),
            value: 'left'
          }]
        }
      }
    }, {
      name: 'size',
      title: {
        label: i18n("大小", "Size"),
        tip: i18n("size | 抽屉的大小", "size | Drawer Size")
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
            title: i18n("默认", "Default"),
            value: 'default'
          }, {
            title: i18n("超大", "Extra large"),
            value: 'large'
          }]
        }
      }
    }, {
      name: 'width',
      title: {
        label: i18n("宽度", "Width"),
        tip: i18n("width | 宽度", "width | Width")
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'number']
      },
      setter: ['StringSetter', 'NumberSetter', 'VariableSetter']
    }, {
      name: 'height',
      title: {
        label: i18n("高度", "Height"),
        tip: i18n("height | 高度, 在 placement 为 top 或 bottom 时使用", "height | height, used when placement is top or bottom")
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
        tip: i18n("设置 Drawer 的 `z-index`", "Set Drawer `z-index`")
      },
      propType: 'number',
      setter: 'NumberSetter'
    }]
  }, {
    title: i18n("功能", "Function"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'mask',
      title: {
        label: i18n("显示遮罩", "ShowMask"),
        tip: i18n("mask | 是否显示遮罩", "mask | YesNoShowMask")
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'maskClosable',
      title: {
        label: i18n("点击遮罩关闭", "Click MaskOff"),
        tip: i18n("maskClosable | 点击遮罩是否关闭抽屉", "maskClosable | Click MaskYesNoOffDrawer")
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'autoFocus',
      title: {
        label: i18n("自动获得焦点", "Auto focus"),
        tip: i18n("autoFocus | 抽屉展开后是否将焦点切换至其 Dom 节点", "autoFocus | Whether to switch focus to its Dom node after the drawer is expanded")
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'keyboard',
      title: {
        label: i18n("键盘Esc关闭", "Keyboard EscOff"),
        tip: i18n("keyboard | 是否支持键盘按 Esc 关闭", "keyboard | Whether to support keyboard pressing Esc to close")
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'destroyOnClose',
      title: {
        label: i18n("关闭时销毁", "Destroyed on close"),
        tip: i18n("destroyOnClose | 关闭时销毁 Drawer 里的子元素", "destroyOnClose | Destroy the child elements in Drawer when closing")
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }, {
      name: 'closable',
      title: {
        label: i18n("关闭按钮", "OffButton"),
        tip: i18n("closable | 是否显示左上角的关闭按钮", "closable | Whether to display the close button in the upper left corner")
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'forceRender',
      title: {
        label: i18n("预渲染", "Force render"),
        tip: i18n("forceRender | 预渲染 Drawer 内元素", "forceRender | Pre-render elements within Drawer")
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }]
  }, {
    title: i18n("插槽扩展", "slot expansion"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'closeIcon',
      title: {
        label: i18n("关闭图标", "Close icon"),
        tip: i18n("closeIcon | 自定义关闭图标", "closeIcon | CustomClose icon")
      },
      propType: 'node',
      setter: {
        componentName: 'SlotSetter',
        title: i18n("关闭图标插槽", "Close icon slot"),
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
        label: i18n("操作区域", "operating area"),
        tip: i18n("extra | 抽屉右上角的操作区域", "extra | operating area in the upper right corner of the drawer")
      },
      propType: 'node',
      setter: {
        componentName: 'SlotSetter',
        title: i18n("操作区域插槽", "Operating area slot"),
        initialValue: {
          type: 'JSSlot',
          value: []
        }
      }
    }, {
      name: 'footer',
      title: {
        label: i18n("抽屉的页脚", "Drawer Footer"),
        tip: i18n("footer | 抽屉的页脚", "footer | Drawer Footer")
      },
      propType: 'node',
      setter: {
        componentName: 'SlotSetter',
        title: i18n("抽屉页脚插槽", "Drawer footer slot"),
        initialValue: {
          type: 'JSSlot',
          value: []
        }
      }
    }]
  }, {
    title: i18n("其它", "other"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'className',
      title: {
        label: i18n("容器类名", "ContainerclassName"),
        tip: i18n("className | 对话框外层容器的类名", "className | The class name of the outer container of the dialog box")
      },
      propType: 'string',
      setter: 'StringSetter'
    }, {
      name: 'drawerStyle',
      title: i18n("弹出层样式", "Popup layer style"),
      type: 'group',
      extraProps: {
        display: 'entry'
      },
      items: [{
        name: 'drawerStyle',
        title: {
          label: i18n("样式设置", "Style settings"),
          tip: i18n("drawerStyle | 用于设置 Drawer 弹出层的样式", "drawerStyle | used to set the style of the Drawer pop-up layer")
        },
        setter: 'StyleSetter',
        extraProps: {
          display: 'block'
        }
      }]
    }, {
      name: 'contentWrapperStyle',
      title: i18n("包裹层样式", "wrap style"),
      type: 'group',
      extraProps: {
        display: 'entry'
      },
      items: [{
        name: 'contentWrapperStyle',
        title: {
          label: i18n("样式设置", "Style settings"),
          tip: i18n("contentWrapperStyle | 可用于设置 Drawer 包裹内容部分的样式", "contentWrapperStyle | Can be used to set the style of the content part of the Drawer wrapper")
        },
        setter: 'StyleSetter',
        extraProps: {
          display: 'block'
        }
      }]
    }, {
      name: 'headerStyle',
      title: i18n("头部样式", "Header style"),
      type: 'group',
      extraProps: {
        display: 'entry'
      },
      items: [{
        name: 'headerStyle',
        title: {
          label: i18n("样式设置", "Style settings"),
          tip: i18n("headerStyle | 用于设置 Drawer 头部的样式", "headerStyle | Used for Set Drawer Header style")
        },
        setter: 'StyleSetter',
        extraProps: {
          display: 'block'
        }
      }]
    }, {
      name: 'bodyStyle',
      title: i18n("内容样式", "Content style"),
      type: 'group',
      extraProps: {
        display: 'entry'
      },
      items: [{
        name: 'bodyStyle',
        title: {
          label: i18n("样式设置", "Style settings"),
          tip: i18n("bodyStyle | 可用于设置 Drawer 内容部分的样式", "bodyStyle | Can be used to style the content portion of the Drawer")
        },
        setter: 'StyleSetter',
        extraProps: {
          display: 'block'
        }
      }]
    }, {
      name: 'footerStyle',
      title: i18n("页脚样式", "Footer style"),
      type: 'group',
      extraProps: {
        display: 'entry'
      },
      items: [{
        name: 'footerStyle',
        title: {
          label: i18n("样式设置", "Style settings"),
          tip: i18n("footerStyle | 抽屉页脚部件的样式", "footerStyle | The style of the drawer footer component")
        },
        setter: 'StyleSetter',
        extraProps: {
          display: 'block'
        }
      }]
    }, {
      name: 'maskStyle',
      title: i18n("遮罩样式", "Mask style"),
      type: 'group',
      extraProps: {
        display: 'entry'
      },
      items: [{
        name: 'maskStyle',
        title: {
          label: i18n("样式设置", "Style settings"),
          tip: i18n("maskStyle | 遮罩样式", "maskStyle | Mask style")
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

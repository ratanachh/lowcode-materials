import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Popover',
  title: i18n("气泡卡片", "Popover"),
  category: "Data Display",
  props: [{
    title: i18n("内容", "Content"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'title',
      title: {
        label: i18n("卡片标题", "Card title"),
        tip: i18n("title | 卡片标题", "title | Card title")
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'node', 'func']
      },
      setter: ['StringSetter', 'SlotSetter', 'FunctionSetter', 'VariableSetter']
    }, {
      name: 'content',
      title: {
        label: i18n("卡片内容", "CardContent"),
        tip: i18n("content | 卡片内容", "content | CardContent")
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'node', 'func']
      },
      setter: ['StringSetter', 'SlotSetter', 'FunctionSetter', 'VariableSetter']
    }]
  }, {
    title: i18n("控制", "Control"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'defaultOpen',
      title: {
        label: i18n("默认显隐", "Show or hide by default"),
        tip: i18n("defaultOpen | 默认是否显隐", "defaultOpen | Whether to show or hide by default")
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'open',
      title: {
        label: i18n("手动显隐", "Manually show and hide"),
        tip: i18n("open | 手动控制浮层显隐", "open | Manually control the display and hiding of the floating layer")
      },
      propType: 'bool',
      setter: 'BoolSetter'
    }]
  }, {
    title: i18n("外观", "Appearance"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'placement',
      title: {
        label: i18n("气泡位置", "Bubble position"),
        tip: i18n("placement | 气泡位置", "placement | bubble position")
      },
      propType: {
        type: 'oneOf',
        value: ['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']
      },
      defaultValue: 'top',
      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [{
            title: i18n("上", "Top"),
            value: 'top'
          }, {
            title: i18n("左", "Left"),
            value: 'left'
          }, {
            title: i18n("右", "Right"),
            value: 'right'
          }, {
            title: i18n("下", "Bottom"),
            value: 'bottom'
          }, {
            title: i18n("上左", "Top left"),
            value: 'topLeft'
          }, {
            title: i18n("上右", "Top right"),
            value: 'topRight'
          }, {
            title: i18n("下左", "Bottom left"),
            value: 'bottomLeft'
          }, {
            title: i18n("下右", "Bottom right"),
            value: 'bottomRight'
          }, {
            title: i18n("左上", "LeftTop"),
            value: 'leftTop'
          }, {
            title: i18n("左下", "LeftBottom"),
            value: 'leftBottom'
          }, {
            title: i18n("右上", "RightTop"),
            value: 'rightTop'
          }, {
            title: i18n("右下", "RightBottom"),
            value: 'rightBottom'
          }]
        }
      }
    }, {
      name: 'autoAdjustOverflow',
      title: {
        label: i18n("自动调整", "automatic adjustment"),
        tip: i18n("autoAdjustOverflow | 气泡被遮挡时自动调整位置", "autoAdjustOverflow | Automatically adjust the position of the bubble when it is blocked")
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: true
    }, {
      name: 'arrowPointAtCenter',
      title: {
        label: i18n("指向中心", "Point to center"),
        tip: i18n("arrowPointAtCenter | 箭头是否指向目标元素中心", "arrowPointAtCenter | Whether the arrow points to the center of the target element")
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'color',
      title: {
        label: i18n("背景颜色", "background color"),
        tip: i18n("color | 背景颜色", "color | background color")
      },
      propType: 'string',
      setter: 'ColorSetter'
    }, {
      name: 'zIndex',
      title: {
        label: 'zIndex',
        tip: i18n("zIndex | 设置 Tooltip 的 z-index值", "zIndex | Set Tooltip z-indexValue")
      },
      propType: 'number',
      setter: 'NumberSetter'
    }]
  }, {
    name: 'overlayStyle',
    title: i18n("卡片样式", "Card style"),
    type: 'group',
    extraProps: {
      display: 'entry'
    },
    items: [{
      name: 'overlayStyle',
      title: {
        label: i18n("样式设置", "Style settings"),
        tip: i18n("overlayStyle | 卡片样式", "overlayStyle | Card style")
      },
      setter: 'StyleSetter',
      extraProps: {
        display: 'block'
      }
    }]
  }, {
    name: 'overlayInnerStyle',
    title: i18n("卡片内容样式", "CardContent style"),
    type: 'group',
    extraProps: {
      display: 'entry'
    },
    items: [{
      name: 'overlayInnerStyle',
      title: {
        label: i18n("样式设置", "Style settings"),
        tip: i18n("overlayStyle | 卡片内容区域的样式", "overlayStyle | The style of the card content area")
      },
      setter: 'StyleSetter',
      extraProps: {
        display: 'block'
      }
    }]
  }, {
    title: i18n("行为", "Row"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'trigger',
      title: {
        label: i18n("触发行为", "Trigger Row"),
        tip: i18n("trigger | 触发行为", "trigger | Trigger Row")
      },
      propType: {
        type: 'oneOf',
        value: ['hover', 'focus', 'click', 'contextMenu']
      },
      defaultValue: 'hover',
      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [{
            title: i18n("鼠标悬停", "mouseover"),
            value: 'hover'
          }, {
            title: i18n("获得焦点", "get focus"),
            value: 'focus'
          }, {
            title: i18n("鼠标点击", "Mouse Click"),
            value: 'click'
          }, {
            title: i18n("右键菜单", "right click menu"),
            value: 'contextMenu'
          }]
        }
      }
    }, {
      name: 'mouseEnterDelay',
      title: {
        label: i18n("展示延时", "display delay"),
        tip: i18n("mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：秒", "mouseEnterDelay | The delay after the mouse is moved in before the Tooltip is displayed, unit: seconds")
      },
      propType: 'number',
      defaultValue: 0.1,
      setter: {
        componentName: 'NumberSetter',
        props: {
          step: 0.1
        }
      }
    }, {
      name: 'mouseLeaveDelay',
      title: {
        label: i18n("隐藏延时", "Hide delay"),
        tip: i18n("mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒", "mouseLeaveDelay | The delay after the mouse is moved out before hiding the Tooltip, unit: seconds")
      },
      propType: 'number',
      defaultValue: 0.1,
      setter: {
        componentName: 'NumberSetter',
        props: {
          step: 0.1
        }
      }
    }]
  }],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      style: true,
      events: [{
        name: 'onOpenChange',
        template: "onOpenChange(open,${extParams}){\n// ShowHide callback\nconsole.log('onOpenChange',open);}"
      }]
    }
  }
};

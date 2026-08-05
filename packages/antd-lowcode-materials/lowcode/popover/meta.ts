import snippets from './snippets';
export default {
  snippets,
  componentName: 'Popover',
  title: "Popover",
  category: "Data Display",
  props: [{
    title: "Content",
    display: 'block',
    type: 'group',
    items: [{
      name: 'title',
      title: {
        label: "Card title",
        tip: "title | Card title"
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'node', 'func']
      },
      setter: ['StringSetter', 'SlotSetter', 'FunctionSetter', 'VariableSetter']
    }, {
      name: 'content',
      title: {
        label: "CardContent",
        tip: "content | CardContent"
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'node', 'func']
      },
      setter: ['StringSetter', 'SlotSetter', 'FunctionSetter', 'VariableSetter']
    }]
  }, {
    title: "Control",
    display: 'block',
    type: 'group',
    items: [{
      name: 'defaultOpen',
      title: {
        label: "Show or hide by default",
        tip: "defaultOpen | Whether to show or hide by default"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'open',
      title: {
        label: "Manually show and hide",
        tip: "open | Manually control the display and hiding of the floating layer"
      },
      propType: 'bool',
      setter: 'BoolSetter'
    }]
  }, {
    title: "Appearance",
    display: 'block',
    type: 'group',
    items: [{
      name: 'placement',
      title: {
        label: "Bubble position",
        tip: "placement | bubble position"
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
            title: "Top",
            value: 'top'
          }, {
            title: "Left",
            value: 'left'
          }, {
            title: "Right",
            value: 'right'
          }, {
            title: "Bottom",
            value: 'bottom'
          }, {
            title: "Top left",
            value: 'topLeft'
          }, {
            title: "Top right",
            value: 'topRight'
          }, {
            title: "Bottom left",
            value: 'bottomLeft'
          }, {
            title: "Bottom right",
            value: 'bottomRight'
          }, {
            title: "LeftTop",
            value: 'leftTop'
          }, {
            title: "LeftBottom",
            value: 'leftBottom'
          }, {
            title: "RightTop",
            value: 'rightTop'
          }, {
            title: "RightBottom",
            value: 'rightBottom'
          }]
        }
      }
    }, {
      name: 'autoAdjustOverflow',
      title: {
        label: "automatic adjustment",
        tip: "autoAdjustOverflow | Automatically adjust the position of the bubble when it is blocked"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: true
    }, {
      name: 'arrowPointAtCenter',
      title: {
        label: "Point to center",
        tip: "arrowPointAtCenter | Whether the arrow points to the center of the target element"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'color',
      title: {
        label: "background color",
        tip: "color | background color"
      },
      propType: 'string',
      setter: 'ColorSetter'
    }, {
      name: 'zIndex',
      title: {
        label: 'zIndex',
        tip: "zIndex | Set Tooltip z-indexValue"
      },
      propType: 'number',
      setter: 'NumberSetter'
    }]
  }, {
    name: 'overlayStyle',
    title: "Card style",
    type: 'group',
    extraProps: {
      display: 'entry'
    },
    items: [{
      name: 'overlayStyle',
      title: {
        label: "Style settings",
        tip: "overlayStyle | Card style"
      },
      setter: 'StyleSetter',
      extraProps: {
        display: 'block'
      }
    }]
  }, {
    name: 'overlayInnerStyle',
    title: "CardContent style",
    type: 'group',
    extraProps: {
      display: 'entry'
    },
    items: [{
      name: 'overlayInnerStyle',
      title: {
        label: "Style settings",
        tip: "overlayStyle | The style of the card content area"
      },
      setter: 'StyleSetter',
      extraProps: {
        display: 'block'
      }
    }]
  }, {
    title: "Row",
    display: 'block',
    type: 'group',
    items: [{
      name: 'trigger',
      title: {
        label: "Trigger Row",
        tip: "trigger | Trigger Row"
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
            title: "mouseover",
            value: 'hover'
          }, {
            title: "get focus",
            value: 'focus'
          }, {
            title: "Mouse Click",
            value: 'click'
          }, {
            title: "right click menu",
            value: 'contextMenu'
          }]
        }
      }
    }, {
      name: 'mouseEnterDelay',
      title: {
        label: "display delay",
        tip: "mouseEnterDelay | The delay after the mouse is moved in before the Tooltip is displayed, unit: seconds"
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
        label: "Hide delay",
        tip: "mouseLeaveDelay | The delay after the mouse is moved out before hiding the Tooltip, unit: seconds"
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

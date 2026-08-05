import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Input.Search',
  title: i18n("搜索框", "Search"),
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: i18n("默认值", "Default value"),
      tip: i18n("默认值", "Default value")
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'value',
    title: {
      label: i18n("当前值", "Current value"),
      tip: i18n("当前值", "Current value")
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'bordered',
    title: {
      label: i18n("显示边框", "Show border"),
      tip: i18n("是否有边框", "Whether bordered")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'loading',
    title: {
      label: i18n("加载状态", "LoadingStatus"),
      tip: 'loading'
    },
    propType: 'bool',
    setter: 'BoolSetter'
  }, {
    name: 'disabled',
    title: {
      label: i18n("是否禁用", "Disabled"),
      tip: i18n("是否为禁用状态", "Whether disabled")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'placeholder',
    title: {
      label: i18n("占位提示", "Placeholder"),
      tip: i18n("占位提示", "Placeholder")
    },
    propType: 'string',
    defaultValue: "Please enter",
    setter: 'StringSetter'
  },
  // {
  //   name: 'id',
  // title: { label: 'Input ID', tip: 'Input ID' },
  //   propType: 'string',
  // },
  {
    name: 'size',
    title: {
      label: i18n("控件大小", "Control size"),
      tip: i18n("控件大小", "Control size")
    },
    propType: {
      type: 'oneOf',
      value: ['large', 'middle', 'small']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: i18n("大", "Large"),
          value: 'large'
        }, {
          title: i18n("中", "Middle"),
          value: 'middle'
        }, {
          title: i18n("小", "Small"),
          value: 'small'
        }]
      }
    },
    defaultValue: 'middle'
  }, {
    name: 'enterButton',
    title: {
      label: i18n("确认按钮", "OKButton"),
      tip: i18n("是否有确认按钮，可设为按钮文字。该属性会与 addonAfter 冲突。", "Whether there is a confirmation button can be set as button text. This property conflicts with addonAfter.")
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'node']
    },
    defaultValue: false
  }, {
    name: 'addonAfter',
    title: {
      label: i18n("后置标签", "Addon after"),
      tip: i18n("后置标签", "Addon after")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'addonBefore',
    title: {
      label: i18n("前置标签", "Addon before"),
      tip: i18n("前置标签", "Addon before")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'prefix',
    title: {
      label: i18n("前缀", "Prefix"),
      tip: i18n("前缀", "Prefix")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'suffix',
    title: {
      label: i18n("后缀", "Suffix"),
      tip: i18n("后缀", "Suffix")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'onChange',
    title: {
      label: i18n("输入框内容变化时的回调", "Callback when input content changes"),
      tip: i18n("输入框内容变化时的回调", "Callback when input content changes")
    },
    propType: 'func'
  }, {
    name: 'onPressEnter',
    title: {
      label: i18n("按下回车的回调", "Callback on press Enter"),
      tip: i18n("按下回车的回调", "Callback on press Enter")
    },
    propType: 'func'
  }, {
    name: 'onSearch',
    title: {
      label: i18n("点击搜索或按下回车键时的回调", "Callback when search is clicked or enter key is pressed"),
      tip: i18n("点击搜索或按下回车键时的回调", "Callback when search is clicked or enter key is pressed")
    },
    propType: 'func'
  }, {
    name: 'onFocus',
    title: {
      label: i18n("获取焦点回调", "Callback on focus"),
      tip: i18n("获取焦点回调", "Callback on focus")
    },
    propType: 'func'
  }, {
    name: 'onKeyDown',
    title: {
      label: i18n("按键按下时的回调", "Callback on key down"),
      tip: i18n("按键按下时的回调", "Callback on key down")
    },
    propType: 'func'
  }, {
    name: 'onKeyPress',
    title: {
      label: i18n("按键按下后的回调", "Callback on key press"),
      tip: i18n("按键按下之后释放之前的回调", "Callback between key down and key up")
    },
    propType: 'func'
  }, {
    name: 'onKeyUp',
    title: {
      label: i18n("按键释放回调", "Callback on key up"),
      tip: i18n("按键释放之后的回调", "Callback after key up")
    },
    propType: 'func'
  }, {
    name: 'onBlur',
    title: {
      label: i18n("失去焦点回调", "Callback on blur"),
      tip: i18n("失去焦点回调", "Callback on blur")
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(event,${extParams}){\n// Callback when input content changes\nconsole.log('onChange',event);}"
      }, {
        name: 'onPressEnter',
        template: "onPressEnter(event,${extParams}){\n// Callback on press Enter\nconsole.log('onPressEnter',event);}"
      }, {
        name: 'onSearch',
        template: "onSearch(value,event,${extParams}){\n// Callback when the search icon, clear icon, or enter key is pressed\nconsole.log('onSearch',value,event);}"
      }, {
        name: 'onFocus',
        template: "onFocus(event,${extParams}){\n// Callback on focus\nconsole.log('onFocus',event);}"
      }, {
        name: 'onKeyDown',
        template: "onKeyDown(event,${extParams}){\n// Callback on key down\nconsole.log('onKeyDown',event);}"
      }, {
        name: 'onKeyPress',
        template: "onKeyPress(event,${extParams}){\n// Callback on key press\nconsole.log('onKeyPress',event);}"
      }, {
        name: 'onKeyUp',
        template: "onKeyUp(event,${extParams}){\n// Callback on key up\nconsole.log('onKeyUp',event);}"
      }, {
        name: 'onBlur',
        template: "onBlur(event,${extParams}){\n// Callback on key up\nconsole.log('onBlur',event);}"
      }]
    }
  }
};

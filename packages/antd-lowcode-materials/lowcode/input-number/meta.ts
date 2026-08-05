import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'InputNumber',
  title: i18n("数字输入框", "InputNumber"),
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: i18n("默认值", "Default value"),
      tip: i18n("默认值", "Default value")
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'value',
    title: {
      label: i18n("当前值", "Current value"),
      tip: i18n("当前值", "Current value")
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'autoFocus',
    title: {
      label: i18n("自动聚焦", "Auto focus"),
      tip: i18n("自动获取焦点", "Auto focus")
    },
    propType: 'bool',
    defaultValue: false,
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
  }, {
    name: 'controls',
    title: {
      label: i18n("是否显示增减按钮", "Whether to display increase and decrease buttons"),
      tip: i18n("是否显示增减按钮", "Whether to display increase and decrease buttons")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
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
  },
  // {
  //   name: 'formatter',
  //   title: {
  // label: 'Specify the format of the input box display value',
  // tip: 'Specify the format for displaying values in the input box',
  //   },
  //   propType: 'func',
  // },
  {
    name: 'max',
    title: {
      label: i18n("最大值", "Max"),
      tip: i18n("最大值", "Max")
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'min',
    title: {
      label: i18n("最小值", "Min"),
      tip: i18n("最小值", "Min")
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'precision',
    title: {
      label: i18n("数值精度", "Precision"),
      tip: i18n("数值精度", "Precision")
    },
    propType: 'number',
    setter: 'NumberSetter'
  },
  // {
  //   name: 'decimalSeparator',
  // title: { label: 'Decimal point', tip: 'Decimal point' },
  //   propType: 'string',
  // },
  {
    name: 'size',
    title: {
      label: i18n("尺寸", "Size"),
      tip: i18n("输入框大小", "InputSize")
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
    name: 'step',
    title: {
      label: i18n("单步长", "single step size"),
      tip: i18n("每次改变步数", "Change the number of steps each time")
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'onChange',
    title: {
      label: i18n("变化回调", "Change callback"),
      tip: i18n("变化回调", "Change callback")
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
        template: "onChange(value,${extParams}){\n// Change callback\nconsole.log('onChange',value);}"
      }, {
        name: 'onPressEnter',
        template: "onPressEnter(event,${extParams}){\n// Callback on press Enter\nconsole.log('onPressEnter',event);}"
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

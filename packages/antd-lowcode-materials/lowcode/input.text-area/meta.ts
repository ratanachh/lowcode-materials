import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Input.TextArea',
  title: i18n("长文本", "long text"),
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: i18n("默认值", "Default value"),
      tip: i18n("默认内容", "Default content")
    },
    propType: 'string',
    setter: 'TextAreaSetter'
  }, {
    name: 'value',
    title: {
      label: i18n("当前值", "Current value"),
      tip: i18n("当前值", "Current value")
    },
    propType: 'string',
    setter: 'TextAreaSetter'
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
    name: 'showCount',
    title: {
      label: i18n("展示字数", "display word count"),
      tip: i18n("是否展示字数", "Whether to display word count")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'id',
    title: {
      label: i18n("输入框ID", "Input ID"),
      tip: i18n("输入框的ID", "Input ID")
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'maxLength',
    title: {
      label: i18n("最大长度", "Max length"),
      tip: i18n("最大长度", "Max length")
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
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
    name: 'autoSize',
    title: {
      label: i18n("高度自适应设置", "HeightAutoSet"),
      tip: i18n("高度自适应设置", "HeightAutoSet")
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', {
        type: 'shape',
        value: [{
          name: 'minRows',
          title: i18n("最小行数", "Minimum number of rows"),
          setter: 'NumberSetter',
          defaultValue: 3
        }, {
          name: 'maxRows',
          title: i18n("最大行数", "Maximum number of rows"),
          setter: 'NumberSetter',
          defaultValue: 3
        }]
      }]
    },
    defaultValue: false
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
    name: 'onResize',
    title: {
      label: i18n("resize 回调", "Resize callback"),
      tip: i18n("resize 回调", "Resize callback")
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
        name: 'onResize',
        template: "onResize({width,height},${extParams}){\n// resize callback\nconsole.log('onResize',width,height);}"
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

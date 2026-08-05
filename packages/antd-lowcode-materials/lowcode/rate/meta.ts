import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Rate',
  title: i18n("评分", "Rate"),
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
    name: 'allowClear',
    title: {
      label: i18n("支持清除", "Allow clear"),
      tip: i18n("是否允许清除", "Whether allow clear")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'allowHalf',
    title: {
      label: i18n("支持半选", "Allow half"),
      tip: i18n("支持半选", "Allow half")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
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
    name: 'character',
    title: {
      label: i18n("符号", "symbol"),
      tip: i18n("自定义字符", "Custom characters")
    },
    propType: 'node'
  }, {
    name: 'count',
    title: {
      label: i18n("总数", "Total"),
      tip: i18n("star 总数", "star Total")
    },
    propType: 'number',
    defaultValue: 5,
    setter: 'NumberSetter'
  },
  // {
  //   name: 'value',
  // title: { label: 'Current value', tip: 'Current number' },
  //   propType: 'number',
  // },

  {
    name: 'disabled',
    title: {
      label: i18n("是否禁用", "Disabled"),
      tip: i18n("是否为禁用状态", "Whether disabled")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'tooltips',
    title: {
      label: i18n("提示信息", "Tooltip"),
      tip: i18n("自定义每项的提示信息", "Customize the prompt information for each item")
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    }
  }, {
    name: 'onBlur',
    title: {
      label: i18n("失去焦点时的回调", "Callback on blur"),
      tip: i18n("失去焦点时的回调", "Callback on blur")
    },
    propType: 'func'
  }, {
    name: 'onChange',
    title: {
      label: i18n("选择时的回调", "Callback on select"),
      tip: i18n("选择时的回调", "Callback on select")
    },
    propType: 'func'
  }, {
    name: 'onFocus',
    title: {
      label: i18n("获取焦点时的回调", "Callback on focus"),
      tip: i18n("获取焦点时的回调", "Callback on focus")
    },
    propType: 'func'
  }, {
    name: 'onHoverChange',
    title: {
      label: i18n("鼠标经过时回调", "Callback when mouse passes over"),
      tip: i18n("鼠标经过时数值变化的回调", "Callback for value changes when the mouse passes over")
    },
    propType: 'func'
  }, {
    name: 'onKeyDown',
    title: {
      label: i18n("按键回调", "Key callback"),
      tip: i18n("按键回调", "Key callback")
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onBlur',
        template: "onBlur(${extParams}){\n// Callback on blur\nconsole.log('onBlur');}"
      }, {
        name: 'onChange',
        template: "onChange(value,${extParams}){\n// Callback on select\nconsole.log('onChange',value);}"
      }, {
        name: 'onFocus',
        template: "onFocus(${extParams}){\n// Callback on focus\nconsole.log('onFocus');}"
      }, {
        name: 'onHoverChange',
        template: "onHoverChange(value,${extParams}){\n// Callback for value changes when the mouse passes over\nconsole.log('onHoverChange',value);}"
      }, {
        name: 'onKeyDown',
        template: "onKeyDown(event,${extParams}){\n// Key callback\nconsole.log('onKeyDown',event);}"
      }]
    }
  }
};

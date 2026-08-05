import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Cascader',
  title: i18n("级联选择", "Cascader"),
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: i18n("默认的选中项", "Default selected keys"),
      tip: i18n("默认的选中项", "Default selected keys")
    },
    propType: {
      type: 'arrayOf',
      value: {
        type: 'oneOfType',
        value: ['string', 'number']
      }
    }
  }, {
    name: 'value',
    title: {
      label: i18n("当前选中项", "Current selected"),
      tip: i18n("当前选中项", "Current selected")
    },
    propType: {
      type: 'arrayOf',
      value: {
        type: 'oneOfType',
        value: ['string', 'number']
      }
    }
  }, {
    name: 'options',
    title: {
      label: i18n("选项数据", "OptionData"),
      tip: i18n("可选项数据源", "Optional data source")
    },
    setter: 'JsonSetter'
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
    name: 'autoFocus',
    title: {
      label: i18n("自动聚焦", "Auto focus"),
      tip: i18n("自动获取焦点", "Auto focus")
    },
    propType: 'bool',
    defaultValue: false,
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
    name: 'changeOnSelect',
    title: {
      label: i18n("点选触发", "Click to trigger"),
      tip: i18n("点选每级菜单选项值都会触发onChange", "Clicking on each level of menu option value will trigger onChange")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'className',
    title: {
      label: i18n("自定义类名", "CustomclassName"),
      tip: i18n("自定义类名", "CustomclassName")
    },
    propType: 'string',
    setter: 'StringSetter'
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
    name: 'expandTrigger',
    title: {
      label: i18n("菜单触发方式", "Menu triggering method"),
      tip: i18n("触发次级菜单的展开的方式", "How to trigger the expansion of secondary menus")
    },
    propType: {
      type: 'oneOf',
      value: ['click', 'hover']
    }
  }, {
    name: 'notFoundContent',
    title: {
      label: i18n("无数据展示", "Not found content"),
      tip: i18n("无数据", "NoneData")
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'placeholder',
    title: {
      label: i18n("输入框占位文本", "InputPlaceholderText"),
      tip: i18n("输入框占位文本", "InputPlaceholderText")
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'placement',
    title: {
      label: i18n("浮层预设位置", "Floating layer default position"),
      tip: i18n("浮层预设位置", "Floating layer default position")
    },
    propType: {
      type: 'oneOf',
      value: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight']
    }
  }, {
    name: 'showSearch',
    title: {
      label: i18n("支持搜索", "Support Search"),
      tip: i18n("在选择框中显示搜索框", "Show search box in select box")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
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
      componentName: 'SelectSetter',
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
    name: 'style',
    title: {
      label: i18n("自定义样式", "Custom style"),
      tip: i18n("自定义样式", "Custom style")
    },
    propType: 'object'
  }, {
    name: 'onChange',
    title: {
      label: i18n("选择完成后的回调", "Callback after selection is complete"),
      tip: i18n("选择完成后的回调", "Callback after selection is complete")
    },
    propType: 'func'
  }, {
    name: 'onPopupVisibleChange',
    title: {
      label: i18n("显示/隐藏浮层的回调", "Show/Hide Overlay callback"),
      tip: i18n("显示/隐藏浮层的回调", "Show/Hide Overlay callback")
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(value,selectedOptions,${extParams}){\n// Callback after selection is completed\nconsole.log('onChange', value, selectedOptions);}"
      }, {
        name: 'onPopupVisibleChange',
        template: "onPopupVisibleChange(value,selectedOptions,${extParams}){\n// Show/Hide Overlay callback\nconsole.log('onPopupVisibleChange', value, selectedOptions);}"
      }]
    }
  }
};

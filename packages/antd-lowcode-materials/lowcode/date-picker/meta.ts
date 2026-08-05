import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'DatePicker',
  title: i18n("日期选择框", "DatePicker"),
  category: "Data Entry",
  props: [{
    title: i18n("值设置", "ValueSet"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'defaultValue',
      title: {
        label: i18n("默认值", "Default value"),
        tip: i18n("defaultValue | 默认值", "defaultValue | Default value")
      },
      propType: 'date',
      setter: 'DateSetter'
    }, {
      name: 'value',
      title: {
        label: i18n("当前值", "Current value"),
        tip: i18n("value | 当前值", "value | Current value")
      },
      propType: 'date',
      setter: 'DateSetter'
    }]
  }, {
    title: i18n("功能选项", "FunctionOption"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'size',
      title: {
        label: i18n("尺寸", "Size"),
        tip: i18n("size | 输入框大小", "size | InputSize")
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
      name: 'picker',
      title: {
        label: i18n("日期类型", "DateType"),
        tip: i18n("picker | 选择器日期类型", "picker | SelectDateType")
      },
      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [{
            title: i18n("日期", "Date"),
            value: 'date'
          }, {
            title: i18n("周", "Week"),
            value: 'week'
          }, {
            title: i18n("月份", "Month"),
            value: 'month'
          }, {
            title: i18n("季度", "quarter"),
            value: 'quarter'
          }, {
            title: i18n("年份", "Year"),
            value: 'year'
          }]
        }
      },
      propType: {
        type: 'oneOf',
        value: ['date', 'week', 'month', 'quarter', 'year']
      }
    }, {
      name: 'format',
      title: {
        label: i18n("日期格式", "DateFormat"),
        tip: i18n("format | 设置日期格式", "format | Set DateFormat")
      },
      propType: 'string',
      defaultValue: 'YYYY-MM-DD',
      setter: 'StringSetter'
    }, {
      name: 'placeholder',
      title: {
        label: i18n("提示文字", "Tip text"),
        tip: i18n("placeholder | 输入框提示文字", "placeholder | Input placeholderText")
      },
      propType: 'string',
      setter: 'StringSetter'
    }, {
      name: 'allowClear',
      title: {
        label: i18n("支持清除", "Allow clear"),
        tip: i18n("allowClear | 是否允许清除", "allowClear | Whether allow clear")
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'bordered',
      title: {
        label: i18n("显示边框", "Show border"),
        tip: i18n("bordered | 是否有边框", "bordered | Whether bordered")
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'showToday',
      title: {
        label: i18n("展示今天按钮", "show today button"),
        tip: i18n("showToday | 是否展示今天按钮", "showToday | Whether to display today button")
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'autoFocus',
      title: {
        label: i18n("自动聚焦", "Auto focus"),
        tip: i18n("autoFocus | 自动获取焦点", "autoFocus | Auto focus")
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }, {
      name: 'disabled',
      title: {
        label: i18n("是否禁用", "Disabled"),
        tip: i18n("disabled | 是否为禁用状态", "disabled | Whether disabled")
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }, {
      name: 'inputReadOnly',
      title: {
        label: i18n("是否只读", "Is it read-only?"),
        tip: i18n("inputReadOnly | 避免在移动设备上打开虚拟键盘", "inputReadOnly | Avoid opening the virtual keyboard on mobile devices")
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }, {
      name: 'showTime',
      title: {
        label: i18n("时间选择", "TimeSelect"),
        tip: i18n("showTime | 是否能选择时间", "showTime | whether time can be selected")
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }]
  }, {
    title: i18n("高级", "Advanced"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'disabledDate',
      title: {
        label: i18n("不可选日期", "Disabled date"),
        tip: i18n("disabledDate | 不可选择的日期", "disabledDate | Unselectable date")
      },
      propType: 'func',
      setter: [{
        componentName: 'FunctionSetter',
        props: {
          template: 'disabledDate(currentDate,${extParams}){\n// Set non-selectable dates\nreturn true\n}'
        }
      }, 'VariableSetter']
    }]
  }
  // {
  //   name: 'dropdownClassName',
  //   title: {
  // label: 'Extra popup calendar className',
  // tip: 'Extra popup calendar className',
  //   },
  //   setter: 'ClassNameSetter',
  // },
  // {
  //   name: 'popupStyle',
  // title: { label: 'Extra popup calendar style', tip: 'Extra popup calendar style' },
  //   setter: 'JsonSetter',
  // },
  // {
  //   name: 'suffixIcon',
  // title: { label: 'Custom select suffix icon', tip: 'Custom select suffix icon' },
  //   setter: 'IconSetter',
  // },
  // {
  //   name: 'style',
  // title: { label: 'Custom input style', tip: 'Custom input style' },
  //   setter: 'JsonSetter',
  // },
  ],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(date,dateString,${extParams}){\n// Callback when time changes\nconsole.log('onChange',date,dateString);}"
      }, {
        name: 'onOpenChange',
        template: "onOpenChange(open,${extParams}){\n// Callbacks for popping up and closing the calendar\nconsole.log('onOpenChange',open);}"
      }, {
        name: 'onPanelChange',
        template: "onPanelChange(value,mode,${extParams}){\n// Calendar panel switching callback\nconsole.log('onPanelChange',value,mode);}"
      }]
    }
  }
};

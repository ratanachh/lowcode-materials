import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'DatePicker.RangePicker',
  title: i18n("日期区间选择", "Date range selection"),
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
      propType: 'object',
      setter: 'JsonSetter'
    }, {
      name: 'value',
      title: {
        label: i18n("当前值", "Current value"),
        tip: i18n("value | 当前值", "value | Current value")
      },
      propType: 'object',
      setter: 'JsonSetter'
    }, {
      name: 'defaultPickerValue',
      title: {
        label: i18n("默认面板日期", "DefaultPanelDate"),
        tip: i18n("defaultPickerValue | 默认面板日期", "defaultPickerValue | DefaultPanelDate")
      },
      propType: 'object',
      setter: 'JsonSetter'
    }]
  }, {
    title: i18n("功能选项", "FunctionOption"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'size',
      title: {
        label: i18n("尺寸", "Size"),
        tip: i18n("size | 输入框大小，large 高度为 40px，small 为 24px，默认是 32px", "size | InputSize，large Height 40px，small 24px，DefaultYes 32px")
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
        label: i18n("选择器类型", "SelectType"),
        tip: i18n("picker | 设置选择器类型", "picker | Set SelectType")
      },
      propType: {
        type: 'oneOf',
        value: ['date', 'week', 'month', 'quarter', 'year']
      },
      defaultValue: 'date',
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
      }
    }, {
      name: 'mode',
      title: {
        label: i18n("面板模式", "PanelMode"),
        tip: i18n("mode | 日期面板的状态", "mode | DatePanel Status")
      },
      propType: {
        type: 'oneOf',
        value: ['time', 'date', 'month', 'year', 'decade']
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
            title: i18n("年份", "Year"),
            value: 'year'
          }, {
            title: i18n("十年间隔", "ten years interval"),
            value: 'decade'
          }]
        }
      }
    }, {
      name: 'format',
      title: {
        label: i18n("日期格式", "DateFormat"),
        tip: i18n("format | 展示的日期格式，配置参考 moment.js", "format | Displayed date format, configuration reference moment.js")
      },
      propType: 'string',
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
    },
    // {
    //   name: 'open',
    //   title: {
    // label: 'Whether the elastic layer is expanded',
    // tip: 'open | Control whether the elastic layer is expanded',
    //   },
    //   propType: 'bool',
    //   setter: 'BoolSetter',
    // },
    {
      name: 'showTime',
      title: {
        label: i18n("时间选择", "TimeSelect"),
        tip: i18n("showTime | 时间选择", "showTime | TimeSelect")
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }, {
      name: 'inputReadOnly',
      title: {
        label: i18n("输入框只读", "Input box read only"),
        tip: i18n("inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘）", "inputReadOnly | Set the input box to be read-only (avoid opening the virtual keyboard on mobile devices)")
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
      name: 'ranges',
      title: {
        label: i18n("预设范围", "Default range"),
        tip: i18n("ranges | 预设时间范围快捷选择", "ranges | Quick selection of preset time ranges")
      },
      propType: 'object',
      setter: 'JsonSetter'
    }, {
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
  //   name: 'renderExtraFooter',
  // title: { label: ' PanelMiddleAdd Extra Footer', tip: ' PanelMiddleAdd Extra Footer' },
  //   propType: 'func',
  // },
  // {
  //   name: 'className',
  // title: { label: 'Select className', tip: 'Select className' },
  //   propType: 'string',
  // },
  // {
  //   name: 'dropdownClassName',
  //   title: {
  // label: 'Extra popup calendar className',
  // tip: 'Extra popup calendar className',
  //   },
  //   propType: 'string',
  // },
  // {
  //   name: 'getPopupContainer',
  //   title: {
  // label: 'Overlay container; defaults to a new div on body',
  // tip: 'Overlay container; defaults to a new div on body',
  //   },
  //   propType: 'func',
  // },
  // {
  //   name: 'locale',
  // title: { label: 'Locale config', tip: 'Locale config' },
  //   propType: 'object',
  // },
  // {
  //   name: 'popupStyle',
  // title: { label: 'Extra popup calendar style', tip: 'Extra popup calendar style' },
  //   propType: 'CSSProperties',
  //   defaultValue: '{}',
  // },
  // {
  //   name: 'style',
  // title: { label: 'Custom input style', tip: 'Custom input style' },
  //   propType: 'CSSProperties',
  //   defaultValue: '{}',
  // },
  ],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(dates,dateStrings,${extParams}){\n// Callback when the date range changes\nconsole.log('onChange',dates,dateStrings);}"
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

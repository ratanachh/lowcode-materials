import snippets from './snippets';
export default {
  snippets,
  componentName: 'DatePicker.RangePicker',
  title: "Date range selection",
  category: "Data Entry",
  props: [{
    title: "ValueSet",
    display: 'block',
    type: 'group',
    items: [{
      name: 'defaultValue',
      title: {
        label: "Default value",
        tip: "defaultValue | Default value"
      },
      propType: 'object',
      setter: 'JsonSetter'
    }, {
      name: 'value',
      title: {
        label: "Current value",
        tip: "value | Current value"
      },
      propType: 'object',
      setter: 'JsonSetter'
    }, {
      name: 'defaultPickerValue',
      title: {
        label: "DefaultPanelDate",
        tip: "defaultPickerValue | DefaultPanelDate"
      },
      propType: 'object',
      setter: 'JsonSetter'
    }]
  }, {
    title: "FunctionOption",
    display: 'block',
    type: 'group',
    items: [{
      name: 'size',
      title: {
        label: "Size",
        tip: "size | InputSize，large Height 40px，small 24px，DefaultYes 32px"
      },
      propType: {
        type: 'oneOf',
        value: ['large', 'middle', 'small']
      },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [{
            title: "Large",
            value: 'large'
          }, {
            title: "Middle",
            value: 'middle'
          }, {
            title: "Small",
            value: 'small'
          }]
        }
      },
      defaultValue: 'middle'
    }, {
      name: 'picker',
      title: {
        label: "SelectType",
        tip: "picker | Set SelectType"
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
            title: "Date",
            value: 'date'
          }, {
            title: "Week",
            value: 'week'
          }, {
            title: "Month",
            value: 'month'
          }, {
            title: "quarter",
            value: 'quarter'
          }, {
            title: "Year",
            value: 'year'
          }]
        }
      }
    }, {
      name: 'mode',
      title: {
        label: "PanelMode",
        tip: "mode | DatePanel Status"
      },
      propType: {
        type: 'oneOf',
        value: ['time', 'date', 'month', 'year', 'decade']
      },
      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [{
            title: "Date",
            value: 'date'
          }, {
            title: "Week",
            value: 'week'
          }, {
            title: "Month",
            value: 'month'
          }, {
            title: "Year",
            value: 'year'
          }, {
            title: "ten years interval",
            value: 'decade'
          }]
        }
      }
    }, {
      name: 'format',
      title: {
        label: "DateFormat",
        tip: "format | Displayed date format, configuration reference moment.js"
      },
      propType: 'string',
      setter: 'StringSetter'
    }, {
      name: 'placeholder',
      title: {
        label: "Tip text",
        tip: "placeholder | Input placeholderText"
      },
      propType: 'string',
      setter: 'StringSetter'
    }, {
      name: 'allowClear',
      title: {
        label: "Allow clear",
        tip: "allowClear | Whether allow clear"
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'bordered',
      title: {
        label: "Show border",
        tip: "bordered | Whether bordered"
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'autoFocus',
      title: {
        label: "Auto focus",
        tip: "autoFocus | Auto focus"
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }, {
      name: 'disabled',
      title: {
        label: "Disabled",
        tip: "disabled | Whether disabled"
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
        label: "TimeSelect",
        tip: "showTime | TimeSelect"
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }, {
      name: 'inputReadOnly',
      title: {
        label: "Input box read only",
        tip: "inputReadOnly | Set the input box to be read-only (avoid opening the virtual keyboard on mobile devices)"
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }]
  }, {
    title: "Advanced",
    display: 'block',
    type: 'group',
    items: [{
      name: 'ranges',
      title: {
        label: "Default range",
        tip: "ranges | Quick selection of preset time ranges"
      },
      propType: 'object',
      setter: 'JsonSetter'
    }, {
      name: 'disabledDate',
      title: {
        label: "Disabled date",
        tip: "disabledDate | Unselectable date"
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

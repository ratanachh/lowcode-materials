import snippets from './snippets';
export default {
  snippets,
  componentName: 'DatePicker',
  title: "DatePicker",
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
      propType: 'date',
      setter: 'DateSetter'
    }, {
      name: 'value',
      title: {
        label: "Current value",
        tip: "value | Current value"
      },
      propType: 'date',
      setter: 'DateSetter'
    }]
  }, {
    title: "FunctionOption",
    display: 'block',
    type: 'group',
    items: [{
      name: 'size',
      title: {
        label: "Size",
        tip: "size | InputSize"
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
        label: "DateType",
        tip: "picker | SelectDateType"
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
            title: "quarter",
            value: 'quarter'
          }, {
            title: "Year",
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
        label: "DateFormat",
        tip: "format | Set DateFormat"
      },
      propType: 'string',
      defaultValue: 'YYYY-MM-DD',
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
      name: 'showToday',
      title: {
        label: "show today button",
        tip: "showToday | Whether to display today button"
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
    }, {
      name: 'inputReadOnly',
      title: {
        label: "Is it read-only?",
        tip: "inputReadOnly | Avoid opening the virtual keyboard on mobile devices"
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }, {
      name: 'showTime',
      title: {
        label: "TimeSelect",
        tip: "showTime | whether time can be selected"
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

import snippets from './snippets';
export default {
  snippets,
  componentName: 'TimePicker',
  title: "TimePicker",
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: "DefaultTime",
      tip: "DefaultTime"
    },
    propType: 'date',
    setter: 'DateSetter'
  }, {
    name: 'value',
    title: {
      label: "Current Time",
      tip: "Current Time"
    },
    propType: 'date',
    setter: 'DateSetter'
  }, {
    name: 'allowClear',
    title: {
      label: "Allow clear",
      tip: "Whether allow clear"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'autoFocus',
    title: {
      label: "Auto focus",
      tip: "Auto focus"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'bordered',
    title: {
      label: "Show border",
      tip: "Whether bordered"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'className',
    title: {
      label: "SelectclassName",
      tip: "SelectclassName"
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'clearText',
    title: {
      label: "Clear button text",
      tip: "Clear button text"
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'disabled',
    title: {
      label: "Disabled",
      tip: "Whether disabled"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'disabledHours',
    title: {
      label: "Disable selection of partial hours option",
      tip: "Disable selection of partial hours option"
    },
    propType: 'func'
  }, {
    name: 'disabledMinutes',
    title: {
      label: "Disable selection of partial minute options",
      tip: "Disable selection of partial minute options"
    },
    propType: 'func'
  }, {
    name: 'disabledSeconds',
    title: {
      label: "Disable selection of partial seconds option",
      tip: "Disable selection of partial seconds option"
    },
    propType: 'func'
  }, {
    name: 'format',
    title: {
      label: "Display time format",
      tip: "Display time format"
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'getPopupContainer',
    title: {
      label: "Define the container for the floating layer",
      tip: "Overlay container; defaults to a new div on body"
    },
    propType: 'func'
  }, {
    name: 'hideDisabledOptions',
    title: {
      label: "Hide disabled options",
      tip: "Hide disabled options"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'hourStep',
    title: {
      label: "hour option interval",
      tip: "hour option interval"
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'inputReadOnly',
    title: {
      label: "read only",
      tip: "Set the input box to be read-only (avoid opening the virtual keyboard on mobile devices)"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'minuteStep',
    title: {
      label: "Minute option interval",
      tip: "Minute option interval"
    },
    propType: 'number',
    setter: 'NumberSetter'
  },
  // {
  //   name: 'open',
  // title: { label: 'PanelYesNoOpen ', tip: 'PanelYesNoOpen ' },
  //   propType: 'bool',
  //   // defaultValue: false,
  //   setter: 'BoolSetter'
  // },
  {
    name: 'placeholder',
    title: {
      label: "EmptyValueTip",
      tip: "Content displayed when there is no value"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', {
        type: 'arrayOf',
        value: 'string'
      }]
    }
  }, {
    name: 'popupClassName',
    title: {
      label: "Popup layer class name",
      tip: "Popup layer class name"
    },
    propType: 'string',
    setter: 'StringSetter'
  },
  // {
  //   name: 'popupStyle',
  // title: { label: 'Pop-up layer style object', tip: 'Pop-up layer style object' },
  //   propType: 'object',
  // },
  {
    name: 'secondStep',
    title: {
      label: "seconds option interval",
      tip: "seconds option interval"
    },
    propType: 'number',
    setter: 'NumberSetter'
  },
  // {
  //   name: 'suffixIcon',
  // title: { label: 'Custom select suffix icon', tip: 'Custom select suffix icon' },
  //   propType: 'node',
  // },
  // {
  //   name: 'clearIcon',
  // title: { label: 'Custom Clear Icon', tip: 'Custom Clear Icon' },
  //   propType: 'node',
  // },
  // {
  //   name: 'renderExtraFooter',
  //   title: {
  // label: 'Display customized content at the bottom of the selection box',
  // tip: 'Display customized content at the bottom of the selection box',
  //   },
  //   propType: 'func',
  // },
  {
    name: 'use12Hours',
    title: {
      label: "12-hour",
      tip: "Use 12-hour clock, when true `format` defaults to `h:mm:ss a`"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'onChange',
    title: {
      label: "callback when time changes",
      tip: "callback when time changes"
    },
    propType: 'func'
  }, {
    name: 'onOpenChange',
    title: {
      label: "PanelOpen /Off on callback",
      tip: "PanelOpen /Off on callback"
    },
    propType: 'func'
  }, {
    name: 'showNow',
    title: {
      label: "\"Now\" button",
      tip: "Whether the panel displays the \"Now\" button"
    },
    propType: 'bool',
    setter: 'BoolSetter'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(time,timeString,${extParams}){\n// Callback when time changes\nconsole.log('onChange',time,timeString);}"
      }, {
        name: 'onOpenChange',
        template: "onOpenChange(open,${extParams}){\n// PanelOpen/Off on callback\nconsole.log('onOpenChange',open);}"
      }]
    }
  }
};

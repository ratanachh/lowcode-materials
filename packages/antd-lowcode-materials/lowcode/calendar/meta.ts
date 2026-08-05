import snippets from './snippets';
export default {
  snippets,
  componentName: 'Calendar',
  title: "calendar",
  category: "Data Display",
  props: [{
    name: 'defaultValue',
    title: {
      label: "Default value",
      tip: "Default display date"
    },
    propType: 'date',
    setter: 'DateSetter'
  },
  // {
  //   name: 'dateCellRender',
  //   title: {
  // label: 'Customized date appended rendering',
  // tip: 'Customize the rendering date cell, and the returned content will be appended to the cell',
  //   },
  //   propType: 'func',
  // },
  // {
  //   name: 'dateFullCellRender',
  //   title: {
  // label: 'Customize rendering date cells, return content overlay cells',
  // tip: 'Customize the rendering date cell and return the content to cover the cell',
  //   },
  //   propType: 'func',
  // },
  {
    name: 'disabledDate',
    title: {
      label: "Disabled date",
      tip: "Unselectable dates"
    },
    propType: 'func'
  }, {
    name: 'fullscreen',
    title: {
      label: "Full screen display",
      tip: "Whether to display in full screen"
    },
    propType: 'bool',
    defaultValue: true
  },
  // {
  //   name: 'locale',
  // title: { label: 'Locale config', tip: 'Locale config' },
  //   propType: 'object',
  // },
  {
    name: 'mode',
    title: {
      label: "initial mode",
      tip: "initial mode"
    },
    propType: {
      type: 'oneOf',
      value: ['month', 'year']
    },
    defaultValue: 'month'
  },
  // {
  //   name: 'monthCellRender',
  //   title: {
  // label: 'Customized rendering of the month cell, the returned content will be appended to the cell',
  // tip: 'Customize the rendering of the month cell, and the returned content will be appended to the cell',
  //   },
  //   propType: 'func',
  // },
  // {
  //   name: 'monthFullCellRender',
  //   title: {
  // label: 'Customize the rendering of the month cell and return the content to cover the cell',
  // tip: 'Customize the rendering of the month cell and return the content covering the cell',
  //   },
  //   propType: 'func',
  // },
  // {
  //   name: 'validRange',
  // title: { label: 'Set Can Show Date', tip: 'Set Can Show Date' },
  //   propType: { type: 'arrayOf', value: 'object' },
  // },
  // {
  //   name: 'value',
  // title: { label: 'Current value', tip: 'Display date' },
  //   propType: 'object',
  // },
  {
    name: 'onPanelChange',
    title: {
      label: "DatePanelChange callback",
      tip: "DatePanelChange callback"
    },
    propType: 'func'
  }, {
    name: 'onSelect',
    title: {
      label: "Click Select Datecallback",
      tip: "Click Select Datecallback"
    },
    propType: 'func'
  }, {
    name: 'onChange',
    title: {
      label: "DateChange callback",
      tip: "DateChange callback"
    },
    propType: 'func'
  }
  // {
  //   name: 'headerRender',
  // title: { label: 'CustomHeaderContent', tip: 'CustomHeaderContent' },
  //   propType: 'func',
  // },
  ],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onPanelChange',
        template: "onPanelChange(date,mode,${extParams}){\n// DatePanelChange callback\nconsole.log('onPanelChange', date, mode);}"
      }, {
        name: 'onSelect',
        template: "onSelect(date,${extParams}){\n// Click Select Datecallback\nconsole.log('onSelect', date);}"
      }, {
        name: 'onChange',
        template: "onChange(date,${extParams}){\n// DateChange callback\nconsole.log('onChange', date);}"
      }]
    }
  }
};

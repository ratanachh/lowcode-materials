import snippets from './snippets';
export default {
  snippets,
  componentName: 'Badge',
  title: "Badge",
  category: "Data Display",
  props: [{
    name: 'color',
    title: {
      label: "dot color",
      tip: "Customize the color of the dots"
    },
    propType: 'string'
  }, {
    name: 'count',
    title: {
      label: "show numbers",
      tip: "The displayed number is displayed as `${overflowCount}+` when it is greater than overflowCount, and hidden when it is 0."
    },
    propType: 'node'
  }, {
    name: 'dot',
    title: {
      label: "Show dots",
      tip: "No numbers are displayed, only a small red dot"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'offset',
    title: {
      label: "dot offset",
      tip: "Set the position offset of the status point [number, number]"
    },
    propType: {
      type: 'arrayOf',
      value: 'number'
    }
  }, {
    name: 'overflowCount',
    title: {
      label: "cap value",
      tip: "Display the capped numeric value"
    },
    propType: 'number'
  }, {
    name: 'showZero',
    title: {
      label: "Show zero value",
      tip: "When the value is 0, whether to display Badge"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'status',
    title: {
      label: "Status",
      tip: "Set Badge as status point"
    },
    propType: {
      type: 'oneOf',
      value: ['success', 'processing', 'default', 'error', 'warning']
    }
  }, {
    name: 'text',
    title: {
      label: "StatusText",
      tip: "Valid if `status` is set, sets the text of the status point"
    },
    condition(target) {
      return !!target.getProps().getPropValue('status');
    },
    propType: 'string'
  }, {
    name: 'title',
    title: {
      label: "Hover Tip",
      tip: "Set the text displayed when the mouse is placed on the status point"
    },
    propType: 'string'
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

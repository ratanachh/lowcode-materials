import snippets from './snippets';
export default {
  snippets,
  componentName: 'Statistic',
  title: "Statistic",
  category: "Data Display",
  props: [{
    name: 'decimalSeparator',
    title: {
      label: "Set decimal point",
      tip: "Set decimal point"
    },
    propType: 'string'
  }, {
    name: 'formatter',
    title: {
      label: "Custom numerical display",
      tip: "Custom numerical display"
    },
    propType: 'func'
  }, {
    name: 'groupSeparator',
    title: {
      label: "Set thousandth identifier",
      tip: "Set thousandth identifier"
    },
    propType: 'string'
  }, {
    name: 'precision',
    title: {
      label: "Precision",
      tip: "Precision"
    },
    propType: 'number'
  }, {
    name: 'prefix',
    title: {
      label: "Set the prefix of the value",
      tip: "Set the prefix of the value"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'suffix',
    title: {
      label: "Set the suffix of the value",
      tip: "Set the suffix of the value"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'title',
    title: {
      label: "title of value",
      tip: "title of value"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'value',
    title: {
      label: "Numeric content",
      tip: "Numeric content"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'number']
    }
  }, {
    name: 'valueStyle',
    title: {
      label: "Set the style of a numeric value",
      tip: "Set the style of a numeric value"
    },
    propType: 'object'
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

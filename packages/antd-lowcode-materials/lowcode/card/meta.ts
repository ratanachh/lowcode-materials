import snippets from './snippets';
export default {
  snippets,
  componentName: 'Card',
  title: "Card",
  category: "Data Display",
  props: [{
    name: 'title',
    title: {
      label: "Card title",
      tip: "Card title"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  },
  // {
  //   name: 'actions',
  // title: { label: 'Card operation group', tip: 'Card operation group, located at the bottom of the card' },
  //   propType: { type: 'arrayOf', value: 'node' },
  // },
  // {
  //   name: 'headStyle',
  // title: { label: 'Title area style', tip: 'Customized title area style' },
  //   propType: 'object',
  // },
  // {
  //   name: 'bodyStyle',
  // title: { label: 'Content area style', tip: 'Content area custom style' },
  //   propType: 'object',
  // },
  {
    name: 'bordered',
    title: {
      label: "Show border",
      tip: "Whether bordered"
    },
    propType: 'bool',
    defaultValue: true
  }, {
    name: 'cover',
    title: {
      label: "card cover",
      tip: "card cover"
    },
    propType: 'node'
  }, {
    name: 'extra',
    title: {
      label: "Extra",
      tip: "The operation area in the upper right corner of the card"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'hoverable',
    title: {
      label: "can float",
      tip: "Can float when mouse moves over"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'loading',
    title: {
      label: 'loading',
      tip: "When the card content is still loading, you can use loading to display a placeholder"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'size',
    title: {
      label: "Size",
      tip: "Card size"
    },
    propType: {
      type: 'oneOf',
      value: ['default', 'small']
    },
    defaultValue: 'default'
  }, {
    name: 'type',
    title: {
      label: "CardType",
      tip: "CardType"
    },
    propType: {
      type: 'oneOf',
      value: ['default', 'inner']
    },
    defaultValue: 'default'
  }],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      style: true,
      events: [{
        name: 'onTabChange',
        template: "onTabChange(key,${extParams}){\n// Callback for tab switching\nconsole.log('onTabChange', key);}"
      }]
    }
  }
};

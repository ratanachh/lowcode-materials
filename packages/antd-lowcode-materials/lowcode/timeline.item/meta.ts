import snippets from './snippets';
export default {
  snippets,
  componentName: 'Timeline.Item',
  title: "Timeline Item",
  category: '',
  props: [{
    name: 'color',
    title: {
      label: "Color",
      tip: "Color"
    },
    propType: 'string',
    defaultValue: '#00f',
    setter: 'ColorSetter'
  }, {
    name: 'dot',
    title: {
      label: "timeline point",
      tip: "timeline point"
    },
    propType: 'node'
  }, {
    name: 'label',
    title: {
      label: "Tag",
      tip: "Tag"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node', 'func']
    }
  }, {
    name: 'position',
    title: {
      label: "Position",
      tip: "Position"
    },
    propType: {
      type: 'oneOf',
      value: ['left', 'right']
    }
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

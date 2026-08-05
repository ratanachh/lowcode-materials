import snippets from './snippets';
export default {
  snippets,
  componentName: 'Divider',
  title: "Divider",
  category: "Layout",
  props: [{
    name: 'className',
    title: {
      label: "Split line style class",
      tip: "Split line style class"
    },
    propType: 'string'
  }, {
    name: 'dashed',
    title: {
      label: "Dotted line or not?",
      tip: "Dotted line or not?"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'orientation',
    title: {
      label: "TitlePosition",
      tip: "DividerTitle Position"
    },
    propType: {
      type: 'oneOf',
      value: ['left', 'right', 'center']
    }
  }, {
    name: 'orientationMargin',
    title: {
      label: "title margin",
      tip: "The distance between the title and the nearest left/right border, removing the dividing line, and the orientation must be left or right"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'number']
    }
  }, {
    name: 'style',
    title: {
      label: "Divider style object",
      tip: "Divider style object"
    },
    propType: 'object'
  }, {
    name: 'type',
    title: {
      label: "Direction",
      tip: "horizontal or vertical type"
    },
    propType: {
      type: 'oneOf',
      value: ['horizontal', 'vertical']
    }
  }, {
    name: 'plain',
    title: {
      label: "Normal text style",
      tip: "Whether the text is displayed in normal text style"
    },
    propType: 'bool',
    defaultValue: false
  }],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      style: true,
      className: true
    }
  }
};

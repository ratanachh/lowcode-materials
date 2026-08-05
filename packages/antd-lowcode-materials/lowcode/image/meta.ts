import snippets from './snippets';
export default {
  snippets,
  componentName: 'Image',
  title: "Image",
  category: "Data Display",
  props: [{
    name: 'src',
    title: {
      label: "Image URL",
      tip: "Image URL"
    },
    propType: {
      type: 'string',
      isRequired: true
    }
  }, {
    name: 'alt',
    title: {
      label: "replacement text",
      tip: "replacement text"
    },
    propType: 'string'
  }, {
    name: 'preview',
    title: {
      label: "Support preview",
      tip: "Support preview"
    },
    defaultValue: true,
    propType: 'bool'
  }, {
    name: 'fallback',
    title: {
      label: "FailedAddress",
      tip: "Loading failed fault-tolerant address"
    },
    propType: 'string'
  }, {
    name: 'width',
    title: {
      label: "Width",
      tip: "Width"
    },
    propType: 'number'
  }, {
    name: 'height',
    title: {
      label: "Height",
      tip: "Height"
    },
    propType: 'number'
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

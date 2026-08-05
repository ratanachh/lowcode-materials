import snippets from './snippets';
export default {
  snippets,
  componentName: 'Typography.Link',
  title: "Link",
  category: "General",
  props: [{
    name: 'children',
    title: {
      label: "Content",
      tip: "Content"
    },
    propType: 'string',
    defaultValue: '',
    supportVariable: true
  }, {
    name: 'href',
    title: {
      label: "Jump link",
      tip: "Jump link"
    },
    propType: 'string',
    defaultValue: ''
  }, {
    name: 'target',
    title: {
      label: "Jump location",
      tip: "Where to display linked resources"
    },
    propType: {
      type: 'oneOf',
      value: ['_self', '_blank', '_parent', '_top']
    },
    defaultValue: '_self'
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

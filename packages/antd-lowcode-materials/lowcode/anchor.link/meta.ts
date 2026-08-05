import snippets from './snippets';
export default {
  snippets,
  componentName: 'Anchor.Link',
  title: "Anchor link",
  category: "Other",
  props: [{
    name: 'href',
    title: {
      label: "Anchor link",
      tip: "Anchor link"
    },
    propType: 'string'
  }, {
    name: 'target',
    title: {
      label: 'target',
      tip: "This property specifies where to display the linked resource"
    },
    propType: 'string'
  }, {
    name: 'title',
    title: {
      label: "Content",
      tip: "Content"
    },
    propType: 'string'
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

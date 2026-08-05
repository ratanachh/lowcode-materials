import snippets from './snippets';
export default {
  snippets,
  componentName: 'Skeleton',
  title: "Skeleton",
  category: "Feedback",
  props: [{
    name: 'active',
    title: {
      label: "Animation",
      tip: "Whether to display animation effects"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'avatar',
    title: {
      label: "Avatar placeholder image",
      tip: "Whether to display the avatar placeholder image"
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'object']
    }
  }, {
    name: 'loading',
    title: {
      label: "Loading",
      tip: "When true, the placeholder image is displayed. Otherwise, display the subcomponent directly"
    },
    propType: 'bool'
  }, {
    name: 'paragraph',
    title: {
      label: "Paragraph placeholder image",
      tip: "Whether to display paragraph placeholder images"
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'object']
    }
  }, {
    name: 'title',
    title: {
      label: "Title placeholder image",
      tip: "Whether to display the title placeholder image"
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'object']
    }
  }, {
    name: 'round',
    title: {
      label: "Round",
      tip: "When true, paragraphs and headings display rounded corners"
    },
    propType: 'bool',
    defaultValue: false
  }],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      style: true
    }
  }
};

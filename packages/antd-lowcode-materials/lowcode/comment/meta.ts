import snippets from './snippets';
export default {
  snippets,
  componentName: 'Comment',
  title: "Comment",
  category: "Data Display",
  props: [{
    name: 'actions',
    title: {
      label: "Operation list",
      tip: "List of action items rendered below the comment content"
    },
    propType: {
      type: 'arrayOf',
      value: 'node'
    }
  }, {
    name: 'author',
    title: {
      label: "The element to display as the author of the comment",
      tip: "The element to display as the author of the comment"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'avatar',
    title: {
      label: "avatar element",
      tip: "The element to display as the comment avatar - usually antd Avatar or src"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'children',
    title: {
      label: "Child node",
      tip: "Nested annotations should be provided as children of annotations"
    },
    propType: 'node'
  }, {
    name: 'content',
    title: {
      label: "Main content of the review",
      tip: "Main content of the review"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'datetime',
    title: {
      label: "Display time description",
      tip: "Display time description"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

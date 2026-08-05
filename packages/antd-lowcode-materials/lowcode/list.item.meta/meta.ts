export default {
  componentName: 'List.Item.Meta',
  title: "List itemContent",
  category: '',
  props: [{
    name: 'avatar',
    title: {
      label: "List element icon",
      tip: "List element icon"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'title',
    title: {
      label: "List element title",
      tip: "The title of the list element"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'avatar',
    title: {
      label: "List element description content",
      tip: "The description content of the list element"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }],
  configure: {
    component: {
      nestingRule: {
        parentWhitelist: ['List']
      }
    }
  }
};

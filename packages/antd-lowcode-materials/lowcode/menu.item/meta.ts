import snippets from './snippets';
export default {
  snippets,
  componentName: 'Menu.Item',
  title: "Menu Item",
  props: [{
    name: 'children',
    title: {
      label: "Content",
      tip: "Content"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'danger',
    title: {
      label: "ErrorStatus",
      tip: "Display error status style"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'disabled',
    title: {
      label: "Disabled",
      tip: "Whether disabled"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'icon',
    title: {
      label: "Menu icon",
      tip: "Menu icon"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    },
    defaultValue: false
  }, {
    name: 'key',
    title: {
      label: "unique sign",
      tip: "unique identifier of item"
    },
    propType: 'string'
  }, {
    name: 'title',
    title: {
      label: "Hover Title",
      tip: "Set the floating title displayed when shrinking"
    },
    propType: 'string'
  }],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['Menu']
      }
    },
    supports: {
      style: true
    }
  }
};

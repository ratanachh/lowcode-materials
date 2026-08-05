// FIXME: Selecting tabPane and clicking copy will cause problems because the copied components have the same key.

export default {
  componentName: 'List.Item',
  title: "List item",
  category: '',
  props: [{
    name: 'actions',
    title: {
      label: "list operation group",
      tip: "list operation group"
    },
    propType: {
      type: 'arrayOf',
      value: 'node'
    },
    setter: {
      componentName: 'ArraySetter',
      props: {
        itemSetter: {
          componentName: 'SlotSetter',
          title: "Action group slot",
          initialValue: {
            type: 'JSSlot',
            value: []
          }
        }
      }
    }
  }, {
    name: 'extra',
    title: {
      label: "Extra Content",
      tip: "Extra Content"
    },
    propType: 'node',
    setter: 'SlotSetter'
  }],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['List']
      }
    }
  }
};

import { i18n } from "../_utils/i18n";
// FIXME: Selecting tabPane and clicking copy will cause problems because the copied components have the same key.

export default {
  componentName: 'List.Item',
  title: i18n("列表项", "List item"),
  category: '',
  props: [{
    name: 'actions',
    title: {
      label: i18n("列表操作组", "list operation group"),
      tip: i18n("列表操作组", "list operation group")
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
          title: i18n("操作组插槽", "Action group slot"),
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
      label: i18n("额外内容", "Extra Content"),
      tip: i18n("额外内容", "Extra Content")
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

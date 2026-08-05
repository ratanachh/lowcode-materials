import { i18n } from "../_utils/i18n";
// FIXME: Selecting tabPane and clicking copy will cause problems because the copied components have the same key.

export default {
  componentName: 'Tabs.TabPane',
  title: i18n("标签页项", "tab item"),
  category: '',
  props: [{
    name: 'key',
    title: {
      label: 'key',
      tip: 'key'
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'tab',
    title: {
      label: i18n("标题", "Title"),
      tip: i18n("标题", "Title")
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  },
  // {
  //   name: 'closeable',
  //   title: {
  // label: 'Can Delete',
  // tip: 'Closable',
  //   },
  //   propType: 'bool',
  //   defaultValue: true,
  // },
  {
    name: 'disabled',
    title: {
      label: i18n("是否禁用", "Disabled"),
      tip: i18n("是否为禁用状态", "Whether disabled")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'forceRender',
    title: {
      label: i18n("隐藏时保留", "Force render"),
      tip: i18n("被隐藏时是否渲染 DOM 结构", "Whether to render the DOM structure when hidden")
    },
    propType: 'bool',
    setter: 'BoolSetter',
    supportVariable: true
  }],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['Tab']
      }
    }
  }
};

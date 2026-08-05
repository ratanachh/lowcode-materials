import { i18n } from "../_utils/i18n";
// FIXME: Selecting tabPane and clicking copy will cause problems because the copied components have the same key.

export default {
  componentName: 'Collapse.Panel',
  title: i18n("折叠项", "Collapse item"),
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
    name: 'header',
    title: {
      label: i18n("标题", "Title"),
      tip: i18n("标题", "Title")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'extra',
    title: {
      label: i18n("右上角内容", "Top right corner content"),
      tip: i18n("自定义渲染每个面板右上角的内容", "Customize rendering of content in the upper right corner of each panel")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'collapsible',
    title: i18n("可折叠触发区域", "Collapsible trigger area"),
    propType: {
      type: 'oneOf',
      value: ['-', 'header', 'disabled']
    }
  }, {
    name: 'showArrow',
    title: {
      label: i18n("显示折叠图标", "Show fold icon"),
      tip: i18n("是否展示当前面板上的箭头", "Whether to display the arrows on the current panel")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'forceRender',
    title: {
      label: i18n("隐藏时渲染", "Render when hidden"),
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
        parentWhitelist: ['Collapse']
      }
    }
  }
};

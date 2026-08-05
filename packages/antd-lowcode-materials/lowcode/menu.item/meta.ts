import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Menu.Item',
  title: i18n("菜单项", "Menu Item"),
  props: [{
    name: 'children',
    title: {
      label: i18n("内容", "Content"),
      tip: i18n("内容", "Content")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'danger',
    title: {
      label: i18n("错误状态", "ErrorStatus"),
      tip: i18n("展示错误状态样式", "Display error status style")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'disabled',
    title: {
      label: i18n("是否禁用", "Disabled"),
      tip: i18n("是否为禁用状态", "Whether disabled")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'icon',
    title: {
      label: i18n("菜单图标", "Menu icon"),
      tip: i18n("菜单图标", "Menu icon")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    },
    defaultValue: false
  }, {
    name: 'key',
    title: {
      label: i18n("唯一标志", "unique sign"),
      tip: i18n("item 的唯一标志", "unique identifier of item")
    },
    propType: 'string'
  }, {
    name: 'title',
    title: {
      label: i18n("悬浮标题", "Hover Title"),
      tip: i18n("设置收缩时展示的悬浮标题", "Set the floating title displayed when shrinking")
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

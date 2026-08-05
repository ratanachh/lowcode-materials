import { i18n } from "../_utils/i18n";
export default {
  componentName: 'Descriptions.Item',
  title: i18n("描述列表项", "Describe list item"),
  props: [{
    name: 'key',
    title: {
      label: 'key',
      tip: 'key'
    },
    propType: 'string'
  }, {
    name: 'tab',
    title: {
      label: i18n("标题", "Title"),
      tip: i18n("标题", "Title")
    },
    propType: 'string'
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

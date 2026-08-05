import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Steps.Step',
  title: i18n("步骤项", "step item"),
  props: [{
    name: 'title',
    title: {
      label: i18n("标题", "Title"),
      tip: i18n("标题", "Title")
    },
    propType: 'string'
  }, {
    name: 'subTitle',
    title: {
      label: i18n("子标题", "Subtitle"),
      tip: i18n("子标题", "Subtitle")
    },
    propType: 'string'
  }, {
    name: 'description',
    title: {
      label: i18n("步骤描述", "Step description"),
      tip: i18n("步骤描述", "Step description")
    },
    propType: 'string'
  }, {
    name: 'disabled',
    title: {
      label: i18n("是否禁用", "Disabled"),
      tip: i18n("是否为禁用状态", "Whether disabled")
    },
    propType: 'bool'
  }, {
    name: 'icon',
    title: {
      label: i18n("图标", "Icon"),
      tip: i18n("图标", "Icon")
    },
    propType: 'node'
  }, {
    name: 'status',
    title: {
      label: i18n("状态", "Status"),
      tip: i18n("状态", "Status")
    },
    propType: 'string'
  }],
  configure: {
    component: {
      nestingRule: {
        parentWhitelist: ['Steps']
      }
    },
    supports: {
      style: true
    }
  }
};

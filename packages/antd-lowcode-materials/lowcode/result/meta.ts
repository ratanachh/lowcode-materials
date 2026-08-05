import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Result',
  title: i18n("结果", "Result"),
  category: "Feedback",
  props: [{
    name: 'title',
    title: {
      label: i18n("标题", "Title"),
      tip: i18n("title 文字", "title Text")
    },
    propType: 'node'
  }, {
    name: 'subTitle',
    title: {
      label: i18n("副标题", "subtitle"),
      tip: i18n("subTitle 文字", "subTitle Text")
    },
    propType: 'node'
  }, {
    name: 'status',
    title: {
      label: i18n("状态", "Status"),
      tip: i18n("结果的状态，决定图标和颜色", "The status of the result, which determines the icon and color")
    },
    propType: {
      type: 'oneOf',
      value: ['success', 'error', 'info', 'warning', '404', '403', '500']
    }
  }, {
    name: 'icon',
    title: {
      label: i18n("自定义 icon", "Custom icon"),
      tip: i18n("自定义 icon", "Custom icon")
    },
    propType: 'node'
  }, {
    name: 'extra',
    title: {
      label: i18n("操作区", "Actions"),
      tip: i18n("操作区", "Actions")
    },
    propType: 'node'
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

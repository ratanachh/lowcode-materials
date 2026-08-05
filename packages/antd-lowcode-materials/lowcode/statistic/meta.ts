import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Statistic',
  title: i18n("统计数值", "Statistic"),
  category: "Data Display",
  props: [{
    name: 'decimalSeparator',
    title: {
      label: i18n("设置小数点", "Set decimal point"),
      tip: i18n("设置小数点", "Set decimal point")
    },
    propType: 'string'
  }, {
    name: 'formatter',
    title: {
      label: i18n("自定义数值展示", "Custom numerical display"),
      tip: i18n("自定义数值展示", "Custom numerical display")
    },
    propType: 'func'
  }, {
    name: 'groupSeparator',
    title: {
      label: i18n("设置千分位标识符", "Set thousandth identifier"),
      tip: i18n("设置千分位标识符", "Set thousandth identifier")
    },
    propType: 'string'
  }, {
    name: 'precision',
    title: {
      label: i18n("数值精度", "Precision"),
      tip: i18n("数值精度", "Precision")
    },
    propType: 'number'
  }, {
    name: 'prefix',
    title: {
      label: i18n("设置数值的前缀", "Set the prefix of the value"),
      tip: i18n("设置数值的前缀", "Set the prefix of the value")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'suffix',
    title: {
      label: i18n("设置数值的后缀", "Set the suffix of the value"),
      tip: i18n("设置数值的后缀", "Set the suffix of the value")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'title',
    title: {
      label: i18n("数值的标题", "title of value"),
      tip: i18n("数值的标题", "title of value")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'value',
    title: {
      label: i18n("数值内容", "Numeric content"),
      tip: i18n("数值内容", "Numeric content")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'number']
    }
  }, {
    name: 'valueStyle',
    title: {
      label: i18n("设置数值的样式", "Set the style of a numeric value"),
      tip: i18n("设置数值的样式", "Set the style of a numeric value")
    },
    propType: 'object'
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

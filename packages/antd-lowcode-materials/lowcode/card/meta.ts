import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Card',
  title: i18n("卡片", "Card"),
  category: "Data Display",
  props: [{
    name: 'title',
    title: {
      label: i18n("卡片标题", "Card title"),
      tip: i18n("卡片标题", "Card title")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  },
  // {
  //   name: 'actions',
  // title: { label: 'Card operation group', tip: 'Card operation group, located at the bottom of the card' },
  //   propType: { type: 'arrayOf', value: 'node' },
  // },
  // {
  //   name: 'headStyle',
  // title: { label: 'Title area style', tip: 'Customized title area style' },
  //   propType: 'object',
  // },
  // {
  //   name: 'bodyStyle',
  // title: { label: 'Content area style', tip: 'Content area custom style' },
  //   propType: 'object',
  // },
  {
    name: 'bordered',
    title: {
      label: i18n("显示边框", "Show border"),
      tip: i18n("是否有边框", "Whether bordered")
    },
    propType: 'bool',
    defaultValue: true
  }, {
    name: 'cover',
    title: {
      label: i18n("卡片封面", "card cover"),
      tip: i18n("卡片封面", "card cover")
    },
    propType: 'node'
  }, {
    name: 'extra',
    title: {
      label: i18n("额外元素", "Extra"),
      tip: i18n("卡片右上角的操作区域", "The operation area in the upper right corner of the card")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'hoverable',
    title: {
      label: i18n("可浮起", "can float"),
      tip: i18n("鼠标移过时可浮起", "Can float when mouse moves over")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'loading',
    title: {
      label: 'loading',
      tip: i18n("当卡片内容还在加载中时，可以用 loading 展示一个占位", "When the card content is still loading, you can use loading to display a placeholder")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'size',
    title: {
      label: i18n("尺寸", "Size"),
      tip: i18n("card 的尺寸", "Card size")
    },
    propType: {
      type: 'oneOf',
      value: ['default', 'small']
    },
    defaultValue: 'default'
  }, {
    name: 'type',
    title: {
      label: i18n("卡片类型", "CardType"),
      tip: i18n("卡片类型", "CardType")
    },
    propType: {
      type: 'oneOf',
      value: ['default', 'inner']
    },
    defaultValue: 'default'
  }],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      style: true,
      events: [{
        name: 'onTabChange',
        template: "onTabChange(key,${extParams}){\n// Callback for tab switching\nconsole.log('onTabChange', key);}"
      }]
    }
  }
};

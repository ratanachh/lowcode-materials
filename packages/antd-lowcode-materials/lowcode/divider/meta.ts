import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Divider',
  title: i18n("分割线", "Divider"),
  category: "Layout",
  props: [{
    name: 'className',
    title: {
      label: i18n("分割线样式类", "Split line style class"),
      tip: i18n("分割线样式类", "Split line style class")
    },
    propType: 'string'
  }, {
    name: 'dashed',
    title: {
      label: i18n("是否虚线", "Dotted line or not?"),
      tip: i18n("是否虚线", "Dotted line or not?")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'orientation',
    title: {
      label: i18n("标题位置", "TitlePosition"),
      tip: i18n("分割线标题的位置", "DividerTitle Position")
    },
    propType: {
      type: 'oneOf',
      value: ['left', 'right', 'center']
    }
  }, {
    name: 'orientationMargin',
    title: {
      label: i18n("标题边距", "title margin"),
      tip: i18n("标题和最近 left/right 边框之间的距离，去除了分割线，同时 orientation 必须为 left 或 right", "The distance between the title and the nearest left/right border, removing the dividing line, and the orientation must be left or right")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'number']
    }
  }, {
    name: 'style',
    title: {
      label: i18n("分割线样式对象", "Divider style object"),
      tip: i18n("分割线样式对象", "Divider style object")
    },
    propType: 'object'
  }, {
    name: 'type',
    title: {
      label: i18n("方向", "Direction"),
      tip: i18n("水平还是垂直类型", "horizontal or vertical type")
    },
    propType: {
      type: 'oneOf',
      value: ['horizontal', 'vertical']
    }
  }, {
    name: 'plain',
    title: {
      label: i18n("普通正文样式", "Normal text style"),
      tip: i18n("文字是否显示为普通正文样式", "Whether the text is displayed in normal text style")
    },
    propType: 'bool',
    defaultValue: false
  }],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      style: true,
      className: true
    }
  }
};

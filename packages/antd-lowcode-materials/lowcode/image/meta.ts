import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Image',
  title: i18n("图片", "Image"),
  category: "Data Display",
  props: [{
    name: 'src',
    title: {
      label: i18n("图片地址", "Image URL"),
      tip: i18n("图片地址", "Image URL")
    },
    propType: {
      type: 'string',
      isRequired: true
    }
  }, {
    name: 'alt',
    title: {
      label: i18n("替换文本", "replacement text"),
      tip: i18n("替换文本", "replacement text")
    },
    propType: 'string'
  }, {
    name: 'preview',
    title: {
      label: i18n("支持预览", "Support preview"),
      tip: i18n("支持预览", "Support preview")
    },
    defaultValue: true,
    propType: 'bool'
  }, {
    name: 'fallback',
    title: {
      label: i18n("失败地址", "FailedAddress"),
      tip: i18n("加载失败容错地址", "Loading failed fault-tolerant address")
    },
    propType: 'string'
  }, {
    name: 'width',
    title: {
      label: i18n("宽度", "Width"),
      tip: i18n("宽度", "Width")
    },
    propType: 'number'
  }, {
    name: 'height',
    title: {
      label: i18n("高度", "Height"),
      tip: i18n("高度", "Height")
    },
    propType: 'number'
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

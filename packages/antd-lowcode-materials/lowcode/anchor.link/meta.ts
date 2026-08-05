import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Anchor.Link',
  title: i18n("锚点链接", "Anchor link"),
  category: "Other",
  props: [{
    name: 'href',
    title: {
      label: i18n("锚点链接", "Anchor link"),
      tip: i18n("锚点链接", "Anchor link")
    },
    propType: 'string'
  }, {
    name: 'target',
    title: {
      label: 'target',
      tip: i18n("该属性指定在何处显示链接的资源", "This property specifies where to display the linked resource")
    },
    propType: 'string'
  }, {
    name: 'title',
    title: {
      label: i18n("内容", "Content"),
      tip: i18n("内容", "Content")
    },
    propType: 'string'
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

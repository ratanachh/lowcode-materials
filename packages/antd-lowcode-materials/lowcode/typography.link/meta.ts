import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Typography.Link',
  title: i18n("链接", "Link"),
  category: "General",
  props: [{
    name: 'children',
    title: {
      label: i18n("内容", "Content"),
      tip: i18n("内容", "Content")
    },
    propType: 'string',
    defaultValue: '',
    supportVariable: true
  }, {
    name: 'href',
    title: {
      label: i18n("跳转链接", "Jump link"),
      tip: i18n("跳转链接", "Jump link")
    },
    propType: 'string',
    defaultValue: ''
  }, {
    name: 'target',
    title: {
      label: i18n("跳转位置", "Jump location"),
      tip: i18n("在何处显示链接的资源", "Where to display linked resources")
    },
    propType: {
      type: 'oneOf',
      value: ['_self', '_blank', '_parent', '_top']
    },
    defaultValue: '_self'
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

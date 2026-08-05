import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Tag',
  title: i18n("标签", "Tag"),
  category: "Data Display",
  props: [{
    name: 'children',
    title: {
      label: i18n("内容", "Content"),
      tip: i18n("内容", "Content")
    },
    propType: 'string'
  }, {
    name: 'closable',
    title: {
      label: i18n("可关闭", "Can Off"),
      tip: i18n("标签是否可以关闭", "TagYesNoCan Off")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'color',
    title: {
      label: i18n("标签色", "Label color"),
      tip: i18n("标签色", "Label color")
    },
    propType: 'string'
  },
  // {
  //   name: 'closeIcon',
  // title: { label: 'Custom close button', tip: 'Custom close button' },
  //   propType: 'node',
  // },
  {
    name: 'onClose',
    title: {
      label: i18n("关闭时的回调", "Off on callback"),
      tip: i18n("关闭时的回调", "Off on callback")
    },
    propType: 'func'
  },
  // {
  //   name: 'visible',
  // title: { label: 'YesNoShowTag', tip: 'YesNoShowTag' },
  //   propType: 'bool',
  //   defaultValue: true,
  // },
  {
    name: 'icon',
    title: {
      label: i18n("设置图标", "Set Icon"),
      tip: i18n("设置图标", "Set Icon")
    },
    propType: 'node'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onClose',
        template: "onClose(event,${extParams}){\n// Off on callback\nconsole.log('onClose',event);}"
      }]
    }
  }
};

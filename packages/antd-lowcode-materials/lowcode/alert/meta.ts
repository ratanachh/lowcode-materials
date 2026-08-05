import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Alert',
  title: i18n("警告提示", "Alert"),
  category: "Feedback",
  props: [{
    name: 'afterClose',
    title: {
      label: i18n("关闭动画结束后触发的回调函数", "Close the callback function triggered after the animation ends"),
      tip: i18n("关闭动画结束后触发的回调函数", "Close the callback function triggered after the animation ends")
    },
    propType: 'func'
  }, {
    name: 'banner',
    title: {
      label: i18n("顶部公告", "top announcement"),
      tip: i18n("是否用作顶部公告", "Whether to use as top announcement")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'closable',
    title: {
      label: i18n("可关闭", "Can Off"),
      tip: i18n("默认不显示关闭按钮", "DefaultHideOffButton")
    },
    propType: 'bool'
  }, {
    name: 'closeText',
    title: {
      label: i18n("自定义关闭按钮", "Custom close button"),
      tip: i18n("自定义关闭按钮", "Custom close button")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'description',
    title: {
      label: i18n("描述信息", "Description information"),
      tip: i18n("警告提示的辅助性文字介绍", "Auxiliary text introduction of warning prompts")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'icon',
    title: {
      label: i18n("图标", "Icon"),
      tip: i18n("自定义图标，`showIcon` 为 true 时有效", "Custom icon, valid when `showIcon` is true")
    },
    propType: 'node'
  }, {
    name: 'message',
    title: {
      label: i18n("警告提示内容", "AlertContent"),
      tip: i18n("警告提示内容", "AlertContent")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'showIcon',
    title: {
      label: i18n("显示图标", "ShowIcon"),
      tip: i18n("是否显示辅助图标", "Whether to display auxiliary icons")
    },
    propType: 'bool'
  }, {
    name: 'type',
    title: {
      label: i18n("类型", "Type"),
      tip: i18n("类型", "Type")
    },
    propType: {
      type: 'oneOf',
      value: ['success', 'info', 'warning', 'error']
    }
  }, {
    name: 'onClose',
    title: {
      label: i18n("关闭时触发的回调函数", "Off trigger callback"),
      tip: i18n("关闭时触发的回调函数", "Off trigger callback")
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onClose',
        template: "onChange(event,${extParams}){\n// Off trigger callback\nconsole.log('onChange');}"
      }]
    }
  }
};

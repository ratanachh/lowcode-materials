import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Affix',
  title: i18n("固钉", "Affix"),
  category: "Navigation",
  props: [{
    name: 'offsetBottom',
    title: {
      label: i18n("底部触发距离", "Bottom trigger distance"),
      tip: i18n("距离窗口底部达到指定偏移量后触发", "Triggered after reaching the specified offset from the bottom of the window")
    },
    propType: 'number'
  }, {
    name: 'offsetTop',
    title: {
      label: i18n("顶部触发距离", "Top trigger distance"),
      tip: i18n("距离窗口顶部达到指定偏移量后触发", "Triggered after reaching the specified offset from the top of the window")
    },
    propType: 'number'
  }, {
    name: 'target',
    title: {
      label: i18n("获取触发元素", "Get trigger element"),
      tip: i18n("设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数", "Set `Affix` to the element whose scroll event needs to be monitored. The value is a function that returns the corresponding DOM element.")
    },
    propType: 'func'
  }, {
    name: 'onChange',
    title: {
      label: i18n("监听状态改变", "Listen for status changes"),
      tip: i18n("固定状态改变时触发的回调函数", "FixedStatusChange trigger callback")
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(affixed,${extParams}){\n// Fixed state change callback function\nconsole.log('onChange', affixed);}"
      }]
    }
  }
};

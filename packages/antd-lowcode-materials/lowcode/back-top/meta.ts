import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'BackTop',
  title: i18n("回到顶部", "BackTop"),
  category: "Other",
  props: [{
    name: 'target',
    title: {
      label: i18n("监听元素", "Listen element"),
      tip: i18n("设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数", "Set the element whose scroll event needs to be monitored. The value is a function that returns the corresponding DOM element.")
    },
    propType: 'func'
  }, {
    name: 'visibilityHeight',
    title: {
      label: i18n("可见高度", "Visible height"),
      tip: i18n("滚动高度达到此参数值才出现 BackTop", "BackTop will not appear until the scroll height reaches this parameter value.")
    },
    propType: 'number'
  }, {
    name: 'onClick',
    title: {
      label: i18n("点击按钮的回调函数", "Click Button callback"),
      tip: i18n("点击按钮的回调函数", "Click Button callback")
    },
    propType: 'func'
  }, {
    name: 'duration',
    title: {
      label: i18n("滚动时间", "Scroll Time"),
      tip: i18n("回到顶部所需时间（ms）", "Time required to return to top (ms)")
    },
    propType: 'number'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onClick',
        template: "onClick(${extParams}){\n// Click Button callback\nconsole.log('onClick');}"
      }]
    }
  }
};

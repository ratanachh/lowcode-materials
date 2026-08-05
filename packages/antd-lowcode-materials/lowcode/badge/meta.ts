import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Badge',
  title: i18n("徽标数", "Badge"),
  category: "Data Display",
  props: [{
    name: 'color',
    title: {
      label: i18n("圆点颜色", "dot color"),
      tip: i18n("自定义小圆点的颜色", "Customize the color of the dots")
    },
    propType: 'string'
  }, {
    name: 'count',
    title: {
      label: i18n("展示数字", "show numbers"),
      tip: i18n("展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏", "The displayed number is displayed as `${overflowCount}+` when it is greater than overflowCount, and hidden when it is 0.")
    },
    propType: 'node'
  }, {
    name: 'dot',
    title: {
      label: i18n("展示圆点", "Show dots"),
      tip: i18n("不展示数字，只有一个小红点", "No numbers are displayed, only a small red dot")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'offset',
    title: {
      label: i18n("圆点偏移", "dot offset"),
      tip: i18n("设置状态点的位置偏移 [number, number]", "Set the position offset of the status point [number, number]")
    },
    propType: {
      type: 'arrayOf',
      value: 'number'
    }
  }, {
    name: 'overflowCount',
    title: {
      label: i18n("封顶值", "cap value"),
      tip: i18n("展示封顶的数字值", "Display the capped numeric value")
    },
    propType: 'number'
  }, {
    name: 'showZero',
    title: {
      label: i18n("展示零值", "Show zero value"),
      tip: i18n("当数值为 0 时，是否展示 Badge", "When the value is 0, whether to display Badge")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'status',
    title: {
      label: i18n("状态", "Status"),
      tip: i18n("设置 Badge 为状态点", "Set Badge as status point")
    },
    propType: {
      type: 'oneOf',
      value: ['success', 'processing', 'default', 'error', 'warning']
    }
  }, {
    name: 'text',
    title: {
      label: i18n("状态文本", "StatusText"),
      tip: i18n("在设置了 `status` 的前提下有效，设置状态点的文本", "Valid if `status` is set, sets the text of the status point")
    },
    condition(target) {
      return !!target.getProps().getPropValue('status');
    },
    propType: 'string'
  }, {
    name: 'title',
    title: {
      label: i18n("悬浮提示", "Hover Tip"),
      tip: i18n("设置鼠标放在状态点上时显示的文字", "Set the text displayed when the mouse is placed on the status point")
    },
    propType: 'string'
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

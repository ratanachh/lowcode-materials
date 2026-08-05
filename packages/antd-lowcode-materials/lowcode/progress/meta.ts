import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Progress',
  title: i18n("进度条", "Progress"),
  category: "Feedback",
  props: [{
    name: 'type',
    title: {
      label: i18n("类型", "Type"),
      tip: i18n("类型", "Type")
    },
    propType: {
      type: 'oneOf',
      value: ['line', 'circle', 'dashboard']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: i18n("线型", "linear"),
          value: 'line'
        }, {
          title: i18n("圆型", "Round type"),
          value: 'circle'
        }, {
          title: i18n("仪表盘", "Dashboard"),
          value: 'dashboard'
        }]
      }
    },
    defaultValue: 'line'
  }, {
    name: 'format',
    title: {
      label: i18n("内容格式", "ContentFormat"),
      tip: i18n("内容格式", "ContentFormat")
    },
    propType: 'func'
  }, {
    name: 'percent',
    title: {
      label: i18n("百分比", "percentage"),
      tip: i18n("百分比", "percentage")
    },
    propType: 'number'
  }, {
    name: 'showInfo',
    title: {
      label: i18n("显示数值或图标", "Display values ​​or icons"),
      tip: i18n("显示数值或图标", "Display values ​​or icons")
    },
    propType: 'bool',
    defaultValue: true
  }, {
    name: 'status',
    title: {
      label: i18n("状态", "Status"),
      tip: i18n("状态", "Status")
    },
    propType: {
      type: 'oneOf',
      value: ['success', 'exception', 'normal', 'active']
    }
  }, {
    name: 'steps',
    title: {
      label: i18n("总步数", "Total steps"),
      tip: i18n("进度条总共步数", "The total number of steps in the progress bar")
    },
    condition(target) {
      // Only valid for line type
      return target.getProps().getPropValue('type') === 'line';
    },
    propType: 'number'
  }, {
    name: 'strokeLinecap',
    title: {
      label: i18n("进度条的样式", "Progress style"),
      tip: i18n("进度条的样式", "Progress style")
    },
    propType: {
      type: 'oneOf',
      value: ['round', 'square']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: i18n("圆角", "Round"),
          value: 'round'
        }, {
          title: i18n("方角", "square corner"),
          value: 'square'
        }]
      }
    },
    defaultValue: 'round'
  }, {
    name: 'strokeWidth',
    title: {
      label: i18n("线宽度", "line width"),
      tip: i18n("线宽度", "line width")
    },
    propType: 'number'
  }, {
    name: 'strokeColor',
    title: {
      label: i18n("进度条的颜色", "Progress Color"),
      tip: i18n("进度条的颜色", "Progress Color")
    },
    propType: 'string',
    condition(target) {
      // Dashboard style is ineffective
      return target.getProps().getPropValue('type') !== 'dashboard';
    },
    setter: 'ColorSetter'
  }, {
    name: 'trailColor',
    title: {
      label: i18n("未完成的分段的颜色", "The color of unfinished segments"),
      tip: i18n("未完成的分段的颜色", "The color of unfinished segments")
    },
    propType: 'string',
    setter: 'ColorSetter'
  }, {
    name: 'gapDegree',
    title: {
      label: i18n("缺口角度", "Notch angle"),
      tip: i18n("仪表盘进度条缺口角度，可取值 0 ~ 295", "The notch angle of the dashboard progress bar, which can range from 0 to 295")
    },
    condition(target) {
      // Only the dashboard style is valid
      return target.getProps().getPropValue('type') === 'dashboard';
    },
    propType: 'number',
    defaultValue: 75
  }, {
    name: 'gapPosition',
    title: {
      label: i18n("缺口位置", "Notch position"),
      tip: i18n("仪表盘进度条缺口位置", "Dashboard progress bar notch position")
    },
    condition(target) {
      // Only the dashboard style is valid
      return target.getProps().getPropValue('type') === 'dashboard';
    },
    propType: {
      type: 'oneOf',
      value: ['top', 'bottom', 'left', 'right']
    },
    defaultValue: 'bottom'
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

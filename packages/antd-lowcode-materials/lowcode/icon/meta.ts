import snippets from './snippets';
import { AntdIconSetter } from '../_setters';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Icon',
  title: i18n("图标", "Icon"),
  category: "General",
  props: [{
    name: 'className',
    title: {
      label: i18n("设置图标的样式名", "Set Icon styleName"),
      tip: i18n("设置图标的样式名", "Set Icon styleName")
    },
    propType: 'string'
  }, {
    name: 'style',
    title: {
      label: i18n("设置图标的样式，例如 `fontSize` 和 `color`", "Set Icon style， e.g. `fontSize` and `color`"),
      tip: i18n("设置图标的样式，例如 `fontSize` 和 `color`", "Set Icon style， e.g. `fontSize` and `color`")
    },
    propType: 'object'
  }, {
    name: 'type',
    description: "Icon",
    propType: 'string',
    setter: AntdIconSetter
  }, {
    name: 'size',
    description: "Size",
    propType: 'number',
    defaultValue: 20
  }, {
    name: 'color',
    description: "Color",
    propType: 'string',
    setter: 'ColorSetter'
  }, {
    name: 'rotate',
    title: {
      label: i18n("旋转角度", "rotation angle"),
      tip: i18n("图标旋转角度", "Icon rotation angle")
    },
    propType: 'number',
    defaultValue: 0
  }, {
    name: 'spin',
    title: {
      label: i18n("旋转动画", "Rotation animation"),
      tip: i18n("是否有旋转动画", "Is there a rotation animation?")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'onClick',
    title: {
      label: i18n("点击回调", "Click callback"),
      tip: i18n("点击按钮时的回调", "Click Button on callback")
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Spin',
  title: i18n("加载中", "Loading"),
  category: "Feedback",
  props: [{
    name: 'delay',
    title: {
      label: i18n("延迟显示", "delayed display"),
      tip: i18n("延迟显示加载效果的时间（防止闪烁）", "Delay the time to display loading effects (to prevent flickering)")
    },
    propType: 'number'
  }, {
    name: 'indicator',
    title: {
      label: i18n("加载指示符", "loading indicator"),
      tip: i18n("加载指示符", "loading indicator")
    },
    propType: 'node'
  }, {
    name: 'size',
    title: {
      label: i18n("尺寸", "Size"),
      tip: i18n("组件大小", "ComponentSize")
    },
    propType: {
      type: 'oneOf',
      value: ['small', 'default', 'large']
    },
    defaultValue: 'default'
  }, {
    name: 'spinning',
    title: {
      label: i18n("加载状态", "LoadingStatus"),
      tip: i18n("是否为加载中状态", "YesNo LoadingStatus")
    },
    propType: 'bool',
    defaultValue: true
  }, {
    name: 'tip',
    title: {
      label: i18n("描述文案", "description copy"),
      tip: i18n("当作为包裹元素时，可以自定义描述文案", "When used as a package element, you can customize the description copy")
    },
    propType: 'string'
  }, {
    name: 'wrapperClassName',
    title: {
      label: i18n("包装器的类属性", "class attribute of wrapper"),
      tip: i18n("包装器的类属性", "class attribute of wrapper")
    },
    propType: 'string'
  }],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      style: true
    }
  }
};

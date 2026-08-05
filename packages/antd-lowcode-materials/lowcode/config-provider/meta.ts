import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'ConfigProvider',
  title: i18n("全局化配置", "ConfigProvider"),
  category: "Other",
  props: [{
    name: 'autoInsertSpaceInButton',
    title: {
      label: i18n("按钮插入空格", "Button inserts spaces"),
      tip: i18n("自动在按钮中 2 个汉字之间插入空格", "Automatically insert a space between 2 Chinese characters in the button")
    },
    propType: 'bool',
    defaultValue: true
  }, {
    name: 'componentSize',
    title: {
      label: i18n("组件大小", "ComponentSize"),
      tip: i18n("设置 antd 组件大小", "Set antd ComponentSize")
    },
    propType: {
      type: 'oneOf',
      value: ['small', 'middle', 'large']
    },
    default: 'middle'
  }, {
    name: 'csp',
    title: {
      label: i18n("CSP配置", "CSP config"),
      tip: i18n("设置Content Security Policy配置", "Set Content Security Policy config")
    },
    propType: 'object',
    setter: 'JsonSetter'
  }, {
    name: 'form',
    title: {
      label: i18n("Form通用属性", "Form common props"),
      tip: i18n("设置 Form 组件的通用属性", "Set Form Component General prop")
    },
    propType: 'object',
    setter: 'JsonSetter'
  }, {
    name: 'input',
    title: {
      label: i18n("Input通用属性", "Input common props"),
      tip: i18n("设置 Input 组件的通用属性", "Set Input Component General prop")
    },
    propType: 'object',
    setter: 'JsonSetter'
  },
  // {
  //   name: 'renderEmpty',
  // title: { label: 'CustomComponentEmpty', tip: 'CustomComponentEmpty' },
  //   propType: 'func',
  // },
  {
    name: 'getPopupContainer',
    title: {
      label: i18n("弹出框父节点", "Pop-up box parent node"),
      tip: i18n("弹出框渲染父节点，默认渲染到 body 上。", "The popup box renders the parent node, which is rendered to the body by default.")
    },
    propType: 'func'
  }, {
    name: 'getTargetContainer',
    title: {
      label: i18n("滚动监听容器", "Scroll listening container"),
      tip: i18n("配置 Affix、Anchor 滚动监听容器。", "Configure Affix and Anchor scrolling listening containers.")
    },
    propType: 'func'
  }, {
    name: 'locale',
    title: {
      label: i18n("语言", "Locale"),
      tip: i18n("语言", "Locale")
    },
    propType: {
      type: 'oneOf',
      value: ['zh-CN', 'en-US']
    },
    defaultValue: 'en-US'
  }, {
    name: 'prefixCls',
    title: {
      label: i18n("样式前缀", "stylePrefix"),
      tip: i18n("设置统一样式前缀。`注意：这将不会应用由 antd 提供的默认样式`", "Set a unified style prefix. `Note: This will not apply the default styles provided by antd`")
    },
    propType: 'string'
  }, {
    name: 'pageHeader',
    title: {
      label: i18n("统一设置 PageHeader 的 ghost", "Unified setting of PageHeader ghost"),
      tip: i18n("统一设置 PageHeader 的 ghost", "Unified setting of PageHeader ghost")
    },
    propType: 'object',
    setter: 'JsonSetter'
  }, {
    name: 'direction',
    title: {
      label: i18n("文本方向", "TextDirection"),
      tip: i18n("设置文本展示方向", "Set text display direction")
    },
    propType: {
      type: 'oneOf',
      value: ['ltr', 'rtl']
    }
  }, {
    name: 'space',
    title: {
      label: i18n("设置 Space 的 尺寸", "Set Space Size"),
      tip: i18n("设置 Space 的 `size`", "Set Space `size`")
    },
    propType: {
      type: 'oneOf',
      value: ['small', 'middle', 'large', 'number']
    }
  }, {
    name: 'virtual',
    title: {
      label: i18n("虚拟滚动", "Virtual scroll"),
      tip: i18n("设置 `false` 时关闭虚拟滚动", "Turn off virtual scrolling when setting `false`")
    },
    propType: 'bool',
    defaultValue: true
  }, {
    name: 'dropdownMatchSelectWidth',
    title: {
      label: i18n("下拉菜单和选择器同宽", "Dropdown match select width"),
      tip: i18n("下拉菜单和选择器同宽", "Dropdown match select width")
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'number']
    }
  }],
  configure: {
    component: {
      isContainer: true
    }
  }
};

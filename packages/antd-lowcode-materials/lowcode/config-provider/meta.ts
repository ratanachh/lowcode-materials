import snippets from './snippets';
export default {
  snippets,
  componentName: 'ConfigProvider',
  title: "ConfigProvider",
  category: "Other",
  props: [{
    name: 'autoInsertSpaceInButton',
    title: {
      label: "Button inserts spaces",
      tip: "Automatically insert a space between 2 Chinese characters in the button"
    },
    propType: 'bool',
    defaultValue: true
  }, {
    name: 'componentSize',
    title: {
      label: "ComponentSize",
      tip: "Set antd ComponentSize"
    },
    propType: {
      type: 'oneOf',
      value: ['small', 'middle', 'large']
    },
    default: 'middle'
  }, {
    name: 'csp',
    title: {
      label: "CSP config",
      tip: "Set Content Security Policy config"
    },
    propType: 'object',
    setter: 'JsonSetter'
  }, {
    name: 'form',
    title: {
      label: "Form common props",
      tip: "Set Form Component General prop"
    },
    propType: 'object',
    setter: 'JsonSetter'
  }, {
    name: 'input',
    title: {
      label: "Input common props",
      tip: "Set Input Component General prop"
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
      label: "Pop-up box parent node",
      tip: "The popup box renders the parent node, which is rendered to the body by default."
    },
    propType: 'func'
  }, {
    name: 'getTargetContainer',
    title: {
      label: "Scroll listening container",
      tip: "Configure Affix and Anchor scrolling listening containers."
    },
    propType: 'func'
  }, {
    name: 'locale',
    title: {
      label: "Locale",
      tip: "Locale"
    },
    propType: {
      type: 'oneOf',
      value: ['zh-CN', 'en-US']
    },
    defaultValue: 'en-US'
  }, {
    name: 'prefixCls',
    title: {
      label: "stylePrefix",
      tip: "Set a unified style prefix. `Note: This will not apply the default styles provided by antd`"
    },
    propType: 'string'
  }, {
    name: 'pageHeader',
    title: {
      label: "Unified setting of PageHeader ghost",
      tip: "Unified setting of PageHeader ghost"
    },
    propType: 'object',
    setter: 'JsonSetter'
  }, {
    name: 'direction',
    title: {
      label: "TextDirection",
      tip: "Set text display direction"
    },
    propType: {
      type: 'oneOf',
      value: ['ltr', 'rtl']
    }
  }, {
    name: 'space',
    title: {
      label: "Set Space Size",
      tip: "Set Space `size`"
    },
    propType: {
      type: 'oneOf',
      value: ['small', 'middle', 'large', 'number']
    }
  }, {
    name: 'virtual',
    title: {
      label: "Virtual scroll",
      tip: "Turn off virtual scrolling when setting `false`"
    },
    propType: 'bool',
    defaultValue: true
  }, {
    name: 'dropdownMatchSelectWidth',
    title: {
      label: "Dropdown match select width",
      tip: "Dropdown match select width"
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

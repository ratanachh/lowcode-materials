import snippets from './snippets';
export default {
  snippets,
  componentName: 'Mentions',
  title: "Mentions",
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: "Default value",
      tip: "Default value"
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'autoFocus',
    title: {
      label: "Auto focus",
      tip: "Auto focus"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'filterOption',
    title: {
      label: "Custom filtering logic",
      tip: "Custom filtering logic"
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'func']
    }
  }, {
    name: 'notFoundContent',
    title: {
      label: "Null value display",
      tip: "What is displayed when the drop-down list is empty"
    },
    propType: 'node'
  }, {
    name: 'placement',
    title: {
      label: "Pop-up placement",
      tip: "Pop-up placement"
    },
    propType: {
      type: 'oneOf',
      value: ['top', 'bottom']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: "Top",
          value: 'top'
        }, {
          title: "Bottom",
          value: 'bottom'
        }]
      }
    }
  }, {
    name: 'prefix',
    title: {
      label: "Set trigger keywords",
      tip: "Set trigger keywords"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', {
        type: 'arrayOf',
        value: 'string'
      }]
    }
  }, {
    name: 'split',
    title: {
      label: "Set the separator before and after the selected item",
      tip: "Set the separator before and after the selected item"
    },
    propType: 'string'
  }, {
    name: 'validateSearch',
    title: {
      label: "Custom trigger verification logic",
      tip: "Custom trigger verification logic"
    },
    propType: 'func'
  },
  // {
  //   name: 'value',
  // title: { label: 'Set Value', tip: 'Set Value' },
  //   propType: 'string',
  // },
  {
    name: 'onChange',
    title: {
      label: "ValueChange trigger",
      tip: "ValueChange trigger"
    },
    propType: 'func'
  }, {
    name: 'onSelect',
    title: {
      label: "Select Option trigger",
      tip: "Select Option trigger"
    },
    propType: 'func'
  }, {
    name: 'onSearch',
    title: {
      label: "Search trigger",
      tip: "Search trigger"
    },
    propType: 'func'
  }, {
    name: 'onFocus',
    title: {
      label: "Triggered when focus is obtained",
      tip: "Triggered when focus is obtained"
    },
    propType: 'func'
  }, {
    name: 'onBlur',
    title: {
      label: "On blurTrigger",
      tip: "On blurTrigger"
    },
    propType: 'func'
  },
  // {
  //   name: 'getPopupContainer',
  //   title: {
  // label: 'Specify the HTML node mounted by the suggestion box',
  // tip: 'Specify the HTML node to mount the suggestion box',
  //   },
  //   propType: 'func',
  // },
  {
    name: 'autoSize',
    title: {
      label: "ContentHeight",
      tip: "Adaptive content height, can be set to true | false or object: { minRows: 2, maxRows: 6 }"
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'object']
    }
  }, {
    name: 'onResize',
    title: {
      label: "Resize callback",
      tip: "Resize callback"
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(text,${extParams}){\n// ValueChange trigger\nconsole.log('onChange',text);}"
      }, {
        name: 'onSelect',
        template: "onSelect(option,prefix,${extParams}){\n// Select Option trigger\nconsole.log('onSelect',option,prefix);}"
      }, {
        name: 'onSearch',
        template: "onSearch(text,prefix,${extParams}){\n// Search trigger\nconsole.log('onSearch',text,prefix);}"
      }, {
        name: 'onFocus',
        template: "onFocus(${extParams}){\n// Triggered when focus is obtained\nconsole.log('onFocus');}"
      }, {
        name: 'onBlur',
        template: "onBlur(${extParams}){\n// On blurTrigger\nconsole.log('onBlur');}"
      }, {
        name: 'onResize',
        template: "onResize({width,height},${extParams}){\n// resize callback\nconsole.log('onResize',width,height);}"
      }]
    }
  }
};

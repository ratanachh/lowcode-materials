import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Mentions',
  title: i18n("提及", "Mentions"),
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: i18n("默认值", "Default value"),
      tip: i18n("默认值", "Default value")
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'autoFocus',
    title: {
      label: i18n("自动聚焦", "Auto focus"),
      tip: i18n("自动获得焦点", "Auto focus")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'filterOption',
    title: {
      label: i18n("自定义过滤逻辑", "Custom filtering logic"),
      tip: i18n("自定义过滤逻辑", "Custom filtering logic")
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'func']
    }
  }, {
    name: 'notFoundContent',
    title: {
      label: i18n("空值展示", "Null value display"),
      tip: i18n("当下拉列表为空时显示的内容", "What is displayed when the drop-down list is empty")
    },
    propType: 'node'
  }, {
    name: 'placement',
    title: {
      label: i18n("弹出层展示位置", "Pop-up placement"),
      tip: i18n("弹出层展示位置", "Pop-up placement")
    },
    propType: {
      type: 'oneOf',
      value: ['top', 'bottom']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: i18n("上", "Top"),
          value: 'top'
        }, {
          title: i18n("下", "Bottom"),
          value: 'bottom'
        }]
      }
    }
  }, {
    name: 'prefix',
    title: {
      label: i18n("设置触发关键字", "Set trigger keywords"),
      tip: i18n("设置触发关键字", "Set trigger keywords")
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
      label: i18n("设置选中项前后分隔符", "Set the separator before and after the selected item"),
      tip: i18n("设置选中项前后分隔符", "Set the separator before and after the selected item")
    },
    propType: 'string'
  }, {
    name: 'validateSearch',
    title: {
      label: i18n("自定义触发验证逻辑", "Custom trigger verification logic"),
      tip: i18n("自定义触发验证逻辑", "Custom trigger verification logic")
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
      label: i18n("值改变时触发", "ValueChange trigger"),
      tip: i18n("值改变时触发", "ValueChange trigger")
    },
    propType: 'func'
  }, {
    name: 'onSelect',
    title: {
      label: i18n("选择选项时触发", "Select Option trigger"),
      tip: i18n("选择选项时触发", "Select Option trigger")
    },
    propType: 'func'
  }, {
    name: 'onSearch',
    title: {
      label: i18n("搜索时触发", "Search trigger"),
      tip: i18n("搜索时触发", "Search trigger")
    },
    propType: 'func'
  }, {
    name: 'onFocus',
    title: {
      label: i18n("获得焦点时触发", "Triggered when focus is obtained"),
      tip: i18n("获得焦点时触发", "Triggered when focus is obtained")
    },
    propType: 'func'
  }, {
    name: 'onBlur',
    title: {
      label: i18n("失去焦点时触发", "On blurTrigger"),
      tip: i18n("失去焦点时触发", "On blurTrigger")
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
      label: i18n("内容高度", "ContentHeight"),
      tip: i18n("自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }", "Adaptive content height, can be set to true | false or object: { minRows: 2, maxRows: 6 }")
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'object']
    }
  }, {
    name: 'onResize',
    title: {
      label: i18n("resize 回调", "Resize callback"),
      tip: i18n("resize 回调", "Resize callback")
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

import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Checkbox',
  title: i18n("多选框", "checkbox"),
  category: "Data Entry",
  props: [{
    name: 'children',
    title: {
      label: i18n("内容", "Content"),
      tip: i18n("内容", "Content")
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'autoFocus',
    title: {
      label: i18n("自动聚焦", "Auto focus"),
      tip: i18n("自动获取焦点", "Auto focus")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'checked',
    title: {
      label: i18n("当前值", "Current value"),
      tip: i18n("指定当前是否选中", "Specify whether it is currently selected")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'defaultChecked',
    title: {
      label: i18n("默认值", "Default value"),
      tip: i18n("初始是否选中", "Is it initially selected?")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'disabled',
    title: {
      label: i18n("是否禁用", "Disabled"),
      tip: i18n("是否为禁用状态", "Whether disabled")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'indeterminate',
    title: {
      label: i18n("不确定状态", "Not OKStatus"),
      tip: i18n("indeterminate状态", "indeterminateStatus")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'onChange',
    title: {
      label: i18n("变化时回调函数", "Callback on change"),
      tip: i18n("变化时回调函数", "Callback on change")
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(event,${extParams}){\n// Callback on change\nconsole.log('onChange', event);}"
      }]
    }
  }
};

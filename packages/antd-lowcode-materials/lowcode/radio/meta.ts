import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Radio',
  title: i18n("单选框", "Radio"),
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
    name: 'defaultChecked',
    title: {
      label: i18n("默认选中", "Selected by default"),
      tip: i18n("初始是否选中", "Is it initially selected?")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'checked',
    title: {
      label: i18n("是否选中", "Check or not"),
      tip: i18n("指定当前是否选中", "Specify whether it is currently selected")
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
  }
  // {
  //   name: 'value',
  //   title: {
  // label: 'Judge based on value',
  // tip: 'Compare based on value to determine whether it is selected',
  //   },
  //   propType: 'string',
  // },
  ],
  configure: {
    supports: {
      style: true
    }
  }
};

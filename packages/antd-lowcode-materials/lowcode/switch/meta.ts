import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Switch',
  title: i18n("开关", "Switch"),
  category: "Data Entry",
  props: [{
    name: 'defaultChecked',
    title: {
      label: i18n("默认选中", "Selected by default"),
      tip: i18n("默认是否选中", "Is it selected by default?")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'checked',
    title: {
      label: i18n("是否选中", "Check or not"),
      tip: i18n("当前是否选中", "Is it currently selected?")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'autoFocus',
    title: {
      label: i18n("自动聚焦", "Auto focus"),
      tip: i18n("组件自动获取焦点", "ComponentAuto focus")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'checkedChildren',
    title: {
      label: i18n("选中时内容", "Content when selected"),
      tip: i18n("选中时的内容", "Content when selected")
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'unCheckedChildren',
    title: {
      label: i18n("非选中时内容", "Content when unselected"),
      tip: i18n("非选中时的内容", "Content when unselected")
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'disabled',
    title: {
      label: i18n("是否禁用", "Disabled"),
      tip: i18n("是否为禁用状态", "Whether disabled")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'loading',
    title: {
      label: i18n("加载中", "Loading"),
      tip: i18n("加载中", "Loading")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'size',
    title: {
      label: i18n("尺寸", "Size"),
      tip: i18n("开关大小", "SwitchSize")
    },
    propType: {
      type: 'oneOf',
      value: ['default', 'small']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: i18n("默认", "Default"),
          value: 'default'
        }, {
          title: i18n("小", "Small"),
          value: 'small'
        }]
      }
    },
    defaultValue: 'default'
  }, {
    name: 'onChange',
    title: {
      label: i18n("变化时回调函数", "Callback on change"),
      tip: i18n("变化时回调函数", "Callback on change")
    },
    propType: 'func'
  }, {
    name: 'onClick',
    title: {
      label: i18n("点击时回调函数", "callback function when clicked"),
      tip: i18n("点击时回调函数", "callback function when clicked")
    },
    propType: 'func'
  }
  // {
  //   name: 'className',
  // title: { label: 'className', tip: 'className' },
  //   propType: 'string',
  // },
  ],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(checked,event,${extParams}){\n// Callback on change\nconsole.log('onChange',checked,event);}"
      }, {
        name: 'onClick',
        template: "onClick(checked,event,${extParams}){\n// Callback function when clicked\nconsole.log('onClick',checked,event);}"
      }]
    }
  }
};

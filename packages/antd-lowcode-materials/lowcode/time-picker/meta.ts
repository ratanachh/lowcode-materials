import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'TimePicker',
  title: i18n("时间选择框", "TimePicker"),
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: i18n("默认时间", "DefaultTime"),
      tip: i18n("默认时间", "DefaultTime")
    },
    propType: 'date',
    setter: 'DateSetter'
  }, {
    name: 'value',
    title: {
      label: i18n("当前时间", "Current Time"),
      tip: i18n("当前时间", "Current Time")
    },
    propType: 'date',
    setter: 'DateSetter'
  }, {
    name: 'allowClear',
    title: {
      label: i18n("支持清除", "Allow clear"),
      tip: i18n("是否允许清除", "Whether allow clear")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'autoFocus',
    title: {
      label: i18n("自动聚焦", "Auto focus"),
      tip: i18n("自动获取焦点", "Auto focus")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'bordered',
    title: {
      label: i18n("显示边框", "Show border"),
      tip: i18n("是否有边框", "Whether bordered")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'className',
    title: {
      label: i18n("选择器类名", "SelectclassName"),
      tip: i18n("选择器类名", "SelectclassName")
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'clearText',
    title: {
      label: i18n("清除按钮的提示文案", "Clear button text"),
      tip: i18n("清除按钮的提示文案", "Clear button text")
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
    name: 'disabledHours',
    title: {
      label: i18n("禁止选择部分小时选项", "Disable selection of partial hours option"),
      tip: i18n("禁止选择部分小时选项", "Disable selection of partial hours option")
    },
    propType: 'func'
  }, {
    name: 'disabledMinutes',
    title: {
      label: i18n("禁止选择部分分钟选项", "Disable selection of partial minute options"),
      tip: i18n("禁止选择部分分钟选项", "Disable selection of partial minute options")
    },
    propType: 'func'
  }, {
    name: 'disabledSeconds',
    title: {
      label: i18n("禁止选择部分秒选项", "Disable selection of partial seconds option"),
      tip: i18n("禁止选择部分秒选项", "Disable selection of partial seconds option")
    },
    propType: 'func'
  }, {
    name: 'format',
    title: {
      label: i18n("展示的时间格式", "Display time format"),
      tip: i18n("展示的时间格式", "Display time format")
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'getPopupContainer',
    title: {
      label: i18n("定义浮层的容器", "Define the container for the floating layer"),
      tip: i18n("定义浮层的容器，默认为 body 上新建 div", "Overlay container; defaults to a new div on body")
    },
    propType: 'func'
  }, {
    name: 'hideDisabledOptions',
    title: {
      label: i18n("隐藏禁止选择的选项", "Hide disabled options"),
      tip: i18n("隐藏禁止选择的选项", "Hide disabled options")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'hourStep',
    title: {
      label: i18n("小时选项间隔", "hour option interval"),
      tip: i18n("小时选项间隔", "hour option interval")
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'inputReadOnly',
    title: {
      label: i18n("只读", "read only"),
      tip: i18n("设置输入框为只读（避免在移动设备上打开虚拟键盘）", "Set the input box to be read-only (avoid opening the virtual keyboard on mobile devices)")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'minuteStep',
    title: {
      label: i18n("分钟选项间隔", "Minute option interval"),
      tip: i18n("分钟选项间隔", "Minute option interval")
    },
    propType: 'number',
    setter: 'NumberSetter'
  },
  // {
  //   name: 'open',
  // title: { label: 'PanelYesNoOpen ', tip: 'PanelYesNoOpen ' },
  //   propType: 'bool',
  //   // defaultValue: false,
  //   setter: 'BoolSetter'
  // },
  {
    name: 'placeholder',
    title: {
      label: i18n("空值提示", "EmptyValueTip"),
      tip: i18n("没有值的时候显示的内容", "Content displayed when there is no value")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', {
        type: 'arrayOf',
        value: 'string'
      }]
    }
  }, {
    name: 'popupClassName',
    title: {
      label: i18n("弹出层类名", "Popup layer class name"),
      tip: i18n("弹出层类名", "Popup layer class name")
    },
    propType: 'string',
    setter: 'StringSetter'
  },
  // {
  //   name: 'popupStyle',
  // title: { label: 'Pop-up layer style object', tip: 'Pop-up layer style object' },
  //   propType: 'object',
  // },
  {
    name: 'secondStep',
    title: {
      label: i18n("秒选项间隔", "seconds option interval"),
      tip: i18n("秒选项间隔", "seconds option interval")
    },
    propType: 'number',
    setter: 'NumberSetter'
  },
  // {
  //   name: 'suffixIcon',
  // title: { label: 'Custom select suffix icon', tip: 'Custom select suffix icon' },
  //   propType: 'node',
  // },
  // {
  //   name: 'clearIcon',
  // title: { label: 'Custom Clear Icon', tip: 'Custom Clear Icon' },
  //   propType: 'node',
  // },
  // {
  //   name: 'renderExtraFooter',
  //   title: {
  // label: 'Display customized content at the bottom of the selection box',
  // tip: 'Display customized content at the bottom of the selection box',
  //   },
  //   propType: 'func',
  // },
  {
    name: 'use12Hours',
    title: {
      label: i18n("12小时制", "12-hour"),
      tip: i18n("使用 12 小时制，为 true 时 `format` 默认为 `h:mm:ss a`", "Use 12-hour clock, when true `format` defaults to `h:mm:ss a`")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'onChange',
    title: {
      label: i18n("时间发生变化的回调", "callback when time changes"),
      tip: i18n("时间发生变化的回调", "callback when time changes")
    },
    propType: 'func'
  }, {
    name: 'onOpenChange',
    title: {
      label: i18n("面板打开/关闭时的回调", "PanelOpen /Off on callback"),
      tip: i18n("面板打开/关闭时的回调", "PanelOpen /Off on callback")
    },
    propType: 'func'
  }, {
    name: 'showNow',
    title: {
      label: i18n("“此刻”按钮", "\"Now\" button"),
      tip: i18n("面板是否显示“此刻”按钮", "Whether the panel displays the \"Now\" button")
    },
    propType: 'bool',
    setter: 'BoolSetter'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(time,timeString,${extParams}){\n// Callback when time changes\nconsole.log('onChange',time,timeString);}"
      }, {
        name: 'onOpenChange',
        template: "onOpenChange(open,${extParams}){\n// PanelOpen/Off on callback\nconsole.log('onOpenChange',open);}"
      }]
    }
  }
};

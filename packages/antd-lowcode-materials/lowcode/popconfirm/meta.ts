import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Popconfirm',
  title: i18n("气泡确认框", "Popconfirm"),
  category: "Feedback",
  props: [{
    name: 'title',
    title: {
      label: i18n("确认框内容", "Confirmation box content"),
      tip: i18n("确认框内容", "Confirmation box content")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node', 'func']
    }
  }, {
    name: 'okText',
    title: {
      label: i18n("确认按钮文字", "OK text"),
      tip: i18n("确认按钮文字", "OK text")
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'cancelText',
    title: {
      label: i18n("取消按钮文字", "Cancel text"),
      tip: i18n("取消按钮文字", "Cancel text")
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'onConfirm',
    title: {
      label: i18n("点击确认回调", "Click OKcallback"),
      tip: i18n("点击确认回调", "Click OKcallback")
    },
    propType: 'func'
  }
  // {
  //   name: 'okType',
  // title: { label: 'OK button type', tip: 'OK button type' },
  //   propType: {
  //     type: 'oneOf',
  //     value: ['primary', 'ghost', 'dashed', 'danger', 'link', 'text'],
  //   },
  //   setter: {
  //     componentName: 'SelectSetter',
  //     props: {
  //       options: [
  //         {
  // title: 'Primary button',
  //           value: 'primary',
  //         },
  //         {
  // title: 'Dotted box button',
  //           value: 'dashed',
  //         },
  //         {
  // title: 'Danger button',
  //           value: 'danger',
  //         },
  //         {
  // title: 'Link button',
  //           value: 'link',
  //         },
  //         {
  // title: 'Text-like button',
  //           value: 'text',
  //         },
  //       ],
  //     },
  //   },
  // },
  // {
  //   name: 'okButtonProps',
  // title: { label: 'okButtonprops', tip: 'okButtonprops' },
  //   propType: 'object',
  // },
  // {
  //   name: 'cancelButtonProps',
  // title: { label: 'Cancel button props', tip: 'Cancel button props' },
  //   propType: 'object',
  // },
  // {
  //   name: 'onCancel',
  // title: { label: 'Click Cancelcallback', tip: 'Click Cancelcallback' },
  //   propType: 'func',
  // },
  // {
  //   name: 'icon',
  // title: { label: 'Customized Icon', tip: 'Customized pop-up bubble Icon' },
  //   propType: 'node',
  // },
  // {
  //   name: 'disabled',
  //   title: {
  // label: 'Disabled',
  // tip: 'Whether disabled',
  //   },
  //   propType: 'bool',
  //   defaultValue: false,
  // },
  ],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      style: true,
      events: [{
        name: 'onConfirm',
        template: "onConfirm(${extParams}){\n// Click OK callback\nconsole.log('onConfirm');}"
      }]
    }
  }
};

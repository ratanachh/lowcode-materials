import snippets from './snippets';
export default {
  snippets,
  componentName: 'Popconfirm',
  title: "Popconfirm",
  category: "Feedback",
  props: [{
    name: 'title',
    title: {
      label: "Confirmation box content",
      tip: "Confirmation box content"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node', 'func']
    }
  }, {
    name: 'okText',
    title: {
      label: "OK text",
      tip: "OK text"
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'cancelText',
    title: {
      label: "Cancel text",
      tip: "Cancel text"
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'onConfirm',
    title: {
      label: "Click OKcallback",
      tip: "Click OKcallback"
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

import snippets from './snippets';
export default {
  snippets,
  componentName: 'Tag',
  title: "Tag",
  category: "Data Display",
  props: [{
    name: 'children',
    title: {
      label: "Content",
      tip: "Content"
    },
    propType: 'string'
  }, {
    name: 'closable',
    title: {
      label: "Can Off",
      tip: "TagYesNoCan Off"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'color',
    title: {
      label: "Label color",
      tip: "Label color"
    },
    propType: 'string'
  },
  // {
  //   name: 'closeIcon',
  // title: { label: 'Custom close button', tip: 'Custom close button' },
  //   propType: 'node',
  // },
  {
    name: 'onClose',
    title: {
      label: "Off on callback",
      tip: "Off on callback"
    },
    propType: 'func'
  },
  // {
  //   name: 'visible',
  // title: { label: 'YesNoShowTag', tip: 'YesNoShowTag' },
  //   propType: 'bool',
  //   defaultValue: true,
  // },
  {
    name: 'icon',
    title: {
      label: "Set Icon",
      tip: "Set Icon"
    },
    propType: 'node'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onClose',
        template: "onClose(event,${extParams}){\n// Off on callback\nconsole.log('onClose',event);}"
      }]
    }
  }
};

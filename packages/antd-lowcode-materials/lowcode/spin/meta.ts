import snippets from './snippets';
export default {
  snippets,
  componentName: 'Spin',
  title: "Loading",
  category: "Feedback",
  props: [{
    name: 'delay',
    title: {
      label: "delayed display",
      tip: "Delay the time to display loading effects (to prevent flickering)"
    },
    propType: 'number'
  }, {
    name: 'indicator',
    title: {
      label: "loading indicator",
      tip: "loading indicator"
    },
    propType: 'node'
  }, {
    name: 'size',
    title: {
      label: "Size",
      tip: "ComponentSize"
    },
    propType: {
      type: 'oneOf',
      value: ['small', 'default', 'large']
    },
    defaultValue: 'default'
  }, {
    name: 'spinning',
    title: {
      label: "LoadingStatus",
      tip: "YesNo LoadingStatus"
    },
    propType: 'bool',
    defaultValue: true
  }, {
    name: 'tip',
    title: {
      label: "description copy",
      tip: "When used as a package element, you can customize the description copy"
    },
    propType: 'string'
  }, {
    name: 'wrapperClassName',
    title: {
      label: "class attribute of wrapper",
      tip: "class attribute of wrapper"
    },
    propType: 'string'
  }],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      style: true
    }
  }
};

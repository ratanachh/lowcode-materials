import snippets from './snippets';
export default {
  snippets,
  componentName: 'Input.Group',
  title: "Input box combination",
  category: "Data Entry",
  props: [{
    name: 'compact',
    title: {
      label: "compact mode",
      tip: "Whether to use compact mode"
    },
    propType: 'bool',
    setter: 'BoolSetter'
  }, {
    name: 'size',
    title: {
      label: "Size",
      tip: "SizeSize"
    },
    propType: {
      type: 'oneOf',
      value: ['large', 'default', 'small']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: "Large",
          value: 'large'
        }, {
          title: "Middle",
          value: 'middle'
        }, {
          title: "Small",
          value: 'small'
        }]
      }
    },
    defaultValue: 'default'
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

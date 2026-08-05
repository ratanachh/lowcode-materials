import snippets from './snippets';
export default {
  snippets,
  componentName: 'Segmented',
  title: "Segmentation controller",
  category: "Data Display",
  group: "Atomic Components",
  props: [{
    name: 'block',
    title: {
      label: 'block ',
      tip: "Option to adjust width to parent element width"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'defaultValue',
    title: {
      label: "Default value",
      tip: "Default selected keys"
    },
    setter: ['StringSetter', 'NumberSetter']
  }, {
    name: 'disabled',
    title: {
      label: "Disabled",
      tip: "Disabled"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'options',
    title: {
      label: "configContent",
      tip: "Data configuration options content"
    },
    setter: ['JsonSetter', 'VariableSetter']
  }, {
    name: 'size',
    title: {
      label: "Control size",
      tip: "Control size"
    },
    propType: {
      type: 'oneOf',
      value: ['large', 'middle', 'small']
    },
    setter: {
      componentName: 'SelectSetter',
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
    defaultValue: 'middle'
  }
  // {
  //   name: 'value',
  // title: { label: 'Selected item', tip: 'Current selected item' },
  //   propType: {
  //     type: 'arrayOf',
  //     value: { type: 'oneOfType', value: ['string', 'number'] },
  //   },
  // },
  ],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(value,selectedOptions,${extParams}){\n// Callback after selection is completed\nconsole.log('onChange', value, selectedOptions);}"
      }]
    }
  }
};

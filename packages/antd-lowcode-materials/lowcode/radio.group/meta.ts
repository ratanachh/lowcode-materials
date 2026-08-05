import { uuid } from '../_utils/utils';
export default {
  componentName: 'Radio.Group',
  title: "radio button group",
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: "Default value",
      tip: "Default selected value"
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'value',
    title: {
      label: "Current value",
      tip: "Specify selected options"
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'disabled',
    title: {
      label: "Disabled",
      tip: "Whether disabled"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'name',
    title: {
      label: "name prop",
      tip: "name for all radio inputs under RadioGroup"
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'options',
    title: {
      label: "Options",
      tip: "Options"
    },
    propType: {
      type: 'arrayOf',
      value: {
        type: 'shape',
        value: [{
          name: 'label',
          propType: 'string',
          description: "Option label",
          defaultValue: "Option label"
        }, {
          name: 'value',
          propType: 'string',
          description: "Option value",
          defaultValue: "Option value"
        }, {
          name: 'disabled',
          propType: 'bool',
          description: "Disabled",
          defaultValue: false
        }]
      }
    },
    setter: {
      componentName: 'ArraySetter',
      props: {
        itemSetter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [{
                name: 'label',
                title: "Option label",
                setter: 'StringSetter',
                isRequired: true
              }, {
                name: 'value',
                title: "Option value",
                setter: 'StringSetter',
                isRequired: true
              }, {
                name: 'disabled',
                title: "Disabled",
                setter: 'BoolSetter'
              }]
            }
          },
          initialValue: () => {
            return {
              label: "Option label",
              value: uuid(),
              disabled: false
            };
          }
        }
      }
    }
  }, {
    name: 'optionType',
    title: {
      label: "Type",
      tip: "Type"
    },
    propType: {
      type: 'oneOf',
      value: ['default', 'button']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: "DefaultType",
          value: 'default'
        }, {
          title: "ButtonType",
          value: 'button'
        }]
      }
    },
    defaultValue: 'default'
  }, {
    name: 'size',
    title: {
      label: "Size",
      tip: "Size, only takes effect for button styles"
    },
    condition(target) {
      return target.getProps().getPropValue('optionType') === 'button';
    },
    propType: {
      type: 'oneOf',
      value: ['large', 'middle', 'small']
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
    defaultValue: 'middle'
  }, {
    name: 'buttonStyle',
    title: {
      label: "button style",
      tip: "RadioButton style: outline or solid"
    },
    condition(target) {
      return target.getProps().getPropValue('optionType') === 'button';
    },
    propType: {
      type: 'oneOf',
      value: ['outline', 'solid']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: "Stroke",
          value: 'outline'
        }, {
          title: "Coloring",
          value: 'solid'
        }]
      }
    },
    defaultValue: 'outline'
  }, {
    name: 'onChange',
    title: {
      label: "Callback on change",
      tip: "Callback on change"
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(event,${extParams}){\n// OptionChange on callback\nconsole.log('onChange',event);}"
      }]
    }
  }
};

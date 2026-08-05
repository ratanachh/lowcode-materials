import { uuid } from '../_utils/utils';
export default {
  componentName: 'Checkbox.Group',
  title: "Checkbox group",
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: "Default value",
      tip: "Default selected value"
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    },
    defaultValue: [],
    setter: {
      componentName: 'ArraySetter',
      props: {
        itemSetter: {
          componentName: 'StringSetter'
        }
      }
    },
    supportVariable: true
  }, {
    name: 'value',
    title: {
      label: "Current value",
      tip: "Currently selected option"
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    },
    setter: {
      componentName: 'ArraySetter',
      props: {
        itemSetter: {
          componentName: 'StringSetter'
        }
      }
    },
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
      tip: "name prop"
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
          description: "Option label",
          propType: 'string',
          defaultValue: "Option label"
        }, {
          name: 'value',
          description: "Option value",
          propType: 'string',
          defaultValue: "Option value"
        }, {
          name: 'disabled',
          description: "Disabled",
          propType: 'bool',
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
    },
    supportVariable: true
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
        template: "onChange(checkedValue,${extParams}){\n// Callback on change\nconsole.log('onChange', checkedValue);}"
      }]
    }
  }
};

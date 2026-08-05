import { uuid } from '../_utils/utils';
import { i18n } from "../_utils/i18n";
export default {
  componentName: 'Checkbox.Group',
  title: i18n("多选框组", "Checkbox group"),
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: i18n("默认值", "Default value"),
      tip: i18n("默认选中值", "Default selected value")
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
      label: i18n("当前值", "Current value"),
      tip: i18n("当前选中的选项", "Currently selected option")
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
      label: i18n("是否禁用", "Disabled"),
      tip: i18n("是否为禁用状态", "Whether disabled")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'name',
    title: {
      label: i18n("name属性", "name prop"),
      tip: i18n("name属性", "name prop")
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'options',
    title: {
      label: i18n("指定可选项", "Options"),
      tip: i18n("指定可选项", "Options")
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
                title: i18n("选项名", "Option label"),
                setter: 'StringSetter',
                isRequired: true
              }, {
                name: 'value',
                title: i18n("选项值", "Option value"),
                setter: 'StringSetter',
                isRequired: true
              }, {
                name: 'disabled',
                title: i18n("是否禁用", "Disabled"),
                setter: 'BoolSetter'
              }]
            }
          },
          initialValue: () => {
            return {
              label: i18n("选项名", "Option label"),
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
      label: i18n("变化时回调函数", "Callback on change"),
      tip: i18n("变化时回调函数", "Callback on change")
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

import { uuid } from '../_utils/utils';
import { i18n } from "../_utils/i18n";
export default {
  componentName: 'Radio.Group',
  title: i18n("单选框组", "radio button group"),
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: i18n("默认值", "Default value"),
      tip: i18n("默认选中值", "Default selected value")
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'value',
    title: {
      label: i18n("当前值", "Current value"),
      tip: i18n("指定选中的选项", "Specify selected options")
    },
    propType: 'string',
    setter: 'StringSetter',
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
      label: i18n("name 属性", "name prop"),
      tip: i18n("RadioGroup 下所有 input[type=\"radio\"] 的 name 属性", "name for all radio inputs under RadioGroup")
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
    }
  }, {
    name: 'optionType',
    title: {
      label: i18n("类型", "Type"),
      tip: i18n("类型", "Type")
    },
    propType: {
      type: 'oneOf',
      value: ['default', 'button']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: i18n("默认类型", "DefaultType"),
          value: 'default'
        }, {
          title: i18n("按钮类型", "ButtonType"),
          value: 'button'
        }]
      }
    },
    defaultValue: 'default'
  }, {
    name: 'size',
    title: {
      label: i18n("尺寸", "Size"),
      tip: i18n("大小，只对按钮样式生效", "Size, only takes effect for button styles")
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
          title: i18n("大", "Large"),
          value: 'large'
        }, {
          title: i18n("中", "Middle"),
          value: 'middle'
        }, {
          title: i18n("小", "Small"),
          value: 'small'
        }]
      }
    },
    defaultValue: 'middle'
  }, {
    name: 'buttonStyle',
    title: {
      label: i18n("按钮风格", "button style"),
      tip: i18n("RadioButton 的风格样式，目前有描边和填色两种风格", "RadioButton style: outline or solid")
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
          title: i18n("描边", "Stroke"),
          value: 'outline'
        }, {
          title: i18n("填色", "Coloring"),
          value: 'solid'
        }]
      }
    },
    defaultValue: 'outline'
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
        template: "onChange(event,${extParams}){\n// OptionChange on callback\nconsole.log('onChange',event);}"
      }]
    }
  }
};

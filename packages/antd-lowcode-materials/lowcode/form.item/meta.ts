import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Form.Item',
  title: i18n("表单项", "Form Item"),
  category: "Data Entry",
  props: [{
    name: 'name',
    title: {
      label: i18n("字段名", "Field name"),
      tip: i18n("字段名", "Field name")
    },
    isRequired: true,
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'label',
    title: {
      label: i18n("标签", "Tag"),
      tip: i18n("标签的文本", "Tag Text")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'labelAlign',
    title: {
      label: i18n("标签对齐", "label alignment"),
      tip: i18n("标签文本对齐方式", "TagTextAlign")
    },
    propType: {
      type: 'oneOf',
      value: ['left', 'right']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: i18n("左", "Left"),
          value: 'left'
        }, {
          title: i18n("右", "Right"),
          value: 'right'
        }]
      }
    },
    defaultValue: 'right'
  }, {
    name: 'colon',
    title: {
      label: i18n("显示冒号", "Show colon"),
      tip: i18n("配合 label 属性使用，表示是否显示 label 后面的冒号", "Used with the label attribute to indicate whether to display the colon after the label")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'extra',
    title: {
      label: i18n("提示信息", "Tooltip"),
      tip: i18n("额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。", "Additional prompt information, similar to help, can be used when error information and prompt text need to appear at the same time.")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'tooltip',
    title: {
      label: i18n("标签提示信息", "TagTooltip"),
      tip: i18n("标签提示信息，当需要对标签进行解释时，可以使用这个。", "Label prompt information, you can use this when you need to explain the label.")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'required',
    title: {
      label: i18n("必填标记", "Required tag"),
      tip: i18n("必填样式设置。如不设置，则会根据校验规则自动生成", "Required style setting. If not set, it will be automatically generated according to the verification rules.")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  },
  // {
  //   name: 'hasFeedback',
  //   title: {
  // label: 'Verification status icon',
  //     tip:
  // 'Use it with the validateStatus attribute to display the verification status icon. It is recommended to only use it with the Input component',
  //   },
  //   propType: 'bool',
  //   defaultValue: false,
  // },
  {
    name: 'initialValue',
    title: {
      label: i18n("默认值", "Default value"),
      tip: i18n("设置子元素默认值，如果与 Form 的 initialValues 冲突则以 Form 为准", "Set the default value of the child element. If it conflicts with the initialValues ​​of the Form, the Form will prevail.")
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'noStyle',
    title: {
      label: i18n("隐藏标签", "Hide Tag"),
      tip: i18n("为 true 时不带样式，作为纯字段控件使用", "When true, there is no style and it is used as a pure field control.")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'valuePropName',
    title: {
      label: i18n("子组件值字段", "Subcomponent value field"),
      tip: i18n(
        "子节点的值的字段，如 Switch 的是 'checked'",
        "Child value prop name, e.g. Switch uses 'checked'",
      ),
    },
    propType: 'string',
    defaultValue: 'value',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'getValueFromEvent',
    title: {
      label: i18n("event转换器", "Event converter"),
      tip: i18n(
        '设置如何将 event 的值转换成字段值，如将上传组件的fileList作为value值传出',
        'Convert event to field value, e.g. pass Upload fileList as value',
      ),
    },
    propType: 'func'
  }, {
    type: 'group',
    title: i18n("布局", "Layout"),
    display: 'accordion',
    items: [{
      name: 'labelCol',
      title: i18n("标签栅格布局设置", "Label col settings"),
      display: 'inline',
      setter: {
        componentName: 'ObjectSetter',
        props: {
          config: {
            items: [{
              name: 'span',
              title: i18n("宽度", "Width"),
              setter: {
                componentName: 'NumberSetter',
                props: {
                  min: 0,
                  max: 24
                }
              }
            }, {
              name: 'offset',
              title: i18n("偏移", "Offset"),
              setter: {
                componentName: 'NumberSetter',
                props: {
                  min: 0,
                  max: 24
                }
              }
            }]
          }
        }
      },
      description: "label label layout, same as `<Col>` component, set span offset value, such as {span: 8, offset: 16}, this item is only valid in vertical form"
    }, {
      name: 'wrapperCol',
      title: i18n("内容栅格布局设置", "Wrapper col settings"),
      display: 'inline',
      setter: {
        componentName: 'ObjectSetter',
        props: {
          config: {
            items: [{
              name: 'span',
              title: i18n("宽度", "Width"),
              setter: {
                componentName: 'NumberSetter',
                props: {
                  min: 0,
                  max: 24
                }
              }
            }, {
              name: 'offset',
              title: i18n("偏移", "Offset"),
              setter: {
                componentName: 'NumberSetter',
                props: {
                  min: 0,
                  max: 24
                }
              }
            }]
          }
        }
      },
      description: "When you need to set the layout style for the input control, use this attribute. The usage is the same as labelCol."
    }]
  }, {
    name: 'requiredobj',
    title: {
      label: i18n("必填设置", "RequiredSet"),
      tip: i18n("必填设置", "RequiredSet")
    },
    propType: {
      type: 'shape',
      value: [{
        name: 'required',
        title: i18n("是否必填", "YesNoRequired"),
        propType: 'bool',
        setter: 'BoolSetter',
        supportVariable: true,
        extraProps: {
          setValue(target: any, value: boolean) {
            // Sync required mark
            target.parent.parent.setPropValue('required', value);
          }
        }
      }, {
        name: 'message',
        title: i18n("错误信息提示", "Error message"),
        propType: 'string',
        setter: 'StringSetter',
        supportVariable: true
      }]
    }
  }, {
    name: 'typeobj',
    title: {
      label: i18n("输入类型设置", "Input TypeSet"),
      tip: i18n("输入类型设置", "Input TypeSet")
    },
    propType: {
      type: 'shape',
      value: [{
        name: 'type',
        title: i18n("输入类型", "Input Type"),
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [{
              title: i18n("字符串", "string"),
              value: 'string'
            },
            // {
            // title: 'Pure numbers',
            //   value: 'number',
            // },
            {
              title: i18n("邮箱", "Mail"),
              value: 'email'
            }, {
              title: i18n("网址", "URL"),
              value: 'url'
            }]
          }
        },
        propType: {
          type: 'oneOf',
          value: ['string', 'number', 'email', 'url']
        }
      }, {
        name: 'message',
        title: i18n("错误信息提示", "Error message"),
        propType: 'string'
      }]
    }
  }, {
    name: 'lenobj',
    title: {
      label: i18n("长度校验设置", "Length check settings"),
      tip: i18n("长度校验设置", "Length check settings")
    },
    propType: {
      type: 'shape',
      value: [
      // { name: 'len', title: 'FixedLength', propType: 'string' },
      {
        name: 'max',
        title: i18n("最大长度", "Max length"),
        propType: 'number'
      }, {
        name: 'min',
        title: i18n("最小长度", "minimum length"),
        propType: 'number'
      }, {
        name: 'message',
        title: i18n("错误信息提示", "Error message"),
        propType: 'string'
      }]
    }
  }, {
    name: 'patternobj',
    title: {
      label: i18n("正则设置", "Regular settings"),
      tip: i18n("正则设置", "Regular settings")
    },
    propType: {
      type: 'shape',
      value: [{
        name: 'pattern',
        title: i18n("正则", "regular"),
        propType: 'string'
      }, {
        name: 'message',
        title: i18n("错误信息提示", "Error message"),
        propType: 'string'
      }]
    }
  }, {
    name: 'validator',
    title: {
      label: i18n("自定义校验函数", "Custom verification function"),
      tip: i18n("自定义校验，接收 Promise 作为返回值", "Custom verification, receiving Promise as return value")
    },
    propType: 'func'
  }],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        childWhitelist: [],
        parentWhitelist: []
      }
    },
    supports: {
      style: true
    },
    advanced: {
      callbacks: {
        onNodeRemove: (removedNode, currentNode) => {
          if (!removedNode || !currentNode) {
            return;
          }
          const {
            children
          } = currentNode;
          // If there are no children, it means that the current P component is empty and the P component itself needs to be deleted.
          if (children && children.length === 0) {
            currentNode.remove();
          }
        }
      }
    }
  }
};

import snippets from './snippets';
import { uuid } from '../_utils/utils';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Form',
  title: i18n("表单容器", "Form"),
  category: "Data Entry",
  props: [{
    name: 'ref',
    title: {
      label: 'ref',
      tip: i18n("ref | 通过 this.$('xxx') 获取到组件实例", "ref | 通过 this.$('xxx') 获取到组件实例")
    },
    defaultValue: () => {
      return `form_${uuid()}`;
    },
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'values',
    title: {
      label: i18n("表单数据源", "Form values"),
      tip: i18n("表单数据源", "Form values")
    },
    propType: 'object',
    setter: 'JsonSetter',
    supportVariable: true
  }, {
    name: 'colon',
    title: {
      label: i18n("展示冒号", "Colon"),
      tip: ''
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'hideRequiredMark',
    title: {
      label: i18n("隐藏必填标记", "Hide required mark"),
      tip: i18n("隐藏必填标记", "Hide required mark")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
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
      title: i18n("\b内容栅格布局设置", "\bWrapper col settings"),
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
    name: 'labelAlign',
    title: {
      label: i18n("标签对齐", "label alignment"),
      tip: i18n("label 标签的文本对齐方式", "label Tag TextAlign")
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
    propType: {
      type: 'oneOf',
      value: ['left', 'right']
    },
    defaultValue: 'right'
  }, {
    name: 'layout',
    title: {
      label: i18n("表单布局", "Data EntryLayout"),
      tip: i18n("表单布局", "Data EntryLayout")
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: i18n("水平", "Horizontal"),
          value: 'horizontal'
        }, {
          title: i18n("垂直", "Vertical"),
          value: 'vertical'
        }, {
          title: i18n("行内", "Inline"),
          value: 'inline'
        }]
      }
    },
    propType: {
      type: 'oneOf',
      value: ['horizontal', 'vertical', 'inline']
    },
    defaultValue: 'horizontal'
  }, {
    name: 'name',
    title: {
      label: i18n("表单名称", "Data EntryName"),
      tip: i18n("表单名称，会作为表单字段 `id` 前缀使用", "Form name, will be used as the `id` prefix of the form field")
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'preserve',
    title: {
      label: i18n("删除时保留值", "Keep value when deleting"),
      tip: i18n("当字段被删除时保留字段值", "Keep field value when field is deleted")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'scrollToFirstError',
    title: {
      label: i18n("滚至错误", "roll to error"),
      tip: i18n("提交失败自动滚动到第一个错误字段", "Automatically scroll to the first error field if the submission fails")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'size',
    title: {
      label: i18n("字段组件尺寸", "FieldComponentSize"),
      tip: i18n("设置字段组件的尺寸（仅限 antd 组件）", "Set the size of the field component (antd component only)")
    },
    propType: {
      type: 'oneOf',
      value: ['small', 'middle', 'large']
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
    name: 'validateMessages',
    title: {
      label: i18n("验证提示模板", "Authentication prompt template"),
      tip: i18n("验证提示模板", "Authentication prompt template")
    },
    setter: 'JsonSetter',
    defaultValue: {
      required: i18n("'${name}' 不能为空", "'${name}' is required")
    }
  }, {
    name: 'validateTrigger',
    title: {
      label: i18n("校验时机", "Verification timing"),
      tip: i18n("所有字段校验触发时机", "All field verification trigger timing")
    },
    propType: {
      type: 'oneOf',
      value: ['onChange', 'onBlur']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: i18n("当前值变化时", "On values change"),
          value: 'onChange'
        }, {
          title: i18n("失去焦点时", "On blur"),
          value: 'onBlur'
        }]
      }
    }
  }, {
    name: 'onFinish',
    title: {
      label: i18n("提交表单且数据验证成功后回调事件", "Callback event after the form is submitted and data verification is successful"),
      tip: i18n("提交表单且数据验证成功后回调事件", "Callback event after the form is submitted and data verification is successful")
    },
    propType: 'func'
  }, {
    name: 'onFinishFailed',
    title: {
      label: i18n("提交表单且数据验证失败后回调事件", "Callback event after the form is submitted and data validation fails"),
      tip: i18n("提交表单且数据验证失败后回调事件", "Callback event after the form is submitted and data validation fails")
    },
    propType: 'func'
  }, {
    name: 'onFieldsChange',
    title: {
      label: i18n("字段更新时触发回调事件", "A callback event is triggered when a field is updated"),
      tip: i18n("字段更新时触发回调事件", "A callback event is triggered when a field is updated")
    },
    propType: 'func'
  }, {
    name: 'onValuesChange',
    title: {
      label: i18n("字段值更新时触发回调事件", "A callback event is triggered when the field value is updated"),
      tip: i18n("字段值更新时触发回调事件", "A callback event is triggered when the field value is updated")
    },
    propType: 'func'
  }],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      style: true,
      events: [{
        name: 'onFinish',
        template: "onFinish(values,${extParams}){\n// Callback event after the form is submitted and data verification is successful\nconsole.log('onFinish',values);}"
      }, {
        name: 'onFinishFailed',
        template: "onFinishFailed({values,errorFields,outOfDate},${extParams}){\n// Callback event after the form is submitted and data validation fails\nconsole.log('onFinishFailed',values, errorFields, outOfDate);}"
      }, {
        name: 'onFieldsChange',
        template: "onFieldsChange(changedFields,allFields,${extParams}){\n// A callback event is triggered when a field is updated\nconsole.log('onFieldsChange',changedFields,allFields);}"
      }, {
        name: 'onValuesChange',
        template: "onValuesChange(changedValues,allValues,${extParams}){\n// A callback event is triggered when the field value is updated\nconsole.log('onValuesChange',changedValues,allValues);}"
      }]
    },
    advanced: {
      callbacks: {
        onNodeAdd: (dragment, currentNode) => {
          const comps = ['Input', 'Select', 'Radio', 'Checkbox', 'Switch', 'Upload', 'Datepicker', 'Rate', 'Transfer'];
          if (!dragment || !dragment.componentMeta || !dragment.componentMeta.npm || !dragment.componentMeta.npm.package || dragment.componentMeta.npm.package.indexOf('@rchh/antd-lowcode-materials') === -1 || comps.every(comp => dragment.componentName.indexOf(comp) === -1)) {
            return;
          }

          // Wrap target element with a P node
          const layoutPNode = currentNode.document.createNode({
            componentName: 'Form.Item',
            props: {
              label: i18n("表单项: ", "Form Item:")
            },
            children: [dragment.exportSchema()]
          });
          // The current drag has not been added to the node child node and needs to be processed by setTimeout.
          setTimeout(() => {
            currentNode.replaceChild(dragment, layoutPNode.exportSchema(),
            // Avoid generating new nodeId
            {
              reserveSchemaNodeId: true
            });
          }, 1);
        }
      }
    }
  }
};

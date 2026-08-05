import snippets from './snippets';
import { uuid } from '../_utils/utils';
export default {
  snippets,
  componentName: 'Form',
  title: "Form",
  category: "Data Entry",
  props: [{
    name: 'ref',
    title: {
      label: 'ref',
      tip: "ref | Get component instance through this.$('xxx')"
    },
    defaultValue: () => {
      return `form_${uuid()}`;
    },
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'values',
    title: {
      label: "Form values",
      tip: "Form values"
    },
    propType: 'object',
    setter: 'JsonSetter',
    supportVariable: true
  }, {
    name: 'colon',
    title: {
      label: "Colon",
      tip: ''
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'hideRequiredMark',
    title: {
      label: "Hide required mark",
      tip: "Hide required mark"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    type: 'group',
    title: "Layout",
    display: 'accordion',
    items: [{
      name: 'labelCol',
      title: "Label col settings",
      display: 'inline',
      setter: {
        componentName: 'ObjectSetter',
        props: {
          config: {
            items: [{
              name: 'span',
              title: "Width",
              setter: {
                componentName: 'NumberSetter',
                props: {
                  min: 0,
                  max: 24
                }
              }
            }, {
              name: 'offset',
              title: "Offset",
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
      title: "\bWrapper col settings",
      display: 'inline',
      setter: {
        componentName: 'ObjectSetter',
        props: {
          config: {
            items: [{
              name: 'span',
              title: "Width",
              setter: {
                componentName: 'NumberSetter',
                props: {
                  min: 0,
                  max: 24
                }
              }
            }, {
              name: 'offset',
              title: "Offset",
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
      label: "label alignment",
      tip: "label Tag TextAlign"
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: "Left",
          value: 'left'
        }, {
          title: "Right",
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
      label: "Data EntryLayout",
      tip: "Data EntryLayout"
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: "Horizontal",
          value: 'horizontal'
        }, {
          title: "Vertical",
          value: 'vertical'
        }, {
          title: "Inline",
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
      label: "Data EntryName",
      tip: "Form name, will be used as the `id` prefix of the form field"
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'preserve',
    title: {
      label: "Keep value when deleting",
      tip: "Keep field value when field is deleted"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'scrollToFirstError',
    title: {
      label: "roll to error",
      tip: "Automatically scroll to the first error field if the submission fails"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'size',
    title: {
      label: "FieldComponentSize",
      tip: "Set the size of the field component (antd component only)"
    },
    propType: {
      type: 'oneOf',
      value: ['small', 'middle', 'large']
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
    name: 'validateMessages',
    title: {
      label: "Authentication prompt template",
      tip: "Authentication prompt template"
    },
    setter: 'JsonSetter',
    defaultValue: {
      required: "'${name}' is required"
    }
  }, {
    name: 'validateTrigger',
    title: {
      label: "Verification timing",
      tip: "All field verification trigger timing"
    },
    propType: {
      type: 'oneOf',
      value: ['onChange', 'onBlur']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: "On values change",
          value: 'onChange'
        }, {
          title: "On blur",
          value: 'onBlur'
        }]
      }
    }
  }, {
    name: 'onFinish',
    title: {
      label: "Callback event after the form is submitted and data verification is successful",
      tip: "Callback event after the form is submitted and data verification is successful"
    },
    propType: 'func'
  }, {
    name: 'onFinishFailed',
    title: {
      label: "Callback event after the form is submitted and data validation fails",
      tip: "Callback event after the form is submitted and data validation fails"
    },
    propType: 'func'
  }, {
    name: 'onFieldsChange',
    title: {
      label: "A callback event is triggered when a field is updated",
      tip: "A callback event is triggered when a field is updated"
    },
    propType: 'func'
  }, {
    name: 'onValuesChange',
    title: {
      label: "A callback event is triggered when the field value is updated",
      tip: "A callback event is triggered when the field value is updated"
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
              label: "Form Item:"
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

import snippets from './snippets';
export default {
  snippets,
  componentName: 'Form.Item',
  title: "Form Item",
  category: "Data Entry",
  props: [{
    name: 'name',
    title: {
      label: "Field name",
      tip: "Field name"
    },
    isRequired: true,
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'label',
    title: {
      label: "Tag",
      tip: "Tag Text"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'labelAlign',
    title: {
      label: "label alignment",
      tip: "TagTextAlign"
    },
    propType: {
      type: 'oneOf',
      value: ['left', 'right']
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
    defaultValue: 'right'
  }, {
    name: 'colon',
    title: {
      label: "Show colon",
      tip: "Used with the label attribute to indicate whether to display the colon after the label"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'extra',
    title: {
      label: "Tooltip",
      tip: "Additional prompt information, similar to help, can be used when error information and prompt text need to appear at the same time."
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'tooltip',
    title: {
      label: "TagTooltip",
      tip: "Label prompt information, you can use this when you need to explain the label."
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'required',
    title: {
      label: "Required tag",
      tip: "Required style setting. If not set, it will be automatically generated according to the verification rules."
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
      label: "Default value",
      tip: "Set the default value of the child element. If it conflicts with the initialValues ​​of the Form, the Form will prevail."
    },
    propType: 'string',
    setter: 'StringSetter',
    supportVariable: true
  }, {
    name: 'noStyle',
    title: {
      label: "Hide Tag",
      tip: "When true, there is no style and it is used as a pure field control."
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    supportVariable: true
  }, {
    name: 'valuePropName',
    title: {
      label: "Subcomponent value field",
      tip: i18n(
        "Field for value of child node, such as 'checked' for Switch",
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
      label: "Event converter",
      tip: i18n(
        'Convert event value to field value, such as extracting fileList for Upload component',
        'Convert event to field value, e.g. pass Upload fileList as value',
      ),
    },
    propType: 'func'
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
      title: "Wrapper col settings",
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
    name: 'requiredobj',
    title: {
      label: "RequiredSet",
      tip: "RequiredSet"
    },
    propType: {
      type: 'shape',
      value: [{
        name: 'required',
        title: "YesNoRequired",
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
        title: "Error message",
        propType: 'string',
        setter: 'StringSetter',
        supportVariable: true
      }]
    }
  }, {
    name: 'typeobj',
    title: {
      label: "Input TypeSet",
      tip: "Input TypeSet"
    },
    propType: {
      type: 'shape',
      value: [{
        name: 'type',
        title: "Input Type",
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [{
              title: "string",
              value: 'string'
            },
            // {
            // title: 'Pure numbers',
            //   value: 'number',
            // },
            {
              title: "Mail",
              value: 'email'
            }, {
              title: "URL",
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
        title: "Error message",
        propType: 'string'
      }]
    }
  }, {
    name: 'lenobj',
    title: {
      label: "Length check settings",
      tip: "Length check settings"
    },
    propType: {
      type: 'shape',
      value: [
      // { name: 'len', title: 'FixedLength', propType: 'string' },
      {
        name: 'max',
        title: "Max length",
        propType: 'number'
      }, {
        name: 'min',
        title: "minimum length",
        propType: 'number'
      }, {
        name: 'message',
        title: "Error message",
        propType: 'string'
      }]
    }
  }, {
    name: 'patternobj',
    title: {
      label: "Regular settings",
      tip: "Regular settings"
    },
    propType: {
      type: 'shape',
      value: [{
        name: 'pattern',
        title: "regular",
        propType: 'string'
      }, {
        name: 'message',
        title: "Error message",
        propType: 'string'
      }]
    }
  }, {
    name: 'validator',
    title: {
      label: "Custom verification function",
      tip: "Custom verification, receiving Promise as return value"
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

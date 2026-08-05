import snippets from './snippets';
export default {
  snippets,
  componentName: 'TreeSelect',
  title: "TreeSelect",
  category: "Data Entry",
  props: [{
    name: 'treeData',
    title: {
      label: "Data source",
      tip: "Data source"
    },
    setter: 'JsonSetter'
  }, {
    name: 'defaultValue',
    title: {
      label: "Default value",
      tip: "Default selected value"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', {
        type: 'arrayOf',
        value: 'string'
      }]
    }
  }, {
    name: 'value',
    title: {
      label: "Current value",
      tip: "Current value"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', {
        type: 'arrayOf',
        value: 'string'
      }]
    }
  }, {
    name: 'allowClear',
    title: {
      label: "Allow clear",
      tip: "Whether allow clear"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'autoClearSearchValue',
    title: {
      label: "Automatically clear search",
      tip: "When a value is selected in multi-select mode, the search box is automatically cleared."
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'bordered',
    title: {
      label: "Show border",
      tip: "YesNoShow border"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'disabled',
    title: {
      label: "Disabled",
      tip: "Whether disabled"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  },
  // {
  //   name: 'dropdownClassName',
  //   title: {
  // label: 'Dropdown className',
  // tip: 'Dropdown className',
  //   },
  //   propType: 'string',
  // },
  {
    name: 'dropdownMatchSelectWidth',
    title: {
      label: "Drop-down list same style",
      tip: "Dropdown match select width"
    },
    propType: 'bool',
    setter: 'BoolSetter'
  },
  // {
  //   name: 'dropdownStyle',
  // title: { label: 'Dropdown style', tip: 'Dropdown style' },
  //   setter: 'JsonSetter',
  // },
  {
    name: 'filterTreeNode',
    title: {
      label: "FilterNode",
      tip: "Whether to filter based on input items. By default, the value of treeNodeFilterProp is used as the attribute value of the TreeNode to be filtered."
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'func']
    }
  }, {
    name: 'labelInValue',
    title: {
      label: "value contains label",
      tip: "Whether to wrap the label of each option into value will change the value type from `string` to the format of {value: string, label: ReactNode, halfChecked (valid when treeCheckStrictly): string[] }"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'listHeight',
    title: {
      label: "List height",
      tip: "List height"
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'loadData',
    title: {
      label: "Load data asynchronously",
      tip: "Load data asynchronously"
    },
    propType: 'func'
  }, {
    name: 'maxTagCount',
    title: {
      label: "Max tag count",
      tip: "Max tag count"
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'maxTagPlaceholder',
    title: {
      label: "Max tag placeholder",
      tip: "Max tag placeholder"
    },
    propType: {
      type: 'oneOfType',
      value: ['node', 'func']
    }
  }, {
    name: 'multiple',
    title: {
      label: "Allow multiple",
      tip: "Supports multiple selection (automatically becomes true when treeCheckable is set)"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'placeholder',
    title: {
      label: "Select placeholder",
      tip: "Select placeholder"
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'showCheckedStrategy',
    title: {
      label: "Define how selected items are backfilled",
      tip: "Defines how selections are backfilled. `SHOW_ALL`: Display all selected nodes (including parent nodes). `SHOW_PARENT`: Only display the parent node (when all child nodes under the parent node are selected). By default, only child nodes are displayed"
    },
    propType: {
      type: 'oneOf',
      value: ['SHOW_ALL', 'SHOW_PARENT', 'SHOW_CHILD']
    }
  }, {
    name: 'showSearch',
    title: {
      label: "Show search",
      tip: "Show search"
    },
    propType: 'bool',
    setter: 'BoolSetter'
  }, {
    name: 'size',
    title: {
      label: "Size",
      tip: "Select size"
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
  }, {
    name: 'showArrow',
    title: {
      label: "drop down icon",
      tip: "Whether to display the drop-down icon, the default is `true` in radio selection mode"
    },
    propType: 'bool',
    setter: 'BoolSetter'
  },
  // {
  //   name: 'suffixIcon',
  //   title: {
  //     label:
  // 'Temporarily deprecated--Customized selection box suffix icon, `showArrow` must be set to true at the same time in multi-select mode',
  //     tip:
  // 'Temporarily deprecated--Customized selection box suffix icon, `showArrow` must be set to true at the same time in multi-select mode',
  //   },
  //   propType: 'node',
  // },
  {
    name: 'treeCheckable',
    title: {
      label: "Tree checkable",
      tip: "Tree checkable"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'treeDefaultExpandAll',
    title: {
      label: "Expand all tree nodes by default",
      tip: "Expand all tree nodes by default"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'treeDefaultExpandedKeys',
    title: {
      label: "Default expanded keys",
      tip: "Default expanded keys"
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
    }
  }, {
    name: 'treeExpandedKeys',
    title: {
      label: "Expanded keys",
      tip: "Expanded keys"
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
    }
  }, {
    name: 'virtual',
    title: {
      label: "Set false to disable virtual scroll",
      tip: "Set false to disable virtual scroll"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'onChange',
    title: {
      label: "On tree expand",
      tip: "On tree expand"
    },
    propType: 'func'
  }, {
    name: 'onSearch',
    title: {
      label: "Callback when input value changes",
      tip: "Callback when input value changes"
    },
    propType: 'func'
  }, {
    name: 'onSelect',
    title: {
      label: "On select",
      tip: "On select"
    },
    propType: 'func'
  }, {
    name: 'onTreeExpand',
    title: {
      label: "On dropdown visible change",
      tip: "On dropdown visible change"
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(value,label,extra,${extParams}){\n// On tree expand\nconsole.log('onChange',value,label,extra);}"
      }, {
        name: 'onSearch',
        template: "onSearch(value,${extParams}){\n// Callback when input value changes\nconsole.log('onSearch',value);}"
      }, {
        name: 'onSelect',
        template: "onSelect(value,node,extra,${extParams}){\n// On select\nconsole.log('onSelect',value,node,extra);}"
      }, {
        name: 'onTreeExpand',
        template: "onTreeExpand(expandedKeys,${extParams}){\n// On dropdown visible change\nconsole.log('onTreeExpand',expandedKeys);}"
      }]
    }
  }
};

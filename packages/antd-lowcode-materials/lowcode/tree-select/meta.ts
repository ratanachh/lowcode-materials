import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'TreeSelect',
  title: i18n("树选择", "TreeSelect"),
  category: "Data Entry",
  props: [{
    name: 'treeData',
    title: {
      label: i18n("数据源", "Data source"),
      tip: i18n("数据源", "Data source")
    },
    setter: 'JsonSetter'
  }, {
    name: 'defaultValue',
    title: {
      label: i18n("默认值", "Default value"),
      tip: i18n("默认选中值", "Default selected value")
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
      label: i18n("当前值", "Current value"),
      tip: i18n("当前值", "Current value")
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
      label: i18n("支持清除", "Allow clear"),
      tip: i18n("是否允许清除", "Whether allow clear")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'autoClearSearchValue',
    title: {
      label: i18n("自动清空搜索", "Automatically clear search"),
      tip: i18n("当多选模式下值被选择，自动清空搜索框", "When a value is selected in multi-select mode, the search box is automatically cleared.")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'bordered',
    title: {
      label: i18n("显示边框", "Show border"),
      tip: i18n("是否显示边框", "YesNoShow border")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'disabled',
    title: {
      label: i18n("是否禁用", "Disabled"),
      tip: i18n("是否为禁用状态", "Whether disabled")
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
      label: i18n("下拉列表同款", "Drop-down list same style"),
      tip: i18n("下拉菜单和选择器同宽", "Dropdown match select width")
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
      label: i18n("筛选节点", "FilterNode"),
      tip: i18n("是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值", "Whether to filter based on input items. By default, the value of treeNodeFilterProp is used as the attribute value of the TreeNode to be filtered.")
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'func']
    }
  }, {
    name: 'labelInValue',
    title: {
      label: i18n("值包含标签", "value contains label"),
      tip: i18n("是否把每个选项的 label 包装到 value 中，会把 value 类型从 `string` 变为 {value: string, label: ReactNode, halfChecked(treeCheckStrictly 时有效): string[] } 的格式", "Whether to wrap the label of each option into value will change the value type from `string` to the format of {value: string, label: ReactNode, halfChecked (valid when treeCheckStrictly): string[] }")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'listHeight',
    title: {
      label: i18n("设置弹窗滚动高度", "List height"),
      tip: i18n("设置弹窗滚动高度", "List height")
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'loadData',
    title: {
      label: i18n("异步加载数据", "Load data asynchronously"),
      tip: i18n("异步加载数据", "Load data asynchronously")
    },
    propType: 'func'
  }, {
    name: 'maxTagCount',
    title: {
      label: i18n("最多显示多少个 tag", "Max tag count"),
      tip: i18n("最多显示多少个 tag", "Max tag count")
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'maxTagPlaceholder',
    title: {
      label: i18n("隐藏 tag 时显示的内容", "Max tag placeholder"),
      tip: i18n("隐藏 tag 时显示的内容", "Max tag placeholder")
    },
    propType: {
      type: 'oneOfType',
      value: ['node', 'func']
    }
  }, {
    name: 'multiple',
    title: {
      label: i18n("支持多选", "Allow multiple"),
      tip: i18n("支持多选（当设置 treeCheckable 时自动变为 true）", "Supports multiple selection (automatically becomes true when treeCheckable is set)")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'placeholder',
    title: {
      label: i18n("选择框默认文字", "Select placeholder"),
      tip: i18n("选择框默认文字", "Select placeholder")
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'showCheckedStrategy',
    title: {
      label: i18n("定义选中项回填的方式", "Define how selected items are backfilled"),
      tip: i18n("定义选中项回填的方式。`SHOW_ALL`: 显示所有选中节点(包括父节点)。`SHOW_PARENT`: 只显示父节点(当父节点下所有子节点都选中时)。 默认只显示子节点", "Defines how selections are backfilled. `SHOW_ALL`: Display all selected nodes (including parent nodes). `SHOW_PARENT`: Only display the parent node (when all child nodes under the parent node are selected). By default, only child nodes are displayed")
    },
    propType: {
      type: 'oneOf',
      value: ['SHOW_ALL', 'SHOW_PARENT', 'SHOW_CHILD']
    }
  }, {
    name: 'showSearch',
    title: {
      label: i18n("是否支持搜索框", "Show search"),
      tip: i18n("是否支持搜索框", "Show search")
    },
    propType: 'bool',
    setter: 'BoolSetter'
  }, {
    name: 'size',
    title: {
      label: i18n("尺寸", "Size"),
      tip: i18n("选择框大小", "Select size")
    },
    propType: {
      type: 'oneOf',
      value: ['large', 'middle', 'small']
    },
    setter: {
      componentName: 'SelectSetter',
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
    name: 'showArrow',
    title: {
      label: i18n("下拉图标", "drop down icon"),
      tip: i18n("是否显示下拉图标，单选模式下默认 `true`", "Whether to display the drop-down icon, the default is `true` in radio selection mode")
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
      label: i18n("显示勾选框", "Tree checkable"),
      tip: i18n("显示勾选框", "Tree checkable")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'treeDefaultExpandAll',
    title: {
      label: i18n("默认展开所有树节点", "Expand all tree nodes by default"),
      tip: i18n("默认展开所有树节点", "Expand all tree nodes by default")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'treeDefaultExpandedKeys',
    title: {
      label: i18n("默认展开的树节点", "Default expanded keys"),
      tip: i18n("默认展开的树节点", "Default expanded keys")
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
      label: i18n("设置展开的树节点", "Expanded keys"),
      tip: i18n("设置展开的树节点", "Expanded keys")
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
      label: i18n("设置 false 时关闭虚拟滚动", "Set false to disable virtual scroll"),
      tip: i18n("设置 false 时关闭虚拟滚动", "Set false to disable virtual scroll")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'onChange',
    title: {
      label: i18n("选中树节点时调用此函数", "On tree expand"),
      tip: i18n("选中树节点时调用此函数", "On tree expand")
    },
    propType: 'func'
  }, {
    name: 'onSearch',
    title: {
      label: i18n("文本框值变化时回调", "Callback when input value changes"),
      tip: i18n("文本框值变化时回调", "Callback when input value changes")
    },
    propType: 'func'
  }, {
    name: 'onSelect',
    title: {
      label: i18n("被选中时调用", "On select"),
      tip: i18n("被选中时调用", "On select")
    },
    propType: 'func'
  }, {
    name: 'onTreeExpand',
    title: {
      label: i18n("展示节点时调用", "On dropdown visible change"),
      tip: i18n("展示节点时调用", "On dropdown visible change")
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

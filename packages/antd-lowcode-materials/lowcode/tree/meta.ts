import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Tree',
  title: i18n("树形控件", "Tree"),
  category: "Data Display",
  props: [{
    name: 'treeData',
    title: {
      label: i18n("数据", "Data"),
      tip: i18n("treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一）", "treeNodes data, if set, there is no need to manually construct the TreeNode node (key is unique within the entire tree)")
    },
    propType: {
      type: 'arrayOf',
      value: 'object'
    },
    setter: 'JsonSetter'
  }, {
    name: 'autoExpandParent',
    title: {
      label: i18n("是否自动展开父节点", "Auto expand parent"),
      tip: i18n("是否自动展开父节点", "Auto expand parent")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'blockNode',
    title: {
      label: i18n("是否节点占据一行", "Block node"),
      tip: i18n("是否节点占据一行", "Block node")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'checkable',
    title: {
      label: i18n("节点前添加 Checkbox 复选框", "Show checkbox before node"),
      tip: i18n("节点前添加 Checkbox 复选框", "Show checkbox before node")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'checkedKeys',
    title: {
      label: i18n("复选框节点", "CheckboxNode"),
      tip: i18n("（受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置`checkable`和`checkStrictly`，它是一个有`checked`和`halfChecked`属性的对象，并且父子节点的选中与否不再关联", "(Controlled) Tree node of selected check box (Note: Parent and child nodes are related. If the parent node key is passed in, the child node is automatically selected; accordingly, when the child node key is passed in, the parent node is also automatically selected. When `checkable` and `checkStrictly` are set, it is an object with `checked` and `halfChecked` attributes, and the selection of the parent and child nodes is no longer related.")
    },
    propType: {
      type: 'oneOfType',
      value: [{
        value: 'arrayOf',
        type: 'string'
      }, 'object']
    }
  }, {
    name: 'checkStrictly',
    title: {
      label: i18n("完全受控", "fully controlled"),
      tip: i18n("checkable 状态下节点选择完全受控（父子节点选中状态不再关联）", "Node selection is fully controlled in the checkable state (the selected state of parent and child nodes is no longer associated)")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'defaultCheckedKeys',
    title: {
      label: i18n("默认选中值", "Default selected value"),
      tip: i18n("默认选中值", "Default selected value")
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
    name: 'defaultExpandAll',
    title: {
      label: i18n("默认展开所有树节点", "Expand all tree nodes by default"),
      tip: i18n("默认展开所有树节点", "Expand all tree nodes by default")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'defaultExpandedKeys',
    title: {
      label: i18n("默认展开指定的树节点", "Default expanded keys"),
      tip: i18n("默认展开指定的树节点", "Default expanded keys")
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
    name: 'defaultExpandParent',
    title: {
      label: i18n("默认展开父节点", "Default expand parent"),
      tip: i18n("默认展开父节点", "Default expand parent")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'defaultSelectedKeys',
    title: {
      label: i18n("默认选中值", "Default selected value"),
      tip: i18n("默认选中值", "Default selected value")
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
    name: 'disabled',
    title: {
      label: i18n("是否禁用", "Disabled"),
      tip: i18n("是否为禁用状态", "Whether disabled")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'draggable',
    title: {
      label: i18n("节点可拖拽", "NodeCan Drag"),
      tip: i18n("设置节点可拖拽（IE>8）", "Set NodeCan Drag （IE>8）")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'expandedKeys',
    title: {
      label: i18n("展开指定节点", "ExpandSpecify Node"),
      tip: i18n("（受控）展开指定的树节点", "（Controlled）ExpandSpecify Tree node")
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
    name: 'filterTreeNode',
    title: {
      label: i18n("筛选树节点", "FilterTree node"),
      tip: i18n("按需筛选树节点（高亮），返回 true", "Filter tree nodes (highlight) as needed, return true")
    },
    propType: 'func'
  }, {
    name: 'loadData',
    title: {
      label: i18n("异步加载数据", "Load data asynchronously"),
      tip: i18n("异步加载数据", "Load data asynchronously")
    },
    propType: 'func'
  }, {
    name: 'loadedKeys',
    title: {
      label: i18n("已经加载节点", "Node loaded"),
      tip: i18n("（受控）已经加载的节点，需要配合 `loadData` 使用", "(Controlled) Loaded nodes need to be used with `loadData`")
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
    name: 'multiple',
    title: {
      label: i18n("支持多选", "Allow multiple"),
      tip: i18n("支持点选多个节点（节点本身）", "Supports clicking multiple nodes (the node itself)")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'selectable',
    title: {
      label: i18n("是否可选中", "Selectable"),
      tip: i18n("是否可选中", "Selectable")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'selectedKeys',
    title: {
      label: i18n("选中的树节点", "selected tree node"),
      tip: i18n("（受控）设置选中的树节点", "(Controlled) Set selected tree node")
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
    name: 'showIcon',
    title: {
      label: i18n("展示图标", "display icon"),
      tip: i18n("是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式", "Whether to display the icon in front of the TreeNode title. There is no default style. If set to true, you need to define the icon-related styles yourself.")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  },
  // {
  //   name: 'switcherIcon',
  //   title: {
  // label: 'Custom switcher icon',
  // tip: 'Custom switcher icon',
  //   },
  //   propType: 'node',
  // },
  {
    name: 'showLine',
    title: {
      label: i18n("是否展示连接线", "Show line"),
      tip: i18n("是否展示连接线", "Show line")
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'object']
    }
  }, {
    name: 'virtual',
    title: {
      label: i18n("虚拟滚动", "Virtual scroll"),
      tip: i18n("设置 false 时关闭虚拟滚动", "Set false to disable virtual scroll")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'onCheck',
    title: {
      label: i18n("点击复选框触发", "On check"),
      tip: i18n("点击复选框触发", "On check")
    },
    propType: 'func'
  }, {
    name: 'onDragEnd',
    title: {
      label: i18n("dragend 触发时调用", "Called on dragend"),
      tip: i18n("dragend 触发时调用", "Called on dragend")
    },
    propType: 'func'
  }, {
    name: 'onDragEnter',
    title: {
      label: i18n("dragenter 触发时调用", "Called on dragenter"),
      tip: i18n("dragenter 触发时调用", "Called on dragenter")
    },
    propType: 'func'
  }, {
    name: 'onDragLeave',
    title: {
      label: i18n("dragleave 触发时调用", "Called on dragleave"),
      tip: i18n("dragleave 触发时调用", "Called on dragleave")
    },
    propType: 'func'
  }, {
    name: 'onDragOver',
    title: {
      label: i18n("dragover 触发时调用", "Called on dragover"),
      tip: i18n("dragover 触发时调用", "Called on dragover")
    },
    propType: 'func'
  }, {
    name: 'onDragStart',
    title: {
      label: i18n("开始拖拽时调用", "On drag start"),
      tip: i18n("开始拖拽时调用", "On drag start")
    },
    propType: 'func'
  }, {
    name: 'onDrop',
    title: {
      label: i18n("drop 触发时调用", "Called on drop"),
      tip: i18n("drop 触发时调用", "Called on drop")
    },
    propType: 'func'
  }, {
    name: 'onExpand',
    title: {
      label: i18n("展开/收起节点时触发", "On expand"),
      tip: i18n("展开/收起节点时触发", "On expand")
    },
    propType: 'func'
  }, {
    name: 'onLoad',
    title: {
      label: i18n("节点加载完毕时触发", "On load"),
      tip: i18n("节点加载完毕时触发", "On load")
    },
    propType: 'func'
  }, {
    name: 'onRightClick',
    title: {
      label: i18n("响应右键点击", "On right click"),
      tip: i18n("响应右键点击", "On right click")
    },
    propType: 'func'
  }, {
    name: 'onSelect',
    title: {
      label: i18n("点击树节点触发", "On select tree node"),
      tip: i18n("点击树节点触发", "On select tree node")
    },
    propType: 'func'
  }, {
    name: 'icon',
    title: {
      label: i18n("自定义树节点图标", "Custom tree icon"),
      tip: i18n("自定义树节点图标", "Custom tree icon")
    },
    propType: {
      type: 'oneOfType',
      value: ['node', 'func']
    }
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onCheck',
        template: "onCheck(checkedKeys,event,${extParams}){\n// On check\nconsole.log('onCheck',checkedKeys,event);}"
      }, {
        name: 'onDragEnd',
        template: "onDragEnd({event,node},${extParams}){\n// dragend Trigger callback\nconsole.log('onDragEnd',event,node);}"
      }, {
        name: 'onDragEnter',
        template: "onDragEnter({event,node,expandedKeys},${extParams}){\n// dragenter Trigger callback\nconsole.log('onDragEnter',event,node,expandedKeys);}"
      }, {
        name: 'onDragLeave',
        template: "onDragLeave({event,node},${extParams}){\n// dragleave Trigger callback\nconsole.log('onDragLeave',event,node);}"
      }, {
        name: 'onDragOver',
        template: "onDragOver({event,node},${extParams}){\n// dragover Trigger callback\nconsole.log('onDragOver',event,node);}"
      }, {
        name: 'onDragStart',
        template: "onDragStart({event,node},${extParams}){\n// On drag start\nconsole.log('onDragStart',event,node);}"
      }, {
        name: 'onDrop',
        template: "onDrop({event,node,dragNode,dragNodesKeys},${extParams}){\n// drop Trigger callback\nconsole.log('onDrop',event,node,dragNode,dragNodesKeys);}"
      }, {
        name: 'onExpand',
        template: "onExpand(expandedKeys,{expanded,node},${extParams}){\n// Expand/CollapseNode trigger\nconsole.log('onExpand',expandedKeys,expanded,node);}"
      }, {
        name: 'onLoad',
        template: "onLoad(loadedKeys,{event,node},${extParams}){\n// On load\nconsole.log('onLoad',loadedKeys,event,node);}"
      }, {
        name: 'onRightClick',
        template: "onRightClick({event,node},${extParams}){\n// On right click\nconsole.log('onRightClick',event,node);}"
      }, {
        name: 'onSelect',
        template: "onSelect(selectedKeys,event,${extParams}){\n// On select tree node\nconsole.log('onSelect',selectedKeys,event);}"
      }]
    }
  }
};

import snippets from './snippets';
export default {
  snippets,
  componentName: 'Tree',
  title: "Tree",
  category: "Data Display",
  props: [{
    name: 'treeData',
    title: {
      label: "Data",
      tip: "treeNodes data, if set, there is no need to manually construct the TreeNode node (key is unique within the entire tree)"
    },
    propType: {
      type: 'arrayOf',
      value: 'object'
    },
    setter: 'JsonSetter'
  }, {
    name: 'autoExpandParent',
    title: {
      label: "Auto expand parent",
      tip: "Auto expand parent"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'blockNode',
    title: {
      label: "Block node",
      tip: "Block node"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'checkable',
    title: {
      label: "Show checkbox before node",
      tip: "Show checkbox before node"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'checkedKeys',
    title: {
      label: "CheckboxNode",
      tip: "(Controlled) Tree node of selected check box (Note: Parent and child nodes are related. If the parent node key is passed in, the child node is automatically selected; accordingly, when the child node key is passed in, the parent node is also automatically selected. When `checkable` and `checkStrictly` are set, it is an object with `checked` and `halfChecked` attributes, and the selection of the parent and child nodes is no longer related."
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
      label: "fully controlled",
      tip: "Node selection is fully controlled in the checkable state (the selected state of parent and child nodes is no longer associated)"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'defaultCheckedKeys',
    title: {
      label: "Default selected value",
      tip: "Default selected value"
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
      label: "Expand all tree nodes by default",
      tip: "Expand all tree nodes by default"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'defaultExpandedKeys',
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
    name: 'defaultExpandParent',
    title: {
      label: "Default expand parent",
      tip: "Default expand parent"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'defaultSelectedKeys',
    title: {
      label: "Default selected value",
      tip: "Default selected value"
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
      label: "Disabled",
      tip: "Whether disabled"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'draggable',
    title: {
      label: "NodeCan Drag",
      tip: "Set NodeCan Drag （IE>8）"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'expandedKeys',
    title: {
      label: "ExpandSpecify Node",
      tip: "（Controlled）ExpandSpecify Tree node"
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
      label: "FilterTree node",
      tip: "Filter tree nodes (highlight) as needed, return true"
    },
    propType: 'func'
  }, {
    name: 'loadData',
    title: {
      label: "Load data asynchronously",
      tip: "Load data asynchronously"
    },
    propType: 'func'
  }, {
    name: 'loadedKeys',
    title: {
      label: "Node loaded",
      tip: "(Controlled) Loaded nodes need to be used with `loadData`"
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
      label: "Allow multiple",
      tip: "Supports clicking multiple nodes (the node itself)"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'selectable',
    title: {
      label: "Selectable",
      tip: "Selectable"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'selectedKeys',
    title: {
      label: "selected tree node",
      tip: "(Controlled) Set selected tree node"
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
      label: "display icon",
      tip: "Whether to display the icon in front of the TreeNode title. There is no default style. If set to true, you need to define the icon-related styles yourself."
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
      label: "Show line",
      tip: "Show line"
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'object']
    }
  }, {
    name: 'virtual',
    title: {
      label: "Virtual scroll",
      tip: "Set false to disable virtual scroll"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'onCheck',
    title: {
      label: "On check",
      tip: "On check"
    },
    propType: 'func'
  }, {
    name: 'onDragEnd',
    title: {
      label: "Called on dragend",
      tip: "Called on dragend"
    },
    propType: 'func'
  }, {
    name: 'onDragEnter',
    title: {
      label: "Called on dragenter",
      tip: "Called on dragenter"
    },
    propType: 'func'
  }, {
    name: 'onDragLeave',
    title: {
      label: "Called on dragleave",
      tip: "Called on dragleave"
    },
    propType: 'func'
  }, {
    name: 'onDragOver',
    title: {
      label: "Called on dragover",
      tip: "Called on dragover"
    },
    propType: 'func'
  }, {
    name: 'onDragStart',
    title: {
      label: "On drag start",
      tip: "On drag start"
    },
    propType: 'func'
  }, {
    name: 'onDrop',
    title: {
      label: "Called on drop",
      tip: "Called on drop"
    },
    propType: 'func'
  }, {
    name: 'onExpand',
    title: {
      label: "On expand",
      tip: "On expand"
    },
    propType: 'func'
  }, {
    name: 'onLoad',
    title: {
      label: "On load",
      tip: "On load"
    },
    propType: 'func'
  }, {
    name: 'onRightClick',
    title: {
      label: "On right click",
      tip: "On right click"
    },
    propType: 'func'
  }, {
    name: 'onSelect',
    title: {
      label: "On select tree node",
      tip: "On select tree node"
    },
    propType: 'func'
  }, {
    name: 'icon',
    title: {
      label: "Custom tree icon",
      tip: "Custom tree icon"
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

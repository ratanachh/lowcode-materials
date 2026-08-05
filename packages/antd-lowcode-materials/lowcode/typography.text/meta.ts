import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Typography.Text',
  title: i18n("文本", "Text"),
  category: "General",
  props: [{
    name: 'children',
    title: {
      label: i18n("内容", "Content"),
      tip: i18n("内容", "Content")
    },
    propType: 'string',
    defaultValue: '',
    supportVariable: true
  }, {
    name: 'code',
    title: {
      label: i18n("添加代码样式", "Code style"),
      tip: i18n("添加代码样式", "Code style")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'delete',
    title: {
      label: i18n("添加删除线样式", "Strikethrough"),
      tip: i18n("添加删除线样式", "Strikethrough")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'disabled',
    title: {
      label: i18n("是否禁用", "Disabled"),
      tip: i18n("是否为禁用状态", "Whether disabled")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'mark',
    title: {
      label: i18n("添加标记样式", "Mark style"),
      tip: i18n("添加标记样式", "Mark style")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'keyboard',
    title: {
      label: i18n("添加键盘样式", "Keyboard style"),
      tip: i18n("添加键盘样式", "Keyboard style")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'underline',
    title: {
      label: i18n("添加下划线样式", "Underline"),
      tip: i18n("添加下划线样式", "Underline")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'strong',
    title: {
      label: i18n("是否加粗", "Bold"),
      tip: i18n("是否加粗", "Bold")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'type',
    title: {
      label: i18n("文本类型", "Text type"),
      tip: i18n("文本类型", "Text type")
    },
    propType: {
      type: 'oneOf',
      value: ['secondary', 'warning', 'danger']
    },
    setter: {
      componentName: 'SelectSetter',
      props: {
        options: [{
          title: i18n("默认", "Default"),
          value: 'default'
        }, {
          title: i18n("弱提示", "Info"),
          value: 'secondary'
        }, {
          title: i18n("成功", "Success"),
          value: 'success'
        }, {
          title: i18n("警告", "Warning"),
          value: 'warning'
        }, {
          title: i18n("错误", "Error"),
          value: 'danger'
        }]
      }
    }
  }, {
    title: i18n("高级", "Advanced"),
    type: 'group',
    display: 'accordion',
    items: [{
      name: 'copyable',
      title: {
        label: i18n("是否可拷贝", "Copyable"),
        tip: i18n("是否可拷贝", "Copyable")
      },
      propType: {
        type: 'oneOfType',
        value: ['bool', 'object']
      },
      setter: [{
        componentName: 'BoolSetter',
        isRequired: false,
        initialValue: false
      }, {
        componentName: 'JsonSetter',
        isRequired: false
      }]
    }, {
      name: 'editable',
      title: {
        label: i18n("是否可编辑", "Editable"),
        tip: i18n("是否可编辑", "Editable")
      },
      propType: {
        type: 'oneOfType',
        value: ['bool', 'object']
      },
      setter: [{
        componentName: 'BoolSetter',
        isRequired: false,
        initialValue: false
      }, {
        componentName: 'JsonSetter',
        isRequired: false
      }]
    }, {
      name: 'ellipsis',
      title: {
        label: i18n("自动溢出省略", "Auto ellipsis"),
        tip: i18n("设置自动溢出省略，需要设置元素宽度", "To set automatic overflow omission, you need to set the element width")
      },
      propType: {
        type: 'oneOfType',
        value: ['bool', 'object']
      },
      setter: [{
        componentName: 'BoolSetter',
        isRequired: false,
        initialValue: false
      }, {
        componentName: 'JsonSetter',
        isRequired: false
      }]
    }]
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'copyable.onCopy',
        template: "onCopy(${extParams}){\n// Callback function for successful copy\nconsole.log('onCopy');}"
      }, {
        name: 'editable.onStart',
        template: "onStart(${extParams}){\n// Triggered when entering the editing state\nconsole.log('onStart');}"
      }, {
        name: 'editable.onChange',
        template: "onChange(event,${extParams}){\n// Triggered when text field is edited\nconsole.log('onChange', event);}"
      }, {
        name: 'editable.onEnd',
        template: "onEnd(${extParams}){\n// Triggered when pressing ENTER to end the editing state\nconsole.log('onEnd');}"
      }, {
        name: 'editable.onCancel',
        template: "onCancel(${extParams}){\n// Triggered when pressing ESC to exit the editing state\nconsole.log('onCancel');}"
      }, {
        name: 'ellipsis.onEllipsis',
        template: "onEllipsis(ellipsis,${extParams}){\n// Callback when omission is triggered\nconsole.log('onEllipsis', ellipsis);}"
      }, {
        name: 'ellipsis.onExpand',
        template: "onExpand(event,${extParams}){\n// Click Expand on callback\nconsole.log('onExpand', event);}"
      }]
    }
  }
};

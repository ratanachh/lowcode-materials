import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Typography.Title',
  title: i18n("标题", "Title"),
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
    name: 'level',
    title: {
      label: i18n("重要程度", "importance"),
      tip: i18n("重要程度(1-5)", "Importance (1-5)")
    },
    propType: 'number',
    defaultValue: 1
  }, {
    name: 'code',
    title: {
      label: i18n("添加代码样式", "Code style"),
      tip: i18n("添加代码样式", "Code style")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'copyable',
    title: {
      label: i18n("是否可拷贝", "Copyable"),
      tip: i18n("是否可拷贝", "Copyable")
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
    name: 'editable',
    title: {
      label: i18n("是否可编辑", "Editable"),
      tip: i18n("是否可编辑", "Editable")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'ellipsis',
    title: {
      label: i18n("自动溢出省略", "Auto ellipsis"),
      tip: i18n("设置自动溢出省略，需要设置元素宽度", "To set automatic overflow omission, you need to set the element width")
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
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

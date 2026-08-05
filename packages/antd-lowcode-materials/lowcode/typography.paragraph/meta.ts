import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Typography.Paragraph',
  title: i18n("段落", "Paragraph"),
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
    name: 'copyable',
    title: {
      label: i18n("是否可拷贝", "Copyable"),
      tip: i18n("是否可拷贝，为对象时可进行各种自定义", "Whether it can be copied and can be customized in various ways when it is an object")
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
      tip: i18n("自动溢出省略", "Auto ellipsis")
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
    name: 'underline',
    title: {
      label: i18n("添加下划线样式", "Underline"),
      tip: i18n("添加下划线样式", "Underline")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'onChange',
    title: {
      label: i18n("当用户提交编辑内容时触发", "Triggered when user submits edit content"),
      tip: i18n("当用户提交编辑内容时触发", "Triggered when user submits edit content")
    },
    propType: 'func'
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
      value: ['default', 'secondary', 'success', 'warning', 'danger']
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
      style: true,
      events: ['onChange']
    }
  }
};

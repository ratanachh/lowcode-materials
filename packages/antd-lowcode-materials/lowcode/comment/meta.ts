import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Comment',
  title: i18n("评论", "Comment"),
  category: "Data Display",
  props: [{
    name: 'actions',
    title: {
      label: i18n("操作列表", "Operation list"),
      tip: i18n("在评论内容下面呈现的操作项列表", "List of action items rendered below the comment content")
    },
    propType: {
      type: 'arrayOf',
      value: 'node'
    }
  }, {
    name: 'author',
    title: {
      label: i18n("要显示为注释作者的元素", "The element to display as the author of the comment"),
      tip: i18n("要显示为注释作者的元素", "The element to display as the author of the comment")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'avatar',
    title: {
      label: i18n("头像元素", "avatar element"),
      tip: i18n("要显示为评论头像的元素 - 通常是 antd Avatar 或者 src", "The element to display as the comment avatar - usually antd Avatar or src")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'children',
    title: {
      label: i18n("子节点", "Child node"),
      tip: i18n("嵌套注释应作为注释的子项提供", "Nested annotations should be provided as children of annotations")
    },
    propType: 'node'
  }, {
    name: 'content',
    title: {
      label: i18n("评论的主要内容", "Main content of the review"),
      tip: i18n("评论的主要内容", "Main content of the review")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'datetime',
    title: {
      label: i18n("展示时间描述", "Display time description"),
      tip: i18n("展示时间描述", "Display time description")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

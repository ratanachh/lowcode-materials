import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Skeleton',
  title: i18n("骨架屏", "Skeleton"),
  category: "Feedback",
  props: [{
    name: 'active',
    title: {
      label: i18n("动画效果", "Animation"),
      tip: i18n("是否展示动画效果", "Whether to display animation effects")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'avatar',
    title: {
      label: i18n("头像占位图", "Avatar placeholder image"),
      tip: i18n("是否显示头像占位图", "Whether to display the avatar placeholder image")
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'object']
    }
  }, {
    name: 'loading',
    title: {
      label: i18n("加载中", "Loading"),
      tip: i18n("为 true 时，显示占位图。反之则直接展示子组件", "When true, the placeholder image is displayed. Otherwise, display the subcomponent directly")
    },
    propType: 'bool'
  }, {
    name: 'paragraph',
    title: {
      label: i18n("段落占位图", "Paragraph placeholder image"),
      tip: i18n("是否显示段落占位图", "Whether to display paragraph placeholder images")
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'object']
    }
  }, {
    name: 'title',
    title: {
      label: i18n("标题占位图", "Title placeholder image"),
      tip: i18n("是否显示标题占位图", "Whether to display the title placeholder image")
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'object']
    }
  }, {
    name: 'round',
    title: {
      label: i18n("圆角", "Round"),
      tip: i18n("为 true 时，段落和标题显示圆角", "When true, paragraphs and headings display rounded corners")
    },
    propType: 'bool',
    defaultValue: false
  }],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      style: true
    }
  }
};

import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("一级标题", "Heading"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/typography-title-1.png',
  schema: {
    componentName: 'Typography.Title',
    props: {
      level: 1,
      children: "Heading"
    }
  }
}, {
  title: i18n("二级标题", "Level 2 heading"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/typography-title-2.png',
  schema: {
    componentName: 'Typography.Title',
    props: {
      level: 2,
      children: "Level 2 heading"
    }
  }
}, {
  title: i18n("三级标题", "Level 3 headings"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/typography-title-3.png',
  schema: {
    componentName: 'Typography.Title',
    props: {
      level: 3,
      children: "Level 3 headings"
    }
  }
}, {
  title: i18n("四级标题", "Level 4 heading"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/typography-title-4.png',
  schema: {
    componentName: 'Typography.Title',
    props: {
      level: 4,
      children: "Level 4 heading"
    }
  }
}];

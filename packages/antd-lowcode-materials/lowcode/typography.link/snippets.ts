import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("链接", "Link"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/typography-link-1.png',
  schema: {
    componentName: 'Typography.Link',
    props: {
      href: 'https://alibaba.com',
      target: '_blank',
      children: "Link"
    }
  }
}];

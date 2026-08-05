import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("文本", "Text"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/typography-text-1.png',
  schema: {
    componentName: 'Typography.Text',
    props: {
      children: 'text'
    }
  }
}, {
  title: i18n("可复制文本", "Copiable text"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/typography-text-2.png',
  schema: {
    componentName: 'Typography.Text',
    props: {
      copyable: true,
      children: 'text'
    }
  }
}, {
  title: i18n("可编辑文本", "Can EditText"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/typography-text-3.png',
  schema: {
    componentName: 'Typography.Text',
    props: {
      editable: true,
      children: 'text'
    }
  }
}];

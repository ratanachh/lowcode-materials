import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("上传", "Upload"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/upload-1.png',
  schema: {
    componentName: 'Upload',
    props: {},
    children: {
      componentName: 'Button',
      props: {
        children: 'Upload'
      }
    }
  }
}];

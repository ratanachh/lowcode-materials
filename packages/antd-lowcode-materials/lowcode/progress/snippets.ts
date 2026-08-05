import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("进度条", "Progress"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/progress-1.png',
  schema: {
    componentName: 'Progress',
    props: {
      percent: 20,
      status: 'active'
    }
  }
}, {
  title: i18n("进度圈", "progress circle"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/progress-2.png',
  schema: {
    componentName: 'Progress',
    props: {
      percent: 20,
      type: 'circle'
    }
  }
}];

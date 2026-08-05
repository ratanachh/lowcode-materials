import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("成功提示", "SuccessTip"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/alert-1.png',
  schema: {
    componentName: 'Alert',
    props: {
      message: 'Success Tips',
      description: 'Detailed description and advice about successful copywriting.',
      type: 'success',
      showIcon: true
    }
  }
}, {
  title: i18n("信息提示", "InfoTip"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/alert-2.png',
  schema: {
    componentName: 'Alert',
    props: {
      message: 'Informational Notes',
      description: 'Additional description and information about copywriting.',
      type: 'info',
      showIcon: true
    }
  }
}, {
  title: i18n("警告提示", "Alert"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/alert-3.png',
  schema: {
    componentName: 'Alert',
    props: {
      message: 'Warning',
      description: 'This is a warning notice about copywriting.',
      type: 'warning',
      showIcon: true
    }
  }
}, {
  title: i18n("错误提示", "ErrorTip"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/alert-4.png',
  schema: {
    componentName: 'Alert',
    props: {
      message: 'Error',
      description: 'This is an error message about copywriting.',
      type: 'error',
      showIcon: true
    }
  }
}];

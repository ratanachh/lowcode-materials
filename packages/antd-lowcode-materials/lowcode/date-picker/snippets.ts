import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("选择日期", "Select Date"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/date-picker-1.png',
  schema: {
    componentName: 'DatePicker',
    props: {}
  }
}, {
  title: i18n("选择周", "Select Week"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/date-picker-2.png',
  schema: {
    componentName: 'DatePicker',
    props: {
      picker: 'week'
    }
  }
}, {
  title: i18n("选择月份", "Select Month"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/date-picker-3.png',
  schema: {
    componentName: 'DatePicker',
    props: {
      picker: 'month'
    }
  }
}, {
  title: i18n("选择季度", "Select quarter"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/date-picker-4.png',
  schema: {
    componentName: 'DatePicker',
    props: {
      picker: 'quarter'
    }
  }
}, {
  title: i18n("选择年份", "Select Year"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/date-picker-5.png',
  schema: {
    componentName: 'DatePicker',
    props: {
      picker: 'year'
    }
  }
}];

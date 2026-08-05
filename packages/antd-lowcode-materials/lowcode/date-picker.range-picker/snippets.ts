import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("日期区间", "date range"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/date-picker-range-picker-1.png',
  schema: {
    componentName: 'DatePicker.RangePicker',
    props: {}
  }
}, {
  title: i18n("周区间", "Weekly interval"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/date-picker-range-picker-2.png',
  schema: {
    componentName: 'DatePicker.RangePicker',
    props: {
      picker: 'week'
    }
  }
}, {
  title: i18n("月区间", "Monthly range"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/date-picker-range-picker-3.png',
  schema: {
    componentName: 'DatePicker.RangePicker',
    props: {
      picker: 'month'
    }
  }
}, {
  title: i18n("年区间", "annual interval"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/date-picker-range-picker-4.png',
  schema: {
    componentName: 'DatePicker.RangePicker',
    props: {
      picker: 'year'
    }
  }
}];

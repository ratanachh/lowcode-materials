import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("分页", "Pagination"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/pagination-1.jpg',
  schema: {
    componentName: 'Pagination',
    props: {
      pageSize: 10,
      total: 50,
      current: 1
    }
  }
}];

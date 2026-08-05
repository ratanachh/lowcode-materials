import { uuid } from '../_utils/utils';
import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("穿梭框", "Transfer"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/transfer-1.png',
  schema: {
    componentName: 'Transfer',
    props: {
      dataSource: [{
        key: uuid(),
        title: 'content1'
      }, {
        key: uuid(),
        title: 'content2'
      }, {
        key: uuid(),
        title: 'content3'
      }, {
        key: uuid(),
        title: 'content4'
      }, {
        key: uuid(),
        title: 'content5'
      }],
      render: {
        type: 'JSFunction',
        value: `function renderItem(record, extParams) {
            return record.title;
          }`
      }
    }
  }
}];

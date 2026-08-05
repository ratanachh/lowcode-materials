import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("树选择", "TreeSelect"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tree-select-1.png',
  schema: {
    componentName: 'TreeSelect',
    props: {
      treeData: [{
        title: 'parent 0',
        value: '0-0',
        children: [{
          title: 'leaf 0-0',
          value: '0-0-0',
          isLeaf: true
        }, {
          title: 'leaf 0-1',
          value: '0-0-1',
          isLeaf: true
        }]
      }, {
        title: 'parent 1',
        value: '0-1',
        children: [{
          title: 'leaf 1-0',
          value: '0-1-0',
          isLeaf: true
        }, {
          title: 'leaf 1-1',
          value: '0-1-1',
          isLeaf: true
        }]
      }],
      treeDefaultExpandAll: true,
      placeholder: "Please select",
      style: {
        width: '300px'
      }
    }
  }
}];

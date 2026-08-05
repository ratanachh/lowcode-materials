export default [{
  title: "Table",
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/table-1.png',
  schema: {
    componentName: 'Table',
    props: {
      dataSource: [{
        id: '1',
        name: "Hu Yanbin",
        age: 32,
        address: "No. 1, Hudi Park, Xihu District"
      }, {
        id: '2',
        name: "Wang Yibo",
        age: 28,
        address: "No. 699, Wangshang Road, Binjiang District"
      }],
      columns: [{
        title: "Name",
        dataIndex: 'name',
        key: 'name'
      }, {
        title: "Age",
        dataIndex: 'age',
        key: 'age'
      }],
      rowKey: 'id',
      pagination: {
        pageSize: 10,
        total: 15,
        current: 1
      }
    }
  }
}];

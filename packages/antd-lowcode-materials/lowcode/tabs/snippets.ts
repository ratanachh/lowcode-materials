export default [{
  title: "Normal",
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tabs-1.jpg',
  schema: {
    componentName: 'Tabs',
    props: {
      type: 'line',
      items: [{
        label: "Tab 1",
        key: 'tab-item-1',
        children: {
          type: 'JSSlot',
          value: []
        }
      }, {
        label: "Tab 2",
        key: 'tab-item-2',
        children: {
          type: 'JSSlot',
          value: []
        }
      }]
    }
  }
}, {
  title: "card type",
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tabs-2.jpg',
  schema: {
    componentName: 'Tabs',
    props: {
      type: 'card',
      items: [{
        label: "Tab 1",
        key: 'tab-item-1',
        children: {
          type: 'JSSlot',
          value: []
        }
      }, {
        label: "Tab 2",
        key: 'tab-item-2',
        children: {
          type: 'JSSlot',
          value: []
        }
      }]
    }
  }
}, {
  title: "Can EditCard",
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tabs-3.jpg',
  schema: {
    componentName: 'Tabs',
    props: {
      type: 'editable-card',
      items: [{
        label: "Tab 1",
        key: 'tab-item-1',
        children: {
          type: 'JSSlot',
          value: []
        }
      }, {
        label: "Tab 2",
        key: 'tab-item-2',
        children: {
          type: 'JSSlot',
          value: []
        }
      }]
    }
  }
}];

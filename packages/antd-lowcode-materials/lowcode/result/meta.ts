import snippets from './snippets';
export default {
  snippets,
  componentName: 'Result',
  title: "Result",
  category: "Feedback",
  props: [{
    name: 'title',
    title: {
      label: "Title",
      tip: "title Text"
    },
    propType: 'node'
  }, {
    name: 'subTitle',
    title: {
      label: "subtitle",
      tip: "subTitle Text"
    },
    propType: 'node'
  }, {
    name: 'status',
    title: {
      label: "Status",
      tip: "The status of the result, which determines the icon and color"
    },
    propType: {
      type: 'oneOf',
      value: ['success', 'error', 'info', 'warning', '404', '403', '500']
    }
  }, {
    name: 'icon',
    title: {
      label: "Custom icon",
      tip: "Custom icon"
    },
    propType: 'node'
  }, {
    name: 'extra',
    title: {
      label: "Actions",
      tip: "Actions"
    },
    propType: 'node'
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

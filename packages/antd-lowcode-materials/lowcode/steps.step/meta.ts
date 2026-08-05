import snippets from './snippets';
export default {
  snippets,
  componentName: 'Steps.Step',
  title: "step item",
  props: [{
    name: 'title',
    title: {
      label: "Title",
      tip: "Title"
    },
    propType: 'string'
  }, {
    name: 'subTitle',
    title: {
      label: "Subtitle",
      tip: "Subtitle"
    },
    propType: 'string'
  }, {
    name: 'description',
    title: {
      label: "Step description",
      tip: "Step description"
    },
    propType: 'string'
  }, {
    name: 'disabled',
    title: {
      label: "Disabled",
      tip: "Whether disabled"
    },
    propType: 'bool'
  }, {
    name: 'icon',
    title: {
      label: "Icon",
      tip: "Icon"
    },
    propType: 'node'
  }, {
    name: 'status',
    title: {
      label: "Status",
      tip: "Status"
    },
    propType: 'string'
  }],
  configure: {
    component: {
      nestingRule: {
        parentWhitelist: ['Steps']
      }
    },
    supports: {
      style: true
    }
  }
};

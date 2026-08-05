import snippets from './snippets';
export default {
  snippets,
  componentName: 'BackTop',
  title: "BackTop",
  category: "Other",
  props: [{
    name: 'target',
    title: {
      label: "Listen element",
      tip: "Set the element whose scroll event needs to be monitored. The value is a function that returns the corresponding DOM element."
    },
    propType: 'func'
  }, {
    name: 'visibilityHeight',
    title: {
      label: "Visible height",
      tip: "BackTop will not appear until the scroll height reaches this parameter value."
    },
    propType: 'number'
  }, {
    name: 'onClick',
    title: {
      label: "Click Button callback",
      tip: "Click Button callback"
    },
    propType: 'func'
  }, {
    name: 'duration',
    title: {
      label: "Scroll Time",
      tip: "Time required to return to top (ms)"
    },
    propType: 'number'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onClick',
        template: "onClick(${extParams}){\n// Click Button callback\nconsole.log('onClick');}"
      }]
    }
  }
};

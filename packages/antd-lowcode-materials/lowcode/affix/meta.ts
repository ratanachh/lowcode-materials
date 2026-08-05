import snippets from './snippets';
export default {
  snippets,
  componentName: 'Affix',
  title: "Affix",
  category: "Navigation",
  props: [{
    name: 'offsetBottom',
    title: {
      label: "Bottom trigger distance",
      tip: "Triggered after reaching the specified offset from the bottom of the window"
    },
    propType: 'number'
  }, {
    name: 'offsetTop',
    title: {
      label: "Top trigger distance",
      tip: "Triggered after reaching the specified offset from the top of the window"
    },
    propType: 'number'
  }, {
    name: 'target',
    title: {
      label: "Get trigger element",
      tip: "Set `Affix` to the element whose scroll event needs to be monitored. The value is a function that returns the corresponding DOM element."
    },
    propType: 'func'
  }, {
    name: 'onChange',
    title: {
      label: "Listen for status changes",
      tip: "FixedStatusChange trigger callback"
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(affixed,${extParams}){\n// Fixed state change callback function\nconsole.log('onChange', affixed);}"
      }]
    }
  }
};

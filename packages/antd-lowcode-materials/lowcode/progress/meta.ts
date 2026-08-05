import snippets from './snippets';
export default {
  snippets,
  componentName: 'Progress',
  title: "Progress",
  category: "Feedback",
  props: [{
    name: 'type',
    title: {
      label: "Type",
      tip: "Type"
    },
    propType: {
      type: 'oneOf',
      value: ['line', 'circle', 'dashboard']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: "linear",
          value: 'line'
        }, {
          title: "Round type",
          value: 'circle'
        }, {
          title: "Dashboard",
          value: 'dashboard'
        }]
      }
    },
    defaultValue: 'line'
  }, {
    name: 'format',
    title: {
      label: "ContentFormat",
      tip: "ContentFormat"
    },
    propType: 'func'
  }, {
    name: 'percent',
    title: {
      label: "percentage",
      tip: "percentage"
    },
    propType: 'number'
  }, {
    name: 'showInfo',
    title: {
      label: "Display values ​​or icons",
      tip: "Display values ​​or icons"
    },
    propType: 'bool',
    defaultValue: true
  }, {
    name: 'status',
    title: {
      label: "Status",
      tip: "Status"
    },
    propType: {
      type: 'oneOf',
      value: ['success', 'exception', 'normal', 'active']
    }
  }, {
    name: 'steps',
    title: {
      label: "Total steps",
      tip: "The total number of steps in the progress bar"
    },
    condition(target) {
      // Only valid for line type
      return target.getProps().getPropValue('type') === 'line';
    },
    propType: 'number'
  }, {
    name: 'strokeLinecap',
    title: {
      label: "Progress style",
      tip: "Progress style"
    },
    propType: {
      type: 'oneOf',
      value: ['round', 'square']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: "Round",
          value: 'round'
        }, {
          title: "square corner",
          value: 'square'
        }]
      }
    },
    defaultValue: 'round'
  }, {
    name: 'strokeWidth',
    title: {
      label: "line width",
      tip: "line width"
    },
    propType: 'number'
  }, {
    name: 'strokeColor',
    title: {
      label: "Progress Color",
      tip: "Progress Color"
    },
    propType: 'string',
    condition(target) {
      // Dashboard style is ineffective
      return target.getProps().getPropValue('type') !== 'dashboard';
    },
    setter: 'ColorSetter'
  }, {
    name: 'trailColor',
    title: {
      label: "The color of unfinished segments",
      tip: "The color of unfinished segments"
    },
    propType: 'string',
    setter: 'ColorSetter'
  }, {
    name: 'gapDegree',
    title: {
      label: "Notch angle",
      tip: "The notch angle of the dashboard progress bar, which can range from 0 to 295"
    },
    condition(target) {
      // Only the dashboard style is valid
      return target.getProps().getPropValue('type') === 'dashboard';
    },
    propType: 'number',
    defaultValue: 75
  }, {
    name: 'gapPosition',
    title: {
      label: "Notch position",
      tip: "Dashboard progress bar notch position"
    },
    condition(target) {
      // Only the dashboard style is valid
      return target.getProps().getPropValue('type') === 'dashboard';
    },
    propType: {
      type: 'oneOf',
      value: ['top', 'bottom', 'left', 'right']
    },
    defaultValue: 'bottom'
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

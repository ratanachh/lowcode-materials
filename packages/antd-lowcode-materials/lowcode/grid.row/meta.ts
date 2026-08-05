import snippets from './snippets';
export default {
  snippets,
  componentName: 'Row',
  title: "Grid-Row",
  category: "Layout",
  props: [{
    name: 'align',
    title: {
      label: "VerticalAlign",
      tip: "VerticalAlign"
    },
    propType: {
      type: 'oneOf',
      value: ['top', 'middle', 'bottom']
    }
  }, {
    name: 'h-gutter',
    title: {
      label: "HorizontalGutter",
      tip: "Grid horizontal interval, unit is pixel (px)"
    },
    propType: 'number',
    setter: {
      componentName: 'NumberSetter',
      props: {
        min: 0
      }
    },
    defaultValue: 0,
    extraProps: {
      getValue(target) {
        const {
          node
        } = target;
        const gutter = node.getPropValue('gutter');
        if (typeof gutter === 'number') {
          return gutter;
        } else if (Array.isArray(gutter)) {
          return gutter[0];
        }
        return 0;
      },
      setValue(target, value) {
        const {
          node
        } = target;
        const gutter = node.getPropValue('gutter');
        if (Array.isArray(gutter)) {
          gutter[0] = value;
          node.setPropValue('gutter', gutter);
        } else {
          node.setPropValue('gutter', [value, 0]);
        }
      }
    }
  }, {
    name: 'v-gutter',
    title: {
      label: "VerticalGutter",
      tip: "Grid vertical spacing in pixels (px)"
    },
    propType: 'number',
    setter: {
      componentName: 'NumberSetter',
      props: {
        min: 0
      }
    },
    defaultValue: 0,
    extraProps: {
      getValue(target) {
        const {
          node
        } = target;
        const gutter = node.getPropValue('gutter');
        if (typeof gutter === 'number') {
          return 0;
        } else if (Array.isArray(gutter)) {
          return gutter[1];
        }
        return 0;
      },
      setValue(target, value) {
        const {
          node
        } = target;
        const gutter = node.getPropValue('gutter');
        if (Array.isArray(gutter)) {
          gutter[1] = value;
          node.setPropValue('gutter', gutter);
        } else {
          node.setPropValue('gutter', [gutter, value]);
        }
      }
    }
  }, {
    name: 'justify',
    title: {
      label: "horizontal arrangement",
      tip: "horizontal arrangement"
    },
    propType: {
      type: 'oneOf',
      value: ['start', 'end', 'center', 'space-around', 'space-between']
    }
  }, {
    name: 'wrap',
    title: {
      label: "Automatic line wrapping",
      tip: "Auto wrap"
    },
    propType: 'bool',
    defaultValue: true
  }],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        childWhitelist: ['Col']
      }
    },
    supports: {
      style: true
    }
  }
};

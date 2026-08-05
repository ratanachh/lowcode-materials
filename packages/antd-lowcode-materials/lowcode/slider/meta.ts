import snippets from './snippets';
export default {
  snippets,
  componentName: 'Slider',
  title: "sliding input bar",
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: "Default value",
      tip: "Set initial value. When `range` is false, use number, otherwise use \\[number, number]"
    },
    propType: {
      type: 'oneOfType',
      value: ['number', {
        type: 'arrayOf',
        value: 'number'
      }]
    }
  }, {
    name: 'range',
    title: {
      label: "Dual slider mode",
      tip: "Dual slider mode"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter',
    setValue(target, range) {
      let defaultValue = target.node.getPropValue('defaultValue');
      if (range) {
        defaultValue = Array.isArray(defaultValue) ? defaultValue : [0, defaultValue];
      } else {
        defaultValue = Array.isArray(defaultValue) ? defaultValue[1] || defaultValue[0] : defaultValue;
      }
      target.node.setPropValue('defaultValue', defaultValue);
    }
  },
  // {
  //   name: 'value',
  //   title: {
  // label: 'Current value',
  //     tip:
  // 'Set the current value. When `range` is false, use number, otherwise use \\[number, number]',
  //   },
  //   propType: {
  //     type: 'oneOfType',
  //     value: ['number', { type: 'arrayOf', value: 'number' }],
  //   },
  // },
  {
    name: 'allowClear',
    title: {
      label: "Allow clear",
      tip: "Whether allow clear"
    },
    condition(target) {
      return target.getProps().getPropValue('range') === true;
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'disabled',
    title: {
      label: "Disabled",
      tip: "Whether disabled"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'dots',
    title: {
      label: "Alignment scale",
      tip: "Whether it can only be dragged to the scale"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  },
  // {
  //   name: 'included',
  //   title: {
  //     label:
  // '`marks` is valid when it is not an empty object. When the value is true, it means that the value is an inclusion relationship, and false means that it is parallel',
  //     tip:
  // '`marks` is valid when it is not an empty object. When the value is true, it means that the value is an inclusion relationship, and false means that it is parallel',
  //   },
  //   propType: 'bool',
  //   defaultValue: true,
  // },
  // {
  //   name: 'marks',
  //   title: {
  //     label:
  // 'Tick mark, the type of key must be `number` and the value must be within the closed interval \\[min, max], each label can be styled independently',
  //     tip:
  // 'Tick mark, the type of key must be `number` and the value must be within the closed interval \\[min, max], each label can be styled independently',
  //   },
  //   propType: 'object',
  // },
  {
    name: 'max',
    title: {
      label: "Max",
      tip: "Max"
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'min',
    title: {
      label: "Min",
      tip: "Min"
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'reverse',
    title: {
      label: "reverse axis",
      tip: "reverse axis"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'step',
    title: {
      label: "Step",
      tip: "Step size, the value must be greater than 0 and divisible by (max - min). When `marks` is not an empty object, you can set `step` to null. At this time, the optional value of Slider is only the part marked by marks."
    },
    propType: 'number',
    setter: 'NumberSetter'
  },
  // {
  //   name: 'tipFormatter',
  //   title: {
  //     label:
  // 'Slider will pass the current value to `tipFormatter` and display the return value of `tipFormatter` in the Tooltip. If it is null, the Tooltip will be hidden',
  //     tip:
  // 'Slider will pass the current value to `tipFormatter` and display the return value of `tipFormatter` in the Tooltip. If it is null, the Tooltip will be hidden',
  //   },
  //   propType: 'func',
  // },
  {
    name: 'vertical',
    title: {
      label: "VerticalDirection",
      tip: "When the value is true, the Slider is vertically oriented"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'onAfterChange',
    title: {
      label: "Consistent with `onmouseup` triggering time, the current value is passed in as a parameter",
      tip: "Consistent with `onmouseup` triggering time, the current value is passed in as a parameter"
    },
    propType: 'func'
  }, {
    name: 'onChange',
    title: {
      label: "When the value of Slider changes, the onChange event will be triggered and the changed value will be passed in as a parameter.",
      tip: "When the value of Slider changes, the onChange event will be triggered and the changed value will be passed in as a parameter."
    },
    propType: 'func'
  }
  // {
  //   name: 'tooltipPlacement',
  //   title: {
  // label: 'Set Tooltip placement. Reference [Tooltip](/components/tooltip/)',
  // tip: 'Set Tooltip placement. Reference [Tooltip](/components/tooltip/)',
  //   },
  //   propType: 'string',
  // },
  // {
  //   name: 'tooltipVisible',
  //   title: {
  //     label:
  // 'When the value is true, the Tooltip will always be displayed; otherwise it will not be displayed, even when dragging and moving',
  //     tip:
  // 'When the value is true, the Tooltip will always be displayed; otherwise it will not be displayed, even when dragging and moving',
  //   },
  //   propType: 'bool',
  // },
  // {
  //   name: 'getTooltipPopupContainer',
  //   title: {
  // label: 'Tooltip parent node; defaults to body',
  // tip: 'Tooltip parent node; defaults to body',
  //   },
  //   propType: 'func',
  // },
  ],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onAfterChange',
        template: "onAfterChange(value,${extParams}){\n// Consistent with onmouseup triggering timing\nconsole.log('onAfterChange',value);}"
      }, {
        name: 'onChange',
        template: "onChange(value,${extParams}){\n// The callback is triggered when the value of Slider changes\nconsole.log('onChange',value);}"
      }]
    }
  }
};

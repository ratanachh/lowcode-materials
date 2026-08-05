import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Slider',
  title: i18n("滑动输入条", "sliding input bar"),
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: i18n("默认值", "Default value"),
      tip: i18n("设置初始取值。当 `range` 为 false 时，使用 number，否则用 \\[number, number]", "设置初始取值。当 `range` 为 false 时，使用 number，否则用 \\[number, number]")
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
      label: i18n("双滑块模式", "Dual slider mode"),
      tip: i18n("双滑块模式", "Dual slider mode")
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
      label: i18n("支持清除", "Allow clear"),
      tip: i18n("是否允许清除", "Whether allow clear")
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
      label: i18n("是否禁用", "Disabled"),
      tip: i18n("是否为禁用状态", "Whether disabled")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'dots',
    title: {
      label: i18n("对齐刻度", "Alignment scale"),
      tip: i18n("是否只能拖拽到刻度上", "Whether it can only be dragged to the scale")
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
      label: i18n("最大值", "Max"),
      tip: i18n("最大值", "Max")
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'min',
    title: {
      label: i18n("最小值", "Min"),
      tip: i18n("最小值", "Min")
    },
    propType: 'number',
    setter: 'NumberSetter'
  }, {
    name: 'reverse',
    title: {
      label: i18n("反向坐标轴", "reverse axis"),
      tip: i18n("反向坐标轴", "reverse axis")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'step',
    title: {
      label: i18n("步长", "Step"),
      tip: i18n("步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 null，此时 Slider 的可选值仅有 marks 标出来的部分", "Step size, the value must be greater than 0 and divisible by (max - min). When `marks` is not an empty object, you can set `step` to null. At this time, the optional value of Slider is only the part marked by marks.")
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
      label: i18n("垂直方向", "VerticalDirection"),
      tip: i18n("值为 true 时，Slider 为垂直方向", "When the value is true, the Slider is vertically oriented")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'onAfterChange',
    title: {
      label: i18n("与 `onmouseup` 触发时机一致，把当前值作为参数传入", "Consistent with `onmouseup` triggering time, the current value is passed in as a parameter"),
      tip: i18n("与 `onmouseup` 触发时机一致，把当前值作为参数传入", "Consistent with `onmouseup` triggering time, the current value is passed in as a parameter")
    },
    propType: 'func'
  }, {
    name: 'onChange',
    title: {
      label: i18n("当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入", "When the value of Slider changes, the onChange event will be triggered and the changed value will be passed in as a parameter."),
      tip: i18n("当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入", "When the value of Slider changes, the onChange event will be triggered and the changed value will be passed in as a parameter.")
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

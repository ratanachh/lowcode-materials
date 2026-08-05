import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Input.Group',
  title: i18n("输入框组合", "Input box combination"),
  category: "Data Entry",
  props: [{
    name: 'compact',
    title: {
      label: i18n("紧凑模式", "compact mode"),
      tip: i18n("是否用紧凑模式", "Whether to use compact mode")
    },
    propType: 'bool',
    setter: 'BoolSetter'
  }, {
    name: 'size',
    title: {
      label: i18n("尺寸", "Size"),
      tip: i18n("尺寸大小", "SizeSize")
    },
    propType: {
      type: 'oneOf',
      value: ['large', 'default', 'small']
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: i18n("大", "Large"),
          value: 'large'
        }, {
          title: i18n("中", "Middle"),
          value: 'middle'
        }, {
          title: i18n("小", "Small"),
          value: 'small'
        }]
      }
    },
    defaultValue: 'default'
  }],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      style: true
    }
  }
};

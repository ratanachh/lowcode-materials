import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Segmented',
  title: i18n("分段控制器", "Segmentation controller"),
  category: "Data Display",
  group: "Atomic Components",
  props: [{
    name: 'block',
    title: {
      label: 'block ',
      tip: i18n("将宽度调整为父元素宽度的选项 ", "Option to adjust width to parent element width")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'defaultValue',
    title: {
      label: i18n("默认值", "Default value"),
      tip: i18n("默认的选中项", "Default selected keys")
    },
    setter: ['StringSetter', 'NumberSetter']
  }, {
    name: 'disabled',
    title: {
      label: i18n("禁用", "Disabled"),
      tip: i18n("是否禁用", "Disabled")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'options',
    title: {
      label: i18n("配置内容", "configContent"),
      tip: i18n("数据化配置选项内容", "Data configuration options content")
    },
    setter: ['JsonSetter', 'VariableSetter']
  }, {
    name: 'size',
    title: {
      label: i18n("控件尺寸", "Control size"),
      tip: i18n("控件尺寸", "Control size")
    },
    propType: {
      type: 'oneOf',
      value: ['large', 'middle', 'small']
    },
    setter: {
      componentName: 'SelectSetter',
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
    defaultValue: 'middle'
  }
  // {
  //   name: 'value',
  // title: { label: 'Selected item', tip: 'Current selected item' },
  //   propType: {
  //     type: 'arrayOf',
  //     value: { type: 'oneOfType', value: ['string', 'number'] },
  //   },
  // },
  ],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(value,selectedOptions,${extParams}){\n// Callback after selection is completed\nconsole.log('onChange', value, selectedOptions);}"
      }]
    }
  }
};

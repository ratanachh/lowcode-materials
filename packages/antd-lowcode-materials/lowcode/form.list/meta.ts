import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  componentName: 'Form.List',
  title: i18n("表单列表", "Data EntryList"),
  category: "Data Entry",
  snippets,
  props: [{
    name: 'name',
    title: {
      label: i18n("字段名", "Field name"),
      tip: i18n("字段名", "Field name")
    },
    isRequired: true,
    propType: 'string'
  }, {
    name: 'initialValue',
    title: {
      label: i18n("默认值", "Default value"),
      tip: i18n("设置子元素默认值，如果与 Form 的 initialValues 冲突则以 Form 为准", "Set the default value of the child element. If it conflicts with the initialValues ​​of the Form, the Form will prevail.")
    },
    propType: 'object',
    setter: 'JsonSetter'
  }],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      className: true,
      style: true
    }
  }
};

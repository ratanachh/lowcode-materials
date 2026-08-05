import snippets from './snippets';
export default {
  componentName: 'Form.List',
  title: "Data EntryList",
  category: "Data Entry",
  snippets,
  props: [{
    name: 'name',
    title: {
      label: "Field name",
      tip: "Field name"
    },
    isRequired: true,
    propType: 'string'
  }, {
    name: 'initialValue',
    title: {
      label: "Default value",
      tip: "Set the default value of the child element. If it conflicts with the initialValues ​​of the Form, the Form will prevail."
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

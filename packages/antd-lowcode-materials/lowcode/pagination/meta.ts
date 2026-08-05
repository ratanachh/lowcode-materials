import snippets from './snippets';
export default {
  snippets,
  componentName: 'Pagination',
  title: "Pagination",
  category: "Navigation",
  props: [{
    title: "Data",
    display: 'block',
    type: 'group',
    items: [{
      name: 'defaultPageSize',
      title: {
        label: "DefaultPage size",
        tip: "defaultPageSize | DefaultPage size"
      },
      propType: 'number',
      setter: 'NumberSetter',
      defaultValue: 10
    }, {
      name: 'pageSize',
      title: {
        label: "Page size",
        tip: "pageSize | Page size"
      },
      propType: 'number',
      setter: 'NumberSetter',
      defaultValue: 10
    }, {
      name: 'total',
      title: {
        label: "Total",
        tip: "total | Total"
      },
      propType: 'number',
      setter: 'NumberSetter',
      defaultValue: 15
    }, {
      name: 'defaultCurrent',
      title: {
        label: "Default current page",
        tip: "defaultCurrent | Default Current page"
      },
      propType: 'number',
      setter: 'NumberSetter',
      defaultValue: 1
    }, {
      name: 'current',
      title: {
        label: "Current page",
        tip: "current | Current page"
      },
      propType: 'number',
      setter: 'NumberSetter',
      defaultValue: 1
    }]
  }, {
    title: "Function",
    display: 'block',
    type: 'group',
    items: [{
      name: 'disabled',
      title: {
        label: "Disabled",
        tip: "disabled | Disabled"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'showSizeChanger',
      title: {
        label: "Page size changer",
        tip: "showSizeChanger | Whether to display pageSize switcher"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'showQuickJumper',
      title: {
        label: "Quick jumper",
        tip: "showQuickJumper | Whether you can quickly jump to a page"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'hideOnSinglePage',
      title: {
        label: "Single page hidden",
        tip: "hideOnSinglePage | Whether to hide the pager when there is only one page"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'showLessItems',
      title: {
        label: "Show fewer pages",
        tip: "showLessItems | Whether to display less page content"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'pageSizeOptions',
      title: {
        label: "Optional number of pages",
        tip: "pageSizeOptions | Specify the number of items per page that can be selected by the pageSize switcher"
      },
      propType: 'object',
      setter: 'JsonSetter'
    }]
  }, {
    title: "Appearance",
    display: 'block',
    type: 'group',
    items: [{
      name: 'simple',
      title: {
        label: "Simple pagination",
        tip: "simple | Simple pagination"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'size',
      title: {
        label: "Pagination size",
        tip: "size | Pagination size"
      },
      propType: {
        type: 'oneOf',
        value: ['default', 'small']
      },
      setter: [{
        componentName: 'RadioGroupSetter',
        props: {
          options: [{
            title: "Default",
            value: 'default'
          }, {
            title: "Small",
            value: 'small'
          }]
        }
      }, 'VariableSetter'],
      defaultValue: 'default'
    }, {
      name: 'showTotal',
      title: {
        label: "Show total",
        tip: "showTotal | Used to display the total amount of data and the current data sequence"
      },
      propType: 'func',
      setter: [{
        componentName: 'FunctionSetter',
        props: {
          template: 'showTotal(total,range,${extParams}){\n// Used to format and display the total amount of table data\nreturn `Total ${total} items`;\n}'
        }
      }, 'VariableSetter']
    }, {
      name: 'showTitle',
      title: {
        label: "Page number hint",
        tip: "showTitle | Whether to display the native tooltip page number prompt"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'responsive',
      title: {
        label: "WidthAuto",
        tip: "responsive | When size is not specified, automatically adjust the size according to the screen width"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }]
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(page,pageSize,${extParams}){\n// Callback for page number or pageSize changes\nconsole.log('onChange',page,pageSize);}"
      }, {
        name: 'onShowSizeChange',
        template: "onShowSizeChange(current,size,${extParams}){\n// pageSize Change callback\nconsole.log('onShowSizeChange',current,size);}"
      }]
    }
  }
};

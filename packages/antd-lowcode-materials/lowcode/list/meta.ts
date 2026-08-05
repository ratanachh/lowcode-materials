import snippets from './snippets';
export default {
  snippets,
  componentName: 'List',
  title: "List",
  category: "Data Display",
  props: [{
    title: "Data source",
    display: 'block',
    type: 'group',
    items: [{
      name: 'dataSource',
      title: {
        label: "ListData source",
        tip: "ListData source"
      },
      propType: {
        type: 'arrayOf',
        value: 'any'
      },
      setter: ['JsonSetter', 'VariableSetter']
    }, {
      name: 'loading',
      title: {
        label: "YesNoLoading",
        tip: "loading | When the card content is still loading, you can use loading to display a placeholder"
      },
      propType: 'bool',
      defaultValue: false,
      setter: ['BoolSetter', 'VariableSetter']
    }, {
      name: 'rowKey',
      title: {
        label: "RowKey",
        tip: "rowKey | When the renderItem custom rendering list item is valid, customize the way to obtain the key of each row"
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'function']
      },
      defaultValue: 'id',
      setter: ['StringSetter', {
        componentName: 'FunctionSetter',
        props: {
          template: 'rowKey(item,${extParams}){\n// Customize the key of each row\nreturn `key-${item.id}`;\n}'
        }
      }, 'VariableSetter']
    }]
  }, {
    title: "Appearance",
    display: 'block',
    type: 'group',
    items: [{
      name: 'itemLayout',
      title: {
        label: "Size",
        tip: "itemLayout | Set the List.Item layout. If set to vertical, the vertical style will be displayed. The default is horizontal."
      },
      propType: {
        type: 'oneOf',
        value: ['horizontal', 'vertical']
      },
      defaultValue: 'horizontal',
      setter: [{
        componentName: 'RadioGroupSetter',
        props: {
          options: [{
            title: "Horizontal",
            value: 'horizontal'
          }, {
            title: "Vertical",
            value: 'vertical'
          }]
        }
      }, 'VariableSetter']
    }, {
      name: 'size',
      title: {
        label: "Size",
        tip: "size | List Size"
      },
      propType: {
        type: 'oneOf',
        value: ['default', 'large', 'small']
      },
      defaultValue: 'default',
      setter: [{
        componentName: 'RadioGroupSetter',
        props: {
          options: [{
            title: "Default",
            value: 'default'
          }, {
            title: "Large",
            value: 'large'
          }, {
            title: "Small",
            value: 'small'
          }]
        }
      }, 'VariableSetter']
    }, {
      name: 'bordered',
      title: {
        label: "Show border",
        tip: "bordered | whether to display borders"
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'split',
      title: {
        label: "Show dividing line",
        tip: "split | whether to display the dividing line"
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }]
  }, {
    title: "Grid",
    display: 'block',
    type: 'group',
    items: [{
      name: 'gridEnable',
      title: {
        label: "enabledGrid",
        tip: "grid | YesNoenabledGrid"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      extraProps: {
        setValue(target, value) {
          if (value === false) {
            const {
              node
            } = target;
            node.setPropValue('grid', false);
          }
        }
      }
    }, {
      name: 'grid.column',
      title: {
        label: "Number of columns",
        tip: "grid.column | The number of columns in the grid"
      },
      propType: 'number',
      setter: 'NumberSetter',
      defaultValue: 4,
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("gridEnable")'
      }
    }, {
      name: 'grid.gutter',
      title: {
        label: "Gutter",
        tip: "grid.gutter | Grid Gutter"
      },
      propType: 'number',
      setter: 'NumberSetter',
      defaultValue: 0,
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("gridEnable")'
      }
    }]
  }, {
    title: "Pagination",
    display: 'block',
    type: 'group',
    items: [{
      name: 'pagination',
      title: {
        label: "ShowPagination",
        tip: "pagination | ShowPagination"
      },
      propType: 'object',
      setter: 'BoolSetter',
      extraProps: {
        setValue: (target, value) => {
          if (value) {
            target.parent.setPropValue('pagination', {
              pageSize: 5
            });
          }
        }
      }
    }, {
      name: 'pagination.pageSize',
      title: {
        label: "Page size",
        tip: "pagination.pageSize | Page size"
      },
      setter: 'NumberSetter',
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("pagination")'
      }
    }, {
      name: 'pagination.total',
      title: {
        label: "Total",
        tip: "pagination.total | Total"
      },
      setter: 'NumberSetter',
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("pagination")'
      }
    },
    // {
    //   name: 'pagination.defaultCurrent',
    //   title: {
    // label: 'Default current page',
    // tip: 'pagination.defaultCurrent | Default Current page',
    //   },
    //   setter: [
    //     {
    //       componentName: 'NumberSetter',
    //       props: {
    //         initialValue: 1,
    //       },
    //     },
    //     'VariableSetter',
    //   ],
    //   condition: {
    //     type: 'JSFunction',
    //     value: 'target => !!target.getProps().getPropValue("pagination")',
    //   },
    // },
    {
      name: 'pagination.current',
      title: {
        label: "Current page",
        tip: "pagination.current | Current page"
      },
      setter: 'NumberSetter',
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("pagination")'
      }
    }, {
      name: 'pagination.showTotal',
      title: {
        label: "Show total",
        tip: "pagination.showTotal | Used to display the total amount of data and the current data sequence"
      },
      propType: 'func',
      setter: [{
        componentName: 'FunctionSetter',
        props: {
          template: 'showTotal(total,range,${extParams}){\n// Used to format and display the total amount of table data\nreturn `Total ${total} items`;\n}'
        }
      }, 'VariableSetter'],
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("pagination")'
      }
    }, {
      name: 'pagination.showSizeChanger',
      title: {
        label: "Page size changer",
        tip: "pagination.showSizeChanger | Whether to display pageSize switcher"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false,
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("pagination")'
      }
    }, {
      name: 'pagination.showQuickJumper',
      title: {
        label: "Quick jumper",
        tip: "pagination.showQuickJumper | Whether you can quickly jump to a page"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false,
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("pagination")'
      }
    }, {
      name: 'pagination.simple',
      title: {
        label: "Simple pagination",
        tip: "pagination.simple | Simple pagination"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false,
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("pagination")'
      }
    }, {
      name: 'pagination.size',
      title: {
        label: "Pagination size",
        tip: "pagination.size | Pagination size"
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
      defaultValue: 'default',
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("pagination")'
      }
    }, {
      name: 'pagination.position',
      title: {
        label: "PaginationPosition",
        tip: "pagination.position | PaginationPosition"
      },
      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [{
            title: "Top",
            value: 'top'
          }, {
            title: "Bottom",
            value: 'bottom'
          }, {
            title: "TopBottom",
            value: 'both'
          }]
        },
        initialValue: 'bottomRight'
      },
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("pagination")'
      }
    }]
  }, {
    title: "Extra",
    display: 'block',
    type: 'group',
    items: [{
      name: 'renderItem',
      title: {
        label: "render function",
        tip: "renderItem | When using dataSource, you can use `renderItem` to customize the rendering list items"
      },
      propType: 'func',
      setter: [{
        componentName: 'SlotSetter',
        title: "Render function slot",
        initialValue: {
          type: 'JSSlot',
          params: ['item'],
          value: [{
            componentName: 'List.Item',
            props: {},
            children: {
              componentName: 'Typography.Text',
              props: {
                children: {
                  type: 'JSExpression',
                  value: 'this.item.text'
                }
              }
            }
          }]
        }
      }, {
        componentName: 'FunctionSetter',
        props: {
          template: 'renderItem(item,${extParams}){\n// CustomRender List item\nreturn `item`;\n}'
        }
      }, 'VariableSetter']
    }, {
      name: 'header',
      title: {
        label: "List header",
        tip: "header | List header"
      },
      propType: 'node',
      setter: {
        componentName: 'SlotSetter',
        initialValue: {
          type: 'JSSlot',
          value: [{
            componentName: 'Typography.Text',
            props: {
              children: "List header"
            }
          }]
        }
      }
    }, {
      name: 'footer',
      title: {
        label: "List footer",
        tip: "footer | List footer"
      },
      propType: 'node',
      setter: {
        componentName: 'SlotSetter',
        initialValue: {
          type: 'JSSlot',
          value: [{
            componentName: 'Typography.Text',
            props: {
              children: "List footer"
            }
          }]
        }
      }
    }, {
      name: 'loadMore',
      title: {
        label: "LoadingMore",
        tip: "loadMore | LoadingMore"
      },
      propType: 'node',
      setter: {
        componentName: 'SlotSetter',
        initialValue: {
          type: 'JSSlot',
          value: [{
            componentName: 'Button',
            props: {
              children: 'loading more'
            }
          }]
        }
      }
    }]
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'pagination.onChange',
        template: 'onChange(page,pageSize,${extParams}){\n// Callback for page number or pageSize change\n}'
      }]
    }
  }
};

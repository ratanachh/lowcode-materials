import snippets from './snippets';
export default {
  snippets,
  componentName: 'Table',
  title: "Table",
  category: "Data Display",
  props: [{
    title: "Data source",
    display: 'block',
    type: 'group',
    items: [{
      name: 'dataSource',
      title: {
        label: "TableData",
        tip: "dataSource | TableData"
      },
      propType: 'object',
      setter: 'JsonSetter',
      supportVariable: true
    }, {
      name: 'loading',
      title: {
        label: "Loading",
        tip: "loading | YesNoLoading"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false,
      supportVariable: true
    }, {
      name: 'rowKey',
      title: {
        label: "RowKey",
        tip: "rowKey | The value of table row key, which can be a string or a function"
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'func']
      },
      setter: ['StringSetter', {
        componentName: 'FunctionSetter',
        props: {
          template: 'getRowKey(record,index,${extParams}){\n// Get row key via function\nreturn record.id;\n}'
        }
      }, 'VariableSetter'],
      defaultValue: 'id'
    }]
  }, {
    name: 'columns',
    title: {
      label: "TableCol",
      tip: "Configuration description of table columns, see the table below for specific items"
    },
    setter: {
      componentName: 'ArraySetter',
      props: {
        itemSetter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [{
                name: 'title',
                title: {
                  label: "ColTitle",
                  tip: "title | ColTitle"
                },
                propType: {
                  type: 'oneOfType',
                  value: ['string', 'func']
                },
                setter: ['StringSetter', {
                  componentName: 'SlotSetter',
                  title: "Column header slot",
                  initialValue: {
                    type: 'JSSlot',
                    params: ['options'],
                    value: []
                  }
                }]
              }, {
                name: 'dataIndex',
                title: {
                  label: "DataField",
                  tip: "dataIndex | DataField"
                },
                propType: 'string',
                setter: 'StringSetter',
                isRequired: true
              }, {
                name: 'key',
                title: {
                  label: 'React key',
                  tip: "key | ReactNeed key"
                },
                propType: 'string',
                setter: 'StringSetter'
              }, {
                name: 'align',
                title: {
                  label: "Align",
                  tip: "align | Align"
                },
                propType: {
                  type: 'oneOf',
                  value: ['left', 'right', 'center']
                },
                defaultValue: 'left',
                setter: [{
                  componentName: 'RadioGroupSetter',
                  props: {
                    options: [{
                      title: 'left',
                      value: 'left'
                    }, {
                      title: 'right',
                      value: 'right'
                    }, {
                      title: 'center',
                      value: 'center'
                    }]
                  }
                }, 'VariableSetter']
              }, {
                name: 'fixed',
                title: {
                  label: "ColYesNoFixed",
                  tip: "fixed | ColYesNoFixed"
                },
                description: "(Invalid under IE) Whether the column is fixed, optional true (equivalent to left) left right",
                defaultValue: '',
                propType: {
                  type: 'oneOf',
                  value: ['', 'left', 'right']
                },
                setter: [{
                  componentName: 'RadioGroupSetter',
                  props: {
                    options: [{
                      title: "Not Fixed",
                      value: ''
                    }, {
                      title: "Fixed Left",
                      value: 'left'
                    }, {
                      title: "Fixed Right",
                      value: 'right'
                    }]
                  }
                }, 'VariableSetter']
              }, {
                name: 'className',
                title: {
                  label: "Col styleclassName",
                  tip: "className | Col styleclassName"
                },
                propType: 'string',
                setter: 'StringSetter'
              }, {
                name: 'width',
                title: {
                  label: "Width",
                  tip: "width | Width"
                },
                propType: {
                  type: 'oneOfType',
                  value: ['number', 'string']
                },
                setter: ['NumberSetter', 'StringSetter', 'VariableSetter']
              }, {
                name: 'sorter',
                title: {
                  label: "Sorting rules",
                  tip: "sorter | Sorting function, local sorting uses a function, server-side sorting is required and can be set to true"
                },
                propType: {
                  type: 'oneOfType',
                  value: ['bool', 'func']
                },
                setter: ['BoolSetter', 'FunctionSetter', 'VariableSetter']
              }, {
                name: 'hidden',
                title: {
                  label: "YesNoHide",
                  tip: "hidden | YesNoHide Current Col"
                },
                propType: 'bool',
                setter: 'BoolSetter'
              }, {
                name: 'filters',
                title: {
                  label: "FilterMenu Item",
                  tip: "filters | Header filter menu items"
                },
                propType: 'object',
                setter: 'JsonSetter'
              }, {
                name: 'render',
                title: {
                  label: "CustomRender",
                  tip: "render | The material expression in the slot can obtain the current row data through this.record and this.index to obtain the index."
                },
                propType: 'func',
                setter: [{
                  componentName: 'SlotSetter',
                  title: "cell slot",
                  initialValue: {
                    type: 'JSSlot',
                    params: ['text', 'record', 'index'],
                    value: []
                  }
                }, 'VariableSetter']
              }]
            }
          },
          initialValue: {
            title: "Title"
          }
        }
      }
    }
  }, {
    title: "Appearance",
    display: 'block',
    type: 'group',
    items: [{
      name: 'showHeader',
      title: {
        label: "Show header",
        tip: "showHeader | Whether to display the header"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: true
    }, {
      name: 'bordered',
      title: {
        label: "Show border",
        tip: "bordered | Whether to display outer borders and column borders"
      },
      propType: 'bool',
      setter: 'BoolSetter'
    }, {
      name: 'size',
      title: {
        label: "TableSize",
        tip: "size | TableSize"
      },
      propType: {
        type: 'oneOf',
        value: ['default', 'middle', 'small']
      },
      setter: [{
        componentName: 'RadioGroupSetter',
        props: {
          options: [{
            title: "Default",
            value: 'default'
          }, {
            title: "Middle",
            value: 'middle'
          }, {
            title: "Small",
            value: 'small'
          }]
        }
      }, 'VariableSetter'],
      defaultValue: 'default'
    }, {
      name: 'tableLayout',
      title: {
        label: "TableLayout",
        tip: "tableLayout | TableLayout"
      },
      defaultValue: '',
      propType: {
        type: 'oneOf',
        value: ['', 'auto', 'fixed']
      },
      setter: [{
        componentName: 'RadioGroupSetter',
        props: {
          options: [{
            title: "Default",
            value: ''
          }, {
            title: "Auto",
            value: 'auto'
          }, {
            title: "Fixed",
            value: 'fixed'
          }]
        }
      }, 'VariableSetter']
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
              pageSize: 10,
              size: 'default'
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
      propType: 'number',
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
      propType: 'number',
      setter: 'NumberSetter',
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("pagination")'
      }
    }, {
      name: 'pagination.defaultCurrent',
      title: {
        label: "Default current page",
        tip: "pagination.defaultCurrent | Default Current page"
      },
      propType: 'number',
      setter: 'NumberSetter',
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("pagination")'
      }
    }, {
      name: 'pagination.current',
      title: {
        label: "Current page",
        tip: "pagination.current | Current page"
      },
      propType: 'number',
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
          template: "showTotal(total,range,${extParams}){\n// Format total table data count\nreturn `Total ${total} items`;\n}"
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
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'SelectSetter',
            props: {
              options: [{
                title: "Top left",
                value: 'topLeft'
              }, {
                title: "TopMiddle",
                value: 'topCenter'
              }, {
                title: "Top right",
                value: 'topRight'
              }, {
                title: "Bottom left",
                value: 'bottomLeft'
              }, {
                title: "BottomMiddle",
                value: 'bottomCenter'
              }, {
                title: "Bottom right",
                value: 'bottomRight'
              }]
            },
            initialValue: 'bottomRight'
          }
        }
      },
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("pagination")'
      }
    }]
  }, {
    title: "Scroll",
    display: 'block',
    type: 'group',
    items: [{
      name: 'scroll.scrollToFirstRowOnChange',
      title: {
        label: "Auto Scroll",
        tip: "scroll.scrollToFirstRowOnChange | YesNoAuto Scroll to TableTop"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: true
    }, {
      name: 'scroll.x',
      title: {
        label: "Horizontal scrolling",
        tip: "scroll.x | Set horizontal scrolling, can also be used to specify the width of the scroll area, which can be set to pixel value, percentage, true and max-content"
      },
      propType: {
        type: 'oneOfType',
        value: ['number', 'bool']
      },
      setter: ['NumberSetter', 'BoolSetter', 'VariableSetter']
    }, {
      name: 'scroll.y',
      title: {
        label: "scroll vertically",
        tip: "scroll.y | Set vertical scrolling, can also be used to specify the height of the scroll area, which can be set to a pixel value"
      },
      propType: 'number',
      setter: ['NumberSetter', 'VariableSetter']
    }]
  }, {
    title: "RowSelect",
    display: 'block',
    type: 'group',
    items: [{
      name: 'rowSelection',
      title: {
        label: "RowSelect",
        tip: "rowSelection | RowSelect"
      },
      propType: 'object',
      setter: 'BoolSetter',
      extraProps: {
        setValue: (target, value) => {
          if (value) {
            target.parent.setPropValue('rowSelection', {
              type: 'radio'
            });
          }
        }
      }
    }, {
      name: 'rowSelection.type',
      title: {
        label: "RowSelect Type",
        tip: "rowSelection.type | Multiple/Single"
      },
      propType: {
        type: 'oneOf',
        value: ['checkbox', 'radio']
      },
      setter: [{
        componentName: 'RadioGroupSetter',
        props: {
          options: [{
            title: "Multiple",
            value: 'checkbox'
          }, {
            title: "Single",
            value: 'radio'
          }]
        }
      }, 'VariableSetter'],
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("rowSelection")'
      }
    }, {
      name: 'rowSelection.fixed',
      title: {
        label: "fixed left",
        tip: "rowSelection.fixed | Fixed the selection box column to the left"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("rowSelection")'
      }
    }, {
      name: 'rowSelection.selectedRowKeys',
      title: {
        label: "Select rowKey",
        tip: "rowSelection.selectedRowKeys | Specifies the key array of the selected item"
      },
      propType: 'object',
      setter: 'JsonSetter',
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("rowSelection")'
      }
    }, {
      name: 'rowSelection.preserveSelectedRowKeys',
      title: {
        label: "Keep options",
        tip: "rowSelection.preserveSelectedRowKeys | Preserve options when data is deleted"
      },
      propType: 'bool',
      setter: 'BoolSetter',
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("rowSelection")'
      }
    }, {
      name: 'rowSelection.getCheckboxProps',
      title: {
        label: "Default prop",
        tip: "rowSelection.getCheckboxProps | Default property configuration of selection box"
      },
      propType: 'func',
      setter: [{
        componentName: 'FunctionSetter',
        props: {
          template: 'getCheckboxProps(record,${extParams}){\n// Default checkbox props\nreturn { disabled: false };\n}'
        }
      }, 'VariableSetter'],
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("rowSelection")'
      }
    }]
  }, {
    title: "RowExpand",
    display: 'block',
    type: 'group',
    items: [{
      name: 'expandable.expandedRowRender',
      title: {
        label: "ExpandRowRender",
        tip: "expandable.expandedRowRender | Extra ExpandRow"
      },
      propType: 'func',
      setter: [{
        componentName: 'SlotSetter',
        title: "Expand row slot",
        initialValue: {
          type: 'JSSlot',
          params: ['record', 'index', 'indent', 'expanded'],
          value: []
        }
      }, {
        componentName: 'FunctionSetter',
        props: {
          template: "expandedRowRender(record,index,indent,expanded,${extParams}){\n// ExpandRowRender\nreturn `${record.id}`}"
        }
      }, 'VariableSetter']
    }, {
      name: 'expandable.rowExpandable',
      title: {
        label: "YesNoCan Expand",
        tip: "expandable.rowExpandable | RowYesNoCan Expand"
      },
      propType: 'func',
      setter: [{
        componentName: 'FunctionSetter',
        props: {
          template: 'rowExpandable(record,${extParams}){\n// Whether the row is expandable\nreturn true;\n}'
        }
      }, 'VariableSetter']
    }]
  }, {
    title: "Extra",
    display: 'block',
    type: 'group',
    items: [{
      name: 'title',
      title: {
        label: "TableTitle",
        tip: "title | TableTitle"
      },
      propType: 'func',
      setter: [{
        componentName: 'SlotSetter',
        title: "table title slot",
        initialValue: {
          type: 'JSSlot',
          params: ['currentPageData'],
          value: []
        }
      }, {
        componentName: 'FunctionSetter',
        props: {
          template: 'renderTitle(currentPageData,${extParams}){\n// Custom render table title\nreturn "Table title";\n}'
        }
      }, 'VariableSetter']
    }, {
      name: 'footer',
      title: {
        label: "TableFooter",
        tip: "footer | TableFooter"
      },
      propType: 'func',
      setter: [{
        componentName: 'SlotSetter',
        title: "table tail slot",
        initialValue: {
          type: 'JSSlot',
          params: ['currentPageData'],
          value: []
        }
      }, {
        componentName: 'FunctionSetter',
        props: {
          template: 'renderFooter(currentPageData,${extParams}){\n// Custom render table footer\nreturn "Table footer";\n}'
        }
      }, 'VariableSetter']
    }, {
      name: 'onHeaderRow',
      title: {
        label: "HeaderRow prop",
        tip: "onHeaderRow | Set HeaderRow prop"
      },
      propType: 'func',
      setter: [{
        componentName: 'FunctionSetter',
        props: {
          template: 'onHeaderRow(columns,index,${extParams}){\n// Set header row props\nreturn {onClick:()=>{}};\n}'
        }
      }, 'VariableSetter']
    }, {
      name: 'onRow',
      title: {
        label: "Row prop",
        tip: "onRow | Set Row prop"
      },
      propType: 'func',
      setter: [{
        componentName: 'FunctionSetter',
        props: {
          template: 'onRow(record,index,${extParams}){\n// Set row props\nreturn {onClick:event=>{}};\n}'
        }
      }, 'VariableSetter']
    }, {
      name: 'rowClassName',
      title: {
        label: "RowclassName",
        tip: "rowClassName | TableRow className"
      },
      propType: 'func',
      setter: [{
        componentName: 'FunctionSetter',
        props: {
          template: 'rowClassName(record,index,${extParams}){\n// Row className\nreturn `className-${record.type}`;\n}'
        }
      }, 'VariableSetter']
    }]
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange(pagination,filters,sorter,extra,${extParams}){\n// Table pagination/change event\nconsole.log('onChange', pagination);}"
      }, {
        name: 'rowSelection.onChange',
        template: "onRowSelectionChange(selectedRowKeys,selectedRows,${extParams}){\n// Callback when selection changes\nconsole.log('onRowSelectionChange', selectedRowKeys, selectedRows);}"
      }, {
        name: 'expandable.onExpand',
        template: "onExpandableExpand(expanded,record){\n// Triggered when expand icon is clicked\nconsole.log('onRowSelectionChange', expanded, record);}"
      }]
    }
  }
};

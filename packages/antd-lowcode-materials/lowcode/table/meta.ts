import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Table',
  title: i18n("表格", "Table"),
  category: "Data Display",
  props: [{
    title: i18n("数据源", "Data source"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'dataSource',
      title: {
        label: i18n("表格数据", "TableData"),
        tip: i18n("dataSource | 表格数据", "dataSource | TableData")
      },
      propType: 'object',
      setter: 'JsonSetter',
      supportVariable: true
    }, {
      name: 'loading',
      title: {
        label: i18n("加载中", "Loading"),
        tip: i18n("loading | 是否加载中", "loading | YesNoLoading")
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false,
      supportVariable: true
    }, {
      name: 'rowKey',
      title: {
        label: i18n("行Key", "RowKey"),
        tip: i18n("rowKey | 表格行 key 的取值，可以是字符串或一个函数", "rowKey | The value of table row key, which can be a string or a function")
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
      label: i18n("表格列", "TableCol"),
      tip: i18n("表格列的配置描述，具体项见下表", "Configuration description of table columns, see the table below for specific items")
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
                  label: i18n("列标题", "ColTitle"),
                  tip: i18n("title | 列标题", "title | ColTitle")
                },
                propType: {
                  type: 'oneOfType',
                  value: ['string', 'func']
                },
                setter: ['StringSetter', {
                  componentName: 'SlotSetter',
                  title: i18n("列标题插槽", "Column header slot"),
                  initialValue: {
                    type: 'JSSlot',
                    params: ['options'],
                    value: []
                  }
                }]
              }, {
                name: 'dataIndex',
                title: {
                  label: i18n("数据字段", "DataField"),
                  tip: i18n("dataIndex | 数据字段", "dataIndex | DataField")
                },
                propType: 'string',
                setter: 'StringSetter',
                isRequired: true
              }, {
                name: 'key',
                title: {
                  label: 'React key',
                  tip: i18n("key | React需要的key", "key | ReactNeed key")
                },
                propType: 'string',
                setter: 'StringSetter'
              }, {
                name: 'align',
                title: {
                  label: i18n("对齐方式", "Align"),
                  tip: i18n("align | 对齐方式", "align | Align")
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
                  label: i18n("列是否固定", "ColYesNoFixed"),
                  tip: i18n("fixed | 列是否固定", "fixed | ColYesNoFixed")
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
                      title: i18n("不固定", "Not Fixed"),
                      value: ''
                    }, {
                      title: i18n("固定在左侧", "Fixed Left"),
                      value: 'left'
                    }, {
                      title: i18n("固定在右侧", "Fixed Right"),
                      value: 'right'
                    }]
                  }
                }, 'VariableSetter']
              }, {
                name: 'className',
                title: {
                  label: i18n("列样式类名", "Col styleclassName"),
                  tip: i18n("className | 列样式类名", "className | Col styleclassName")
                },
                propType: 'string',
                setter: 'StringSetter'
              }, {
                name: 'width',
                title: {
                  label: i18n("宽度", "Width"),
                  tip: i18n("width | 宽度", "width | Width")
                },
                propType: {
                  type: 'oneOfType',
                  value: ['number', 'string']
                },
                setter: ['NumberSetter', 'StringSetter', 'VariableSetter']
              }, {
                name: 'sorter',
                title: {
                  label: i18n("排序规则", "Sorting rules"),
                  tip: i18n("sorter | 排序函数，本地排序使用一个函数，需要服务端排序可设为 true", "sorter | Sorting function, local sorting uses a function, server-side sorting is required and can be set to true")
                },
                propType: {
                  type: 'oneOfType',
                  value: ['bool', 'func']
                },
                setter: ['BoolSetter', 'FunctionSetter', 'VariableSetter']
              }, {
                name: 'hidden',
                title: {
                  label: i18n("是否隐藏", "YesNoHide"),
                  tip: i18n("hidden | 是否隐藏当前列", "hidden | YesNoHide Current Col")
                },
                propType: 'bool',
                setter: 'BoolSetter'
              }, {
                name: 'filters',
                title: {
                  label: i18n("筛选菜单项", "FilterMenu Item"),
                  tip: i18n("filters | 表头的筛选菜单项", "filters | Header filter menu items")
                },
                propType: 'object',
                setter: 'JsonSetter'
              }, {
                name: 'render',
                title: {
                  label: i18n("自定义渲染", "CustomRender"),
                  tip: i18n("render | 插槽内的物料表达式可通过this.record获取当前行数据，this.index获取索引", "render | The material expression in the slot can obtain the current row data through this.record and this.index to obtain the index.")
                },
                propType: 'func',
                setter: [{
                  componentName: 'SlotSetter',
                  title: i18n("单元格插槽", "cell slot"),
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
            title: i18n("标题", "Title")
          }
        }
      }
    }
  }, {
    title: i18n("外观", "Appearance"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'showHeader',
      title: {
        label: i18n("显示表头", "Show header"),
        tip: i18n("showHeader | 是否显示表头", "showHeader | Whether to display the header")
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: true
    }, {
      name: 'bordered',
      title: {
        label: i18n("显示边框", "Show border"),
        tip: i18n("bordered | 是否展示外边框和列边框", "bordered | Whether to display outer borders and column borders")
      },
      propType: 'bool',
      setter: 'BoolSetter'
    }, {
      name: 'size',
      title: {
        label: i18n("表格大小", "TableSize"),
        tip: i18n("size | 表格大小", "size | TableSize")
      },
      propType: {
        type: 'oneOf',
        value: ['default', 'middle', 'small']
      },
      setter: [{
        componentName: 'RadioGroupSetter',
        props: {
          options: [{
            title: i18n("默认", "Default"),
            value: 'default'
          }, {
            title: i18n("中", "Middle"),
            value: 'middle'
          }, {
            title: i18n("小", "Small"),
            value: 'small'
          }]
        }
      }, 'VariableSetter'],
      defaultValue: 'default'
    }, {
      name: 'tableLayout',
      title: {
        label: i18n("表格布局", "TableLayout"),
        tip: i18n("tableLayout | 表格布局", "tableLayout | TableLayout")
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
            title: i18n("默认", "Default"),
            value: ''
          }, {
            title: i18n("自动", "Auto"),
            value: 'auto'
          }, {
            title: i18n("固定", "Fixed"),
            value: 'fixed'
          }]
        }
      }, 'VariableSetter']
    }]
  }, {
    title: i18n("分页", "Pagination"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'pagination',
      title: {
        label: i18n("显示分页", "ShowPagination"),
        tip: i18n("pagination | 显示分页", "pagination | ShowPagination")
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
        label: i18n("每页条数", "Page size"),
        tip: i18n("pagination.pageSize | 每页条数", "pagination.pageSize | Page size")
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
        label: i18n("数据总数", "Total"),
        tip: i18n("pagination.total | 数据总数", "pagination.total | Total")
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
        label: i18n("默认当前页", "Default current page"),
        tip: i18n("pagination.defaultCurrent | 默认的当前页数", "pagination.defaultCurrent | Default Current page")
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
        label: i18n("当前页数", "Current page"),
        tip: i18n("pagination.current | 当前页数", "pagination.current | Current page")
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
        label: i18n("显示总数", "Show total"),
        tip: i18n("pagination.showTotal | 用于显示数据总量和当前数据顺序", "pagination.showTotal | Used to display the total amount of data and the current data sequence")
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
        label: i18n("页数切换", "Page size changer"),
        tip: i18n("pagination.showSizeChanger | 是否展示 pageSize 切换器", "pagination.showSizeChanger | Whether to display pageSize switcher")
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
        label: i18n("快速跳转", "Quick jumper"),
        tip: i18n("pagination.showQuickJumper | 是否可以快速跳转至某页", "pagination.showQuickJumper | Whether you can quickly jump to a page")
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
        label: i18n("简单分页", "Simple pagination"),
        tip: i18n("pagination.simple | 简单分页", "pagination.simple | Simple pagination")
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
        label: i18n("分页尺寸", "Pagination size"),
        tip: i18n("pagination.size | 分页尺寸", "pagination.size | Pagination size")
      },
      propType: {
        type: 'oneOf',
        value: ['default', 'small']
      },
      setter: [{
        componentName: 'RadioGroupSetter',
        props: {
          options: [{
            title: i18n("默认", "Default"),
            value: 'default'
          }, {
            title: i18n("小", "Small"),
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
        label: i18n("分页位置", "PaginationPosition"),
        tip: i18n("pagination.position | 分页位置", "pagination.position | PaginationPosition")
      },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'SelectSetter',
            props: {
              options: [{
                title: i18n("上左", "Top left"),
                value: 'topLeft'
              }, {
                title: i18n("上中", "TopMiddle"),
                value: 'topCenter'
              }, {
                title: i18n("上右", "Top right"),
                value: 'topRight'
              }, {
                title: i18n("下左", "Bottom left"),
                value: 'bottomLeft'
              }, {
                title: i18n("下中", "BottomMiddle"),
                value: 'bottomCenter'
              }, {
                title: i18n("下右", "Bottom right"),
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
    title: i18n("滚动", "Scroll"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'scroll.scrollToFirstRowOnChange',
      title: {
        label: i18n("自动滚动", "Auto Scroll"),
        tip: i18n("scroll.scrollToFirstRowOnChange | 是否自动滚动到表格顶部", "scroll.scrollToFirstRowOnChange | YesNoAuto Scroll to TableTop")
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: true
    }, {
      name: 'scroll.x',
      title: {
        label: i18n("横向滚动", "Horizontal scrolling"),
        tip: i18n("scroll.x | \t设置横向滚动，也可用于指定滚动区域的宽，可以设置为像素值，百分比，true 和 max-content", "scroll.x | Set horizontal scrolling, can also be used to specify the width of the scroll area, which can be set to pixel value, percentage, true and max-content")
      },
      propType: {
        type: 'oneOfType',
        value: ['number', 'bool']
      },
      setter: ['NumberSetter', 'BoolSetter', 'VariableSetter']
    }, {
      name: 'scroll.y',
      title: {
        label: i18n("纵向滚动", "scroll vertically"),
        tip: i18n("scroll.y | \t设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值", "scroll.y | Set vertical scrolling, can also be used to specify the height of the scroll area, which can be set to a pixel value")
      },
      propType: 'number',
      setter: ['NumberSetter', 'VariableSetter']
    }]
  }, {
    title: i18n("行选择器", "RowSelect"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'rowSelection',
      title: {
        label: i18n("行选择", "RowSelect"),
        tip: i18n("rowSelection | 行选择", "rowSelection | RowSelect")
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
        label: i18n("行选择类型", "RowSelect Type"),
        tip: i18n("rowSelection.type | 多选/单选", "rowSelection.type | Multiple/Single")
      },
      propType: {
        type: 'oneOf',
        value: ['checkbox', 'radio']
      },
      setter: [{
        componentName: 'RadioGroupSetter',
        props: {
          options: [{
            title: i18n("多选", "Multiple"),
            value: 'checkbox'
          }, {
            title: i18n("单选", "Single"),
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
        label: i18n("固定左边", "fixed left"),
        tip: i18n("rowSelection.fixed | 把选择框列固定在左边", "rowSelection.fixed | Fixed the selection box column to the left")
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
        label: i18n("选中行Key", "Select rowKey"),
        tip: i18n("rowSelection.selectedRowKeys | 指定选中项的 key 数组", "rowSelection.selectedRowKeys | Specifies the key array of the selected item")
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
        label: i18n("保留选项", "Keep options"),
        tip: i18n("rowSelection.preserveSelectedRowKeys | 当数据被删除时仍然保留选项", "rowSelection.preserveSelectedRowKeys | Preserve options when data is deleted")
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
        label: i18n("默认属性", "Default prop"),
        tip: i18n("rowSelection.getCheckboxProps | 选择框的默认属性配置", "rowSelection.getCheckboxProps | Default property configuration of selection box")
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
    title: i18n("行展开", "RowExpand"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'expandable.expandedRowRender',
      title: {
        label: i18n("展开行渲染", "ExpandRowRender"),
        tip: i18n("expandable.expandedRowRender | 额外的展开行", "expandable.expandedRowRender | Extra ExpandRow")
      },
      propType: 'func',
      setter: [{
        componentName: 'SlotSetter',
        title: i18n("展开行插槽", "Expand row slot"),
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
        label: i18n("是否可展开", "YesNoCan Expand"),
        tip: i18n("expandable.rowExpandable | 行是否可展开", "expandable.rowExpandable | RowYesNoCan Expand")
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
    title: i18n("扩展", "Extra"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'title',
      title: {
        label: i18n("表格标题", "TableTitle"),
        tip: i18n("title | 表格标题", "title | TableTitle")
      },
      propType: 'func',
      setter: [{
        componentName: 'SlotSetter',
        title: i18n("表格标题插槽", "table title slot"),
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
        label: i18n("表格尾部", "TableFooter"),
        tip: i18n("footer | 表格尾部", "footer | TableFooter")
      },
      propType: 'func',
      setter: [{
        componentName: 'SlotSetter',
        title: i18n("表格尾部插槽", "table tail slot"),
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
        label: i18n("头部行属性", "HeaderRow prop"),
        tip: i18n("onHeaderRow | 设置头部行属性", "onHeaderRow | Set HeaderRow prop")
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
        label: i18n("行属性", "Row prop"),
        tip: i18n("onRow | 设置行属性", "onRow | Set Row prop")
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
        label: i18n("行类名", "RowclassName"),
        tip: i18n("rowClassName | 表格行的类名", "rowClassName | TableRow className")
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

import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'List',
  title: i18n("列表", "List"),
  category: "Data Display",
  props: [{
    title: i18n("数据源", "Data source"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'dataSource',
      title: {
        label: i18n("列表数据源", "ListData source"),
        tip: i18n("列表数据源", "ListData source")
      },
      propType: {
        type: 'arrayOf',
        value: 'any'
      },
      setter: ['JsonSetter', 'VariableSetter']
    }, {
      name: 'loading',
      title: {
        label: i18n("是否加载中", "YesNoLoading"),
        tip: i18n("loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位", "loading | When the card content is still loading, you can use loading to display a placeholder")
      },
      propType: 'bool',
      defaultValue: false,
      setter: ['BoolSetter', 'VariableSetter']
    }, {
      name: 'rowKey',
      title: {
        label: i18n("行Key", "RowKey"),
        tip: i18n("rowKey | 当 renderItem 自定义渲染列表项有效时，自定义每一行的 key 的获取方式", "rowKey | When the renderItem custom rendering list item is valid, customize the way to obtain the key of each row")
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
    title: i18n("外观", "Appearance"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'itemLayout',
      title: {
        label: i18n("尺寸", "Size"),
        tip: i18n("itemLayout  | 设置 List.Item 布局, 设置成 vertical 则竖直样式显示, 默认横排", "itemLayout | Set the List.Item layout. If set to vertical, the vertical style will be displayed. The default is horizontal.")
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
            title: i18n("水平", "Horizontal"),
            value: 'horizontal'
          }, {
            title: i18n("垂直", "Vertical"),
            value: 'vertical'
          }]
        }
      }, 'VariableSetter']
    }, {
      name: 'size',
      title: {
        label: i18n("尺寸", "Size"),
        tip: i18n("size  | 列表的尺寸", "size | List Size")
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
            title: i18n("默认", "Default"),
            value: 'default'
          }, {
            title: i18n("大", "Large"),
            value: 'large'
          }, {
            title: i18n("小", "Small"),
            value: 'small'
          }]
        }
      }, 'VariableSetter']
    }, {
      name: 'bordered',
      title: {
        label: i18n("显示边框", "Show border"),
        tip: i18n("bordered | 是否展示边框", "bordered | whether to display borders")
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'split',
      title: {
        label: i18n("展示分割线", "Show dividing line"),
        tip: i18n("split | 是否展示分割线", "split | whether to display the dividing line")
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }]
  }, {
    title: i18n("栅格", "Grid"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'gridEnable',
      title: {
        label: i18n("启用栅格", "enabledGrid"),
        tip: i18n("grid | 是否启用栅格", "grid | YesNoenabledGrid")
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
        label: i18n("列数", "Number of columns"),
        tip: i18n("grid.column | 栅格的列数", "grid.column | The number of columns in the grid")
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
        label: i18n("间隔", "Gutter"),
        tip: i18n("grid.gutter | 栅格的间隔", "grid.gutter | Grid Gutter")
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
              pageSize: 5
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
        label: i18n("当前页数", "Current page"),
        tip: i18n("pagination.current | 当前页数", "pagination.current | Current page")
      },
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
        label: i18n("页数切换", "Page size changer"),
        tip: i18n("pagination.showSizeChanger | 是否展示 pageSize 切换器", "pagination.showSizeChanger | Whether to display pageSize switcher")
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
        label: i18n("快速跳转", "Quick jumper"),
        tip: i18n("pagination.showQuickJumper | 是否可以快速跳转至某页", "pagination.showQuickJumper | Whether you can quickly jump to a page")
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
        label: i18n("简单分页", "Simple pagination"),
        tip: i18n("pagination.simple | 简单分页", "pagination.simple | Simple pagination")
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
      defaultValue: 'default',
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
        componentName: 'SelectSetter',
        props: {
          options: [{
            title: i18n("上", "Top"),
            value: 'top'
          }, {
            title: i18n("下", "Bottom"),
            value: 'bottom'
          }, {
            title: i18n("上下", "TopBottom"),
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
    title: i18n("扩展", "Extra"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'renderItem',
      title: {
        label: i18n("渲染函数", "render function"),
        tip: i18n("renderItem | 当使用 dataSource 时，可以用 `renderItem` 自定义渲染列表项", "renderItem | When using dataSource, you can use `renderItem` to customize the rendering list items")
      },
      propType: 'func',
      setter: [{
        componentName: 'SlotSetter',
        title: i18n("渲染函数插槽", "Render function slot"),
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
        label: i18n("列表头部", "List header"),
        tip: i18n("header | 列表头部", "header | List header")
      },
      propType: 'node',
      setter: {
        componentName: 'SlotSetter',
        initialValue: {
          type: 'JSSlot',
          value: [{
            componentName: 'Typography.Text',
            props: {
              children: i18n("列表头部", "List header")
            }
          }]
        }
      }
    }, {
      name: 'footer',
      title: {
        label: i18n("列表底部", "List footer"),
        tip: i18n("footer | 列表底部", "footer | List footer")
      },
      propType: 'node',
      setter: {
        componentName: 'SlotSetter',
        initialValue: {
          type: 'JSSlot',
          value: [{
            componentName: 'Typography.Text',
            props: {
              children: i18n("列表底部", "List footer")
            }
          }]
        }
      }
    }, {
      name: 'loadMore',
      title: {
        label: i18n("加载更多", "LoadingMore"),
        tip: i18n("loadMore | 加载更多", "loadMore | LoadingMore")
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

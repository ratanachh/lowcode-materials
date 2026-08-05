import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Pagination',
  title: i18n("分页", "Pagination"),
  category: "Navigation",
  props: [{
    title: i18n("数据", "Data"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'defaultPageSize',
      title: {
        label: i18n("默认每页条数", "DefaultPage size"),
        tip: i18n("defaultPageSize | 默认每页条数", "defaultPageSize | DefaultPage size")
      },
      propType: 'number',
      setter: 'NumberSetter',
      defaultValue: 10
    }, {
      name: 'pageSize',
      title: {
        label: i18n("每页条数", "Page size"),
        tip: i18n("pageSize | 每页条数", "pageSize | Page size")
      },
      propType: 'number',
      setter: 'NumberSetter',
      defaultValue: 10
    }, {
      name: 'total',
      title: {
        label: i18n("数据总数", "Total"),
        tip: i18n("total | 数据总数", "total | Total")
      },
      propType: 'number',
      setter: 'NumberSetter',
      defaultValue: 15
    }, {
      name: 'defaultCurrent',
      title: {
        label: i18n("默认当前页", "Default current page"),
        tip: i18n("defaultCurrent | 默认的当前页数", "defaultCurrent | Default Current page")
      },
      propType: 'number',
      setter: 'NumberSetter',
      defaultValue: 1
    }, {
      name: 'current',
      title: {
        label: i18n("当前页数", "Current page"),
        tip: i18n("current | 当前页数", "current | Current page")
      },
      propType: 'number',
      setter: 'NumberSetter',
      defaultValue: 1
    }]
  }, {
    title: i18n("功能", "Function"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'disabled',
      title: {
        label: i18n("是否禁用", "Disabled"),
        tip: i18n("disabled | 是否禁用", "disabled | Disabled")
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'showSizeChanger',
      title: {
        label: i18n("页数切换", "Page size changer"),
        tip: i18n("showSizeChanger | 是否展示 pageSize 切换器", "showSizeChanger | Whether to display pageSize switcher")
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'showQuickJumper',
      title: {
        label: i18n("快速跳转", "Quick jumper"),
        tip: i18n("showQuickJumper | 是否可以快速跳转至某页", "showQuickJumper | Whether you can quickly jump to a page")
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'hideOnSinglePage',
      title: {
        label: i18n("单页隐藏", "Single page hidden"),
        tip: i18n("hideOnSinglePage | 只有一页时是否隐藏分页器", "hideOnSinglePage | Whether to hide the pager when there is only one page")
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'showLessItems',
      title: {
        label: i18n("显示较少页面", "Show fewer pages"),
        tip: i18n("showLessItems | 是否显示较少页面内容", "showLessItems | Whether to display less page content")
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'pageSizeOptions',
      title: {
        label: i18n("可选分页数", "Optional number of pages"),
        tip: i18n("pageSizeOptions | 指定 pageSize切换器 可选择的每页条数", "pageSizeOptions | Specify the number of items per page that can be selected by the pageSize switcher")
      },
      propType: 'object',
      setter: 'JsonSetter'
    }]
  }, {
    title: i18n("外观", "Appearance"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'simple',
      title: {
        label: i18n("简单分页", "Simple pagination"),
        tip: i18n("simple | 简单分页", "simple | Simple pagination")
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'size',
      title: {
        label: i18n("分页尺寸", "Pagination size"),
        tip: i18n("size | 分页尺寸", "size | Pagination size")
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
      defaultValue: 'default'
    }, {
      name: 'showTotal',
      title: {
        label: i18n("显示总数", "Show total"),
        tip: i18n("showTotal | 用于显示数据总量和当前数据顺序", "showTotal | Used to display the total amount of data and the current data sequence")
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
        label: i18n("页码提示", "Page number hint"),
        tip: i18n("showTitle | 是否显示原生 tooltip 页码提示", "showTitle | Whether to display the native tooltip page number prompt")
      },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    }, {
      name: 'responsive',
      title: {
        label: i18n("宽度自适应", "WidthAuto"),
        tip: i18n("responsive | 当 size 未指定时，根据屏幕宽度自动调整尺寸", "responsive | When size is not specified, automatically adjust the size according to the screen width")
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

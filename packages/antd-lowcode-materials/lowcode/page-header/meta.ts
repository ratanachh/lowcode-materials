import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'PageHeader',
  title: i18n("页头", "PageHeader"),
  category: "Navigation",
  props: [{
    name: 'title',
    title: {
      label: i18n("标题", "Title"),
      tip: i18n("自定义标题文字", "CustomTitleText")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'subTitle',
    title: {
      label: i18n("二级标题", "Level 2 heading"),
      tip: i18n("自定义的二级标题文字", "Custom Level 2 headingText")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'ghost',
    title: {
      label: i18n("ghost风格", "Ghost"),
      tip: i18n("ghost风格", "Ghost")
    },
    propType: 'bool',
    defaultValue: true
  },
  // {
  //   name: 'backIcon',
  //   title: {
  // label: 'BackButton',
  // tip: 'Custom back icon ， if false Not Render back icon',
  //   },
  //   propType: { type: 'oneOfType', value: ['node', 'bool'] },
  // },
  {
    name: 'tags',
    title: {
      label: i18n("tag 列表", "tag List"),
      tip: i18n("title 旁的 tag 列表", "tag list next to title")
    },
    propType: 'node'
  }, {
    name: 'extra',
    title: {
      label: i18n("操作区", "Actions"),
      tip: i18n("操作区，位于 title 行的行尾", "The operating area, located at the end of the title line")
    },
    propType: 'node'
  }, {
    name: 'footer',
    title: {
      label: i18n("页脚", "Footer"),
      tip: i18n("PageHeader 的页脚，一般用于渲染 TabBar", "PageHeader footer, usually for TabBar")
    },
    propType: 'node'
  }, {
    name: 'avatar',
    title: {
      label: i18n("头像", "Avatar"),
      tip: i18n("标题栏旁的头像", "Avatar next to title bar")
    },
    propType: 'object',
    supportVariable: false,
    setter: [{
      componentName: 'ObjectSetter',
      props: {
        config: {
          items: [{
            name: 'src',
            title: {
              label: i18n("地址", "Address"),
              tip: i18n("头像地址", "AvatarAddress")
            },
            setter: {
              componentName: 'StringSetter'
            }
          }]
        }
      }
    }, 'JsonSetter']
  }, {
    name: 'breadcrumb',
    title: {
      label: i18n("面包屑的配置", "Breadcrumb config"),
      tip: i18n("面包屑的配置", "Breadcrumb config")
    },
    propType: 'object',
    supportVariable: false,
    setter: [{
      componentName: 'ObjectSetter',
      props: {
        config: {
          items: [{
            name: 'routes',
            title: {
              label: i18n("路由栈信息", "Routes"),
              tip: i18n("路由栈信息", "Routes")
            },
            setter: {
              componentName: 'ArraySetter',
              props: {
                itemSetter: {
                  componentName: 'ObjectSetter',
                  initialValue: {
                    path: 'path',
                    breadcrumbName: 'pathName'
                  },
                  isRequired: true,
                  props: {
                    config: {
                      items: [{
                        name: 'path',
                        defaultValue: 'path',
                        title: {
                          label: i18n("路径", "path"),
                          tip: i18n("path | 路径", "path | path")
                        },
                        setter: 'StringSetter'
                      }, {
                        name: 'breadcrumbName',
                        defaultValue: 'pathName',
                        title: {
                          label: i18n("名称", "Name"),
                          tip: i18n("breadcrumbName | 名称", "breadcrumbName | Name")
                        },
                        setter: 'StringSetter'
                      }]
                    }
                  }
                }
              }
            }
          }]
        }
      }
    }, 'JsonSetter']
  }, {
    name: 'onBack',
    title: {
      label: i18n("返回按钮的点击事件", "Return button click event"),
      tip: i18n("返回按钮的点击事件", "Return button click event")
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onBack',
        template: "onBack(${extParams}){\n// Return button click event\nconsole.log('onBack');}"
      }]
    }
  }
};

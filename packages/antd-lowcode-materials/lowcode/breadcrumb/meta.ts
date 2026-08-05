import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Breadcrumb',
  title: i18n("面包屑", "Breadcrumb"),
  category: "Navigation",
  props: [{
    title: i18n("基础", "General"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'routes',
      title: {
        label: i18n("路由栈信息", "Routes"),
        tip: i18n("router 的路由栈信息", "router Routes")
      },
      propType: {
        type: 'arrayOf',
        value: {
          type: 'shape',
          value: [{
            name: 'path',
            propType: 'string'
          }, {
            name: 'breadcrumbName',
            propType: 'string'
          }]
        }
      },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [{
                  name: 'path',
                  title: {
                    label: i18n("路由路径", "routing path"),
                    tip: i18n("path | 路由路径", "path | routing path")
                  },
                  propType: 'string',
                  setter: 'StringSetter',
                  isRequired: true
                }, {
                  name: 'breadcrumbName',
                  title: {
                    label: i18n("路由名称", "Route name"),
                    tip: i18n("breadcrumbName | 路由名称", "breadcrumbName | route name")
                  },
                  propType: 'string',
                  setter: 'StringSetter',
                  isRequired: true
                }]
              }
            },
            initialValue: {
              path: 'path',
              breadcrumbName: 'breadcrumbName'
            }
          }
        }
      }
    }, {
      name: 'params',
      title: {
        label: i18n("路由的参数", "Route parameters"),
        tip: i18n("路由的参数", "Route parameters")
      },
      propType: 'object',
      setter: 'JsonSetter'
    }, {
      name: 'separator',
      title: {
        label: i18n("分隔符自定义", "Separator customization"),
        tip: i18n("分隔符自定义", "Separator customization")
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'node']
      },
      setter: ['StringSetter', {
        componentName: 'SlotSetter',
        initialValue: {
          type: 'JSSlot',
          value: []
        }
      }, 'VariableSetter']
    }]
  }, {
    title: i18n("扩展", "Extra"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'itemRender',
      title: {
        label: i18n("自定义渲染", "CustomRender"),
        tip: i18n("itemRender | 自定义渲染", "itemRender | CustomRender")
      },
      propType: {
        type: 'oneOfType',
        value: ['func', 'node']
      },
      setter: [{
        componentName: 'SlotSetter',
        title: i18n("自定义渲染插槽", "Custom render slot"),
        initialValue: {
          type: 'JSSlot',
          params: ['route', 'params', 'routes', 'paths'],
          value: []
        }
      }, {
        componentName: 'FunctionSetter',
        props: {
          template: 'itemRender(route, params, routes, paths,${extParams}){\n// CustomRender \nreturn `${route.breadcrumbName}`}'
        }
      }, 'VariableSetter']
    }]
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

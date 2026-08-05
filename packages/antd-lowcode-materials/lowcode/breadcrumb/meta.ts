import snippets from './snippets';
export default {
  snippets,
  componentName: 'Breadcrumb',
  title: "Breadcrumb",
  category: "Navigation",
  props: [{
    title: "General",
    display: 'block',
    type: 'group',
    items: [{
      name: 'routes',
      title: {
        label: "Routes",
        tip: "router Routes"
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
                    label: "routing path",
                    tip: "path | routing path"
                  },
                  propType: 'string',
                  setter: 'StringSetter',
                  isRequired: true
                }, {
                  name: 'breadcrumbName',
                  title: {
                    label: "Route name",
                    tip: "breadcrumbName | route name"
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
        label: "Route parameters",
        tip: "Route parameters"
      },
      propType: 'object',
      setter: 'JsonSetter'
    }, {
      name: 'separator',
      title: {
        label: "Separator customization",
        tip: "Separator customization"
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
    title: "Extra",
    display: 'block',
    type: 'group',
    items: [{
      name: 'itemRender',
      title: {
        label: "CustomRender",
        tip: "itemRender | CustomRender"
      },
      propType: {
        type: 'oneOfType',
        value: ['func', 'node']
      },
      setter: [{
        componentName: 'SlotSetter',
        title: "Custom render slot",
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

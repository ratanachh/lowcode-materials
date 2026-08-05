import snippets from './snippets';
export default {
  snippets,
  componentName: 'PageHeader',
  title: "PageHeader",
  category: "Navigation",
  props: [{
    name: 'title',
    title: {
      label: "Title",
      tip: "CustomTitleText"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'subTitle',
    title: {
      label: "Level 2 heading",
      tip: "Custom Level 2 headingText"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'ghost',
    title: {
      label: "Ghost",
      tip: "Ghost"
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
      label: "tag List",
      tip: "tag list next to title"
    },
    propType: 'node'
  }, {
    name: 'extra',
    title: {
      label: "Actions",
      tip: "The operating area, located at the end of the title line"
    },
    propType: 'node'
  }, {
    name: 'footer',
    title: {
      label: "Footer",
      tip: "PageHeader footer, usually for TabBar"
    },
    propType: 'node'
  }, {
    name: 'avatar',
    title: {
      label: "Avatar",
      tip: "Avatar next to title bar"
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
              label: "Address",
              tip: "AvatarAddress"
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
      label: "Breadcrumb config",
      tip: "Breadcrumb config"
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
              label: "Routes",
              tip: "Routes"
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
                          label: "path",
                          tip: "path | path"
                        },
                        setter: 'StringSetter'
                      }, {
                        name: 'breadcrumbName',
                        defaultValue: 'pathName',
                        title: {
                          label: "Name",
                          tip: "breadcrumbName | Name"
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
      label: "Return button click event",
      tip: "Return button click event"
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

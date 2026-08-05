module.exports = {
  componentName: 'Slot',
  npm: {
    package: '@rchh/antd-lowcode-materials',
    version: 'latest',
    exportName: 'Slot',
    main: '',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [{
      name: '___title',
      title: {
        type: 'i18n',
        en_US: 'Slot Title',
        zh_CN: '插槽标题'
      },
      setter: 'StringSetter',
      defaultValue: "Slot Container"
    }, {
      name: '___params',
      title: {
        type: 'i18n',
        en_US: 'Slot Params',
        zh_CN: '插槽入参'
      },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'StringSetter',
            props: {
              placeholder: {
                type: 'i18n',
                zh_CN: '参数名称',
                en_US: 'Argument Name'
              }
            }
          }
        }
      }
    }],
    component: {
      isContainer: true,
      disableBehaviors: '*'
    },
    // events/className/style/general/directives
    supports: false,
    advanced: {
      callbacks: {
        onHoverHook: () => false,
        onMouseDownHook: () => false,
        onClickHook: () => false
      }
    }
  }
};

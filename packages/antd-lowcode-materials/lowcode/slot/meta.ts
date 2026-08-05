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
        zh_CN: 'Slot Title'
      },
      setter: 'StringSetter',
      defaultValue: "Slot Container"
    }, {
      name: '___params',
      title: {
        type: 'i18n',
        en_US: 'Slot Params',
        zh_CN: 'Slot Params'
      },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'StringSetter',
            props: {
              placeholder: "Argument Name"
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

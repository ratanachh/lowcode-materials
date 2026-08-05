import { Component } from 'react';
class Slot extends Component {
  static displayName = 'Slot';
  static componentMetadata = {
    componentName: 'Slot',
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
        isContainer: true
      },
      // events/className/style/general/directives
      supports: false
    }
  };
  render() {
    const {
      children
    } = this.props;
    return <>{children}</>;
  }
}
export default Slot;

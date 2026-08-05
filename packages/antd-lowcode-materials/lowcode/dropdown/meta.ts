import snippets from './snippets';
export default {
  snippets,
  componentName: 'Dropdown',
  title: "Dropdown",
  category: "Navigation",
  props: [{
    name: 'open',
    title: {
      label: "Menu visible",
      tip: "Menu visible"
    },
    propType: {
      type: 'oneOf',
      value: [true, false, '-']
    },
    defaultValue: '-',
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: "Uncontrolled by default",
          value: '-'
        }, {
          title: "Show",
          value: true
        }, {
          title: "Hide",
          value: false
        }]
      }
    },
    extraProps: {
      getValue(target) {
        const {
          node
        } = target;
        let value = node.getPropValue('open');
        if (value === undefined) {
          value = '-';
        }
        return value;
      },
      setValue(target, value) {
        const {
          node
        } = target;
        if (value === '-') {
          setTimeout(() => {
            node.clearPropValue('open');
          });
        }
      }
    }
  }, {
    name: 'arrow',
    title: {
      label: "Show drop down arrow",
      tip: "Show arrow"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'disabled',
    title: {
      label: "Disabled",
      tip: "Whether disabled"
    },
    propType: 'bool'
  },
  // {
  //   name: 'getPopupContainer',
  //   title: {
  // label: 'Render Parent node',
  //     tip:
  // 'Menu rendering parent node. By default, it is rendered on the body. If you encounter menu scrolling positioning problems, try changing it to the scrolling area and positioning it relative to it. [Example](https://codepen.io/afc163/pen/zEjNOy?editors=0010)',
  //   },
  //   propType: 'func',
  // },
  {
    name: 'overlay',
    title: {
      label: "Menu",
      tip: "Menu"
    },
    propType: {
      type: 'oneOfType',
      value: ['node', 'func']
    }
  },
  // {
  //   name: 'overlayClassName',
  // title: { label: 'Root class name', tip: 'Root class name' },
  //   propType: 'string',
  // },
  // {
  //   name: 'overlayStyle',
  // title: { label: 'Root style', tip: 'Root style' },
  //   propType: 'object',
  // },
  {
    name: 'placement',
    title: {
      label: "popup position",
      tip: "Menu pop-up position: `bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight`"
    },
    propType: {
      type: 'oneOf',
      value: ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight']
    }
  }, {
    name: 'trigger',
    title: {
      label: "The behavior that triggers the drop-down",
      tip: "Trigger drop-down behavior, mobile version does not support hover"
    },
    propType: {
      type: 'arrayOf',
      value: {
        type: 'oneOf',
        value: ['click', 'hover', 'contextMenu']
      }
    }
  }, {
    name: 'onOpenChange',
    title: {
      label: "ShowStatuscallback",
      tip: "Called when the menu display status changes, the parameter is `open`"
    },
    propType: 'func'
  }],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      style: true,
      events: [{
        name: 'onOpenChange',
        template: "onOpenChange(open,${extParams}){\n// MenuShowStatusChange callback\nconsole.log('onOpenChange',open);}"
      }]
    }
  }
};

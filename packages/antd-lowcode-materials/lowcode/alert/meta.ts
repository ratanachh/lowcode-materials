import snippets from './snippets';
export default {
  snippets,
  componentName: 'Alert',
  title: "Alert",
  category: "Feedback",
  props: [{
    name: 'afterClose',
    title: {
      label: "Close the callback function triggered after the animation ends",
      tip: "Close the callback function triggered after the animation ends"
    },
    propType: 'func'
  }, {
    name: 'banner',
    title: {
      label: "top announcement",
      tip: "Whether to use as top announcement"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'closable',
    title: {
      label: "Can Off",
      tip: "DefaultHideOffButton"
    },
    propType: 'bool'
  }, {
    name: 'closeText',
    title: {
      label: "Custom close button",
      tip: "Custom close button"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'description',
    title: {
      label: "Description information",
      tip: "Auxiliary text introduction of warning prompts"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'icon',
    title: {
      label: "Icon",
      tip: "Custom icon, valid when `showIcon` is true"
    },
    propType: 'node'
  }, {
    name: 'message',
    title: {
      label: "AlertContent",
      tip: "AlertContent"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'showIcon',
    title: {
      label: "ShowIcon",
      tip: "Whether to display auxiliary icons"
    },
    propType: 'bool'
  }, {
    name: 'type',
    title: {
      label: "Type",
      tip: "Type"
    },
    propType: {
      type: 'oneOf',
      value: ['success', 'info', 'warning', 'error']
    }
  }, {
    name: 'onClose',
    title: {
      label: "Off trigger callback",
      tip: "Off trigger callback"
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onClose',
        template: "onChange(event,${extParams}){\n// Off trigger callback\nconsole.log('onChange');}"
      }]
    }
  }
};

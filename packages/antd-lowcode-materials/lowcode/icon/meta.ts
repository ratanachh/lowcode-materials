import snippets from './snippets';
import { AntdIconSetter } from '../_setters';
export default {
  snippets,
  componentName: 'Icon',
  title: "Icon",
  category: "General",
  props: [{
    name: 'className',
    title: {
      label: "Set Icon styleName",
      tip: "Set Icon styleName"
    },
    propType: 'string'
  }, {
    name: 'style',
    title: {
      label: "Set Icon style e.g. `fontSize` and `color`",
      tip: "Set Icon style, e.g. `fontSize` and `color`"
    },
    propType: 'object'
  }, {
    name: 'type',
    description: "Icon",
    propType: 'string',
    setter: AntdIconSetter
  }, {
    name: 'size',
    description: "Size",
    propType: 'number',
    defaultValue: 20
  }, {
    name: 'color',
    description: "Color",
    propType: 'string',
    setter: 'ColorSetter'
  }, {
    name: 'rotate',
    title: {
      label: "rotation angle",
      tip: "Icon rotation angle"
    },
    propType: 'number',
    defaultValue: 0
  }, {
    name: 'spin',
    title: {
      label: "Rotation animation",
      tip: "Is there a rotation animation?"
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'onClick',
    title: {
      label: "Click callback",
      tip: "Click Button on callback"
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

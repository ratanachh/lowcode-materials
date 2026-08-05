import snippets from './snippets';
export default {
  snippets,
  componentName: 'Avatar',
  title: "Avatar",
  category: "Data Display",
  props: [{
    name: 'icon',
    title: {
      label: "AvatarIcon",
      tip: "Set Avatar CustomIcon"
    },
    propType: 'node'
  }, {
    name: 'shape',
    title: {
      label: "avatar shape",
      tip: "Specify the shape of the avatar"
    },
    propType: {
      type: 'oneOf',
      value: ['circle', 'square']
    }
  }, {
    name: 'size',
    title: {
      label: "Size",
      tip: "Set Avatar Size"
    },
    propType: {
      type: 'oneOfType',
      value: ['number', {
        type: 'oneOf',
        value: ['large', 'small', 'default']
      }]
    },
    defaultValue: 'default'
  }, {
    name: 'src',
    title: {
      label: "Image URL",
      tip: "Resource address of picture avatar"
    },
    propType: 'string'
  }, {
    name: 'alt',
    title: {
      label: "alt text",
      tip: "Alternative text when image cannot be displayed"
    },
    propType: 'string'
  }, {
    name: 'onError',
    title: {
      label: "Image loading failure event",
      tip: "Image loading failure event. Returning false will turn off the component's default fallback behavior."
    },
    propType: 'func'
  }, {
    name: 'gap',
    title: {
      label: "text margins",
      tip: "Character type distance from left and right borders in pixels"
    },
    propType: 'number'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onError',
        template: "onError(${extParams}){\n// Image loading failure event\nconsole.log('onError');}"
      }]
    }
  }
};

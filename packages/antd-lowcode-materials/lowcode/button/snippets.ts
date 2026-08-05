
export default [
  {
    title: "Primary Button",
    screenshot: require('./__screenshots__/button-1.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'primary',
        children: 'Primary Button',
      },
    },
  },
  {
    title: "Default Button",
    screenshot: require('./__screenshots__/button-2.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'default',
        children: 'Default Button',
      },
    },
  },
  {
    title: "Danger Button",
    screenshot: require('./__screenshots__/button-3.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'danger',
        children: 'Danger Button',
      },
    },
  },
  {
    title: "Text Button",
    screenshot: require('./__screenshots__/button-4.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'text',
        children: 'Text Button',
      },
    },
  },
  {
    title: "Dashed Button",
    screenshot: require('./__screenshots__/button-5.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'dashed',
        children: 'Dashed Button',
      },
    },
  },
  {
    title: "Link Button",
    screenshot: require('./__screenshots__/button-6.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'link',
        children: 'Link Button',
      },
    },
  },
];

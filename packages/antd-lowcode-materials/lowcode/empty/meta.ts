import snippets from './snippets';
export default {
  snippets,
  componentName: 'Empty',
  title: "Empty",
  category: "Data Display",
  props: [{
    name: 'description',
    title: {
      label: "Content description",
      tip: "Custom description content"
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  },
  // {
  //   name: 'imageStyle',
  // title: { label: 'Image style', tip: 'Image style' },
  //   propType: 'object',
  // },
  {
    name: 'image',
    title: {
      label: "Image URL",
      tip: "Set the display image. When it is a string, it means a custom image address."
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

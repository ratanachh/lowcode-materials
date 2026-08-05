export default [{
  title: "Segmentation controller",
  screenshot: require('./__screenshots__/segmented.png'),
  schema: {
    componentName: 'Segmented',
    props: {
      options: ['Daily', 'Weekly', 'Monthly'],
      // value: 'Daily',
      defaultValue: 'Daily'
    }
  }
}];

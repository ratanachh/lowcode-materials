import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("分段控制器", "Segmentation controller"),
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

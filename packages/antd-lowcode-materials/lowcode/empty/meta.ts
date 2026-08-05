import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Empty',
  title: i18n("空状态", "Empty"),
  category: "Data Display",
  props: [{
    name: 'description',
    title: {
      label: i18n("内容描述", "Content description"),
      tip: i18n("自定义描述内容", "Custom description content")
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
      label: i18n("图片地址", "Image URL"),
      tip: i18n("设置显示图片，为string时表示自定义图片地址。", "Set the display image. When it is a string, it means a custom image address.")
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

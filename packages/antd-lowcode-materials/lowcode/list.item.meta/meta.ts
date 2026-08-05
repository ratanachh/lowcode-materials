import { i18n } from "../_utils/i18n";
export default {
  componentName: 'List.Item.Meta',
  title: i18n("列表项内容", "List itemContent"),
  category: '',
  props: [{
    name: 'avatar',
    title: {
      label: i18n("列表元素图标", "List element icon"),
      tip: i18n("列表元素的图标", "List element icon")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'title',
    title: {
      label: i18n("列表元素标题", "List element title"),
      tip: i18n("列表元素的标题", "The title of the list element")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }, {
    name: 'avatar',
    title: {
      label: i18n("列表元素描述内容", "List element description content"),
      tip: i18n("列表元素的描述内容", "The description content of the list element")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node']
    }
  }],
  configure: {
    component: {
      nestingRule: {
        parentWhitelist: ['List']
      }
    }
  }
};

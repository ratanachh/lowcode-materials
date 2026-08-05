import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Timeline.Item',
  title: i18n("时间轴项", "Timeline Item"),
  category: '',
  props: [{
    name: 'color',
    title: {
      label: i18n("颜色", "Color"),
      tip: i18n("颜色", "Color")
    },
    propType: 'string',
    defaultValue: '#00f',
    setter: 'ColorSetter'
  }, {
    name: 'dot',
    title: {
      label: i18n("时间轴点", "timeline point"),
      tip: i18n("时间轴点", "timeline point")
    },
    propType: 'node'
  }, {
    name: 'label',
    title: {
      label: i18n("标签", "Tag"),
      tip: i18n("标签", "Tag")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', 'node', 'func']
    }
  }, {
    name: 'position',
    title: {
      label: i18n("位置", "Position"),
      tip: i18n("位置", "Position")
    },
    propType: {
      type: 'oneOf',
      value: ['left', 'right']
    }
  }],
  configure: {
    supports: {
      style: true
    }
  }
};

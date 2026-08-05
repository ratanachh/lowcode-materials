import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Row',
  title: i18n("栅格-行", "Grid-Row"),
  category: "Layout",
  props: [{
    name: 'align',
    title: {
      label: i18n("垂直对齐方式", "VerticalAlign"),
      tip: i18n("垂直对齐方式", "VerticalAlign")
    },
    propType: {
      type: 'oneOf',
      value: ['top', 'middle', 'bottom']
    }
  }, {
    name: 'h-gutter',
    title: {
      label: i18n("水平间隔", "HorizontalGutter"),
      tip: i18n("栅格水平间隔，单位为像素(px)", "Grid horizontal interval, unit is pixel (px)")
    },
    propType: 'number',
    setter: {
      componentName: 'NumberSetter',
      props: {
        min: 0
      }
    },
    defaultValue: 0,
    extraProps: {
      getValue(target) {
        const {
          node
        } = target;
        const gutter = node.getPropValue('gutter');
        if (typeof gutter === 'number') {
          return gutter;
        } else if (Array.isArray(gutter)) {
          return gutter[0];
        }
        return 0;
      },
      setValue(target, value) {
        const {
          node
        } = target;
        const gutter = node.getPropValue('gutter');
        if (Array.isArray(gutter)) {
          gutter[0] = value;
          node.setPropValue('gutter', gutter);
        } else {
          node.setPropValue('gutter', [value, 0]);
        }
      }
    }
  }, {
    name: 'v-gutter',
    title: {
      label: i18n("垂直间隔", "VerticalGutter"),
      tip: i18n("栅格垂直间隔，单位为像素(px)", "Grid vertical spacing in pixels (px)")
    },
    propType: 'number',
    setter: {
      componentName: 'NumberSetter',
      props: {
        min: 0
      }
    },
    defaultValue: 0,
    extraProps: {
      getValue(target) {
        const {
          node
        } = target;
        const gutter = node.getPropValue('gutter');
        if (typeof gutter === 'number') {
          return 0;
        } else if (Array.isArray(gutter)) {
          return gutter[1];
        }
        return 0;
      },
      setValue(target, value) {
        const {
          node
        } = target;
        const gutter = node.getPropValue('gutter');
        if (Array.isArray(gutter)) {
          gutter[1] = value;
          node.setPropValue('gutter', gutter);
        } else {
          node.setPropValue('gutter', [gutter, value]);
        }
      }
    }
  }, {
    name: 'justify',
    title: {
      label: i18n("水平排列方式", "horizontal arrangement"),
      tip: i18n("水平排列方式", "horizontal arrangement")
    },
    propType: {
      type: 'oneOf',
      value: ['start', 'end', 'center', 'space-around', 'space-between']
    }
  }, {
    name: 'wrap',
    title: {
      label: i18n("自动换行", "Automatic line wrapping"),
      tip: i18n("是否自动换行", "Auto wrap")
    },
    propType: 'bool',
    defaultValue: true
  }],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        childWhitelist: ['Col']
      }
    },
    supports: {
      style: true
    }
  }
};

import { ComponentMetadata } from "@rchh/lowcode-types";
import snippets from './snippets';
import { i18n } from "../_utils/i18n";

const SpaceMeta: ComponentMetadata | any = {
  snippets,
  componentName: 'Space',
  title: i18n("间距", "Space"),
  category: "Layout",
  props: [{
    name: 'align',
    title: {
      label: i18n("对齐方式", "Align"),
      tip: i18n("对齐方式", "Align")
    },
    propType: {
      type: 'oneOf',
      value: ['start', 'end', 'center', 'baseline']
    }
  }, {
    name: 'direction',
    title: {
      label: i18n("间距方向", "SpaceDirection"),
      tip: i18n("间距方向", "SpaceDirection")
    },
    propType: {
      type: 'oneOf',
      value: ['vertical', 'horizontal']
    }
  }, {
    name: 'size',
    title: {
      label: i18n("间距大小", "SpaceSize"),
      tip: i18n("间距大小", "SpaceSize")
    },
    propType: {
      type: 'oneOfType',
      value: [{
        type: 'oneOf',
        value: ['small', 'middle', 'large']
      }, 'number']
    },
    defaultValue: 'middle'
  }, {
    name: 'wrap',
    title: {
      label: i18n("是否自动换行", "Auto wrap"),
      tip: i18n("是否自动换行", "Auto wrap")
    },
    propType: "bool",
    condition: {
      type: 'JSFunction',
      value: 'target => target.getProps().getPropValue("direction")==="horizontal"'
    }
  }, {
    name: 'split',
    title: {
      label: i18n("间隔组件", "GutterComponent"),
      tip: i18n("间隔组件,可拖组件进来， 常用的有竖向分隔线", "Spacer components can be dragged in. Commonly used are vertical dividers.")
    },
    propType: "node"
  }],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      style: true
    }
  }
};

export default SpaceMeta;

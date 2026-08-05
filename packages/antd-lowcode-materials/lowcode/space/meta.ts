import { ComponentMetadata } from "@rchh/lowcode-types";
import snippets from './snippets';

const SpaceMeta: ComponentMetadata | any = {
  snippets,
  componentName: 'Space',
  title: "Space",
  category: "Layout",
  props: [{
    name: 'align',
    title: {
      label: "Align",
      tip: "Align"
    },
    propType: {
      type: 'oneOf',
      value: ['start', 'end', 'center', 'baseline']
    }
  }, {
    name: 'direction',
    title: {
      label: "SpaceDirection",
      tip: "SpaceDirection"
    },
    propType: {
      type: 'oneOf',
      value: ['vertical', 'horizontal']
    }
  }, {
    name: 'size',
    title: {
      label: "SpaceSize",
      tip: "SpaceSize"
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
      label: "Auto wrap",
      tip: "Auto wrap"
    },
    propType: "bool",
    condition: {
      type: 'JSFunction',
      value: 'target => target.getProps().getPropValue("direction")==="horizontal"'
    }
  }, {
    name: 'split',
    title: {
      label: "GutterComponent",
      tip: "Spacer components can be dragged in. Commonly used are vertical dividers."
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

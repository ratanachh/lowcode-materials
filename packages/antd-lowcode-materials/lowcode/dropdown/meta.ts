import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Dropdown',
  title: i18n("下拉菜单", "Dropdown"),
  category: "Navigation",
  props: [{
    name: 'open',
    title: {
      label: i18n("菜单是否显示", "Menu visible"),
      tip: i18n("菜单是否显示", "Menu visible")
    },
    propType: {
      type: 'oneOf',
      value: [true, false, '-']
    },
    defaultValue: '-',
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: i18n("默认非受控", "Uncontrolled by default"),
          value: '-'
        }, {
          title: i18n("显示", "Show"),
          value: true
        }, {
          title: i18n("不显示", "Hide"),
          value: false
        }]
      }
    },
    extraProps: {
      getValue(target) {
        const {
          node
        } = target;
        let value = node.getPropValue('open');
        if (value === undefined) {
          value = '-';
        }
        return value;
      },
      setValue(target, value) {
        const {
          node
        } = target;
        if (value === '-') {
          setTimeout(() => {
            node.clearPropValue('open');
          });
        }
      }
    }
  }, {
    name: 'arrow',
    title: {
      label: i18n("显示下拉箭头", "Show drop down arrow"),
      tip: i18n("是否显示下拉箭头", "Show arrow")
    },
    propType: 'bool',
    defaultValue: false
  }, {
    name: 'disabled',
    title: {
      label: i18n("是否禁用", "Disabled"),
      tip: i18n("是否为禁用状态", "Whether disabled")
    },
    propType: 'bool'
  },
  // {
  //   name: 'getPopupContainer',
  //   title: {
  // label: 'Render Parent node',
  //     tip:
  // 'Menu rendering parent node. By default, it is rendered on the body. If you encounter menu scrolling positioning problems, try changing it to the scrolling area and positioning it relative to it. [Example](https://codepen.io/afc163/pen/zEjNOy?editors=0010)',
  //   },
  //   propType: 'func',
  // },
  {
    name: 'overlay',
    title: {
      label: i18n("菜单", "Menu"),
      tip: i18n("菜单", "Menu")
    },
    propType: {
      type: 'oneOfType',
      value: ['node', 'func']
    }
  },
  // {
  //   name: 'overlayClassName',
  // title: { label: 'Root class name', tip: 'Root class name' },
  //   propType: 'string',
  // },
  // {
  //   name: 'overlayStyle',
  // title: { label: 'Root style', tip: 'Root style' },
  //   propType: 'object',
  // },
  {
    name: 'placement',
    title: {
      label: i18n("弹出位置", "popup position"),
      tip: i18n("菜单弹出位置：`bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight`", "Menu pop-up position: `bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight`")
    },
    propType: {
      type: 'oneOf',
      value: ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight']
    }
  }, {
    name: 'trigger',
    title: {
      label: i18n("触发下拉的行为", "The behavior that triggers the drop-down"),
      tip: i18n("触发下拉的行为, 移动端不支持 hover", "Trigger drop-down behavior, mobile version does not support hover")
    },
    propType: {
      type: 'arrayOf',
      value: {
        type: 'oneOf',
        value: ['click', 'hover', 'contextMenu']
      }
    }
  }, {
    name: 'onOpenChange',
    title: {
      label: i18n("显示状态回调", "ShowStatuscallback"),
      tip: i18n("菜单显示状态改变时调用，参数为 `open`", "Called when the menu display status changes, the parameter is `open`")
    },
    propType: 'func'
  }],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      style: true,
      events: [{
        name: 'onOpenChange',
        template: "onOpenChange(open,${extParams}){\n// MenuShowStatusChange callback\nconsole.log('onOpenChange',open);}"
      }]
    }
  }
};

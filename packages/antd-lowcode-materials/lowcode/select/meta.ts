import { uuid } from '../_utils/utils';
import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Select',
  title: i18n("选择器", "Select"),
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: i18n("默认值", "Default value"),
      tip: i18n("默认选中值", "Default selected value")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', {
        type: 'arrayOf',
        value: 'string'
      }, 'number', {
        type: 'arrayOf',
        value: 'number'
      }]
    }
  }, {
    name: 'value',
    title: {
      label: i18n("当前值", "Current value"),
      tip: i18n("当前值", "Current value")
    },
    propType: {
      type: 'oneOfType',
      value: ['string', {
        type: 'arrayOf',
        value: 'string'
      }, 'number', {
        type: 'arrayOf',
        value: 'number'
      }]
    }
  }, {
    name: 'options',
    title: {
      label: i18n("可选项", "Optional"),
      tip: i18n("可选项", "Optional")
    },
    propType: {
      type: 'arrayOf',
      value: {
        type: 'shape',
        value: [{
          name: 'label',
          propType: 'string',
          description: "Option label",
          defaultValue: "Option label"
        }, {
          name: 'value',
          propType: ['string', 'number'],
          description: "Option value",
          defaultValue: "Option value"
        }, {
          name: 'disabled',
          propType: 'bool',
          description: "Disabled",
          defaultValue: false
        }]
      }
    },
    setter: {
      componentName: 'ArraySetter',
      props: {
        itemSetter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [{
                name: 'label',
                title: i18n("选项名", "Option label"),
                setter: ['StringSetter', 'VariableSetter'],
                isRequired: true
              }, {
                name: 'value',
                title: i18n("选项值", "Option value"),
                setter: ['StringSetter', 'NumberSetter', 'VariableSetter'],
                isRequired: true
              }, {
                name: 'disabled',
                title: i18n("是否禁用", "Disabled"),
                setter: ['BoolSetter', 'VariableSetter']
              }]
            }
          },
          initialValue: () => {
            return {
              label: i18n("选项名", "Option label"),
              value: uuid(),
              disabled: false
            };
          }
        }
      }
    }
  }, {
    name: 'allowClear',
    title: {
      label: i18n("支持清除", "Allow clear"),
      tip: i18n("是否允许清除", "Whether allow clear")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'autoFocus',
    title: {
      label: i18n("自动聚焦", "Auto focus"),
      tip: i18n("默认获取焦点", "Get focus by default")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'defaultActiveFirstOption',
    title: {
      label: i18n("高亮首个选项", "Highlight first option"),
      tip: i18n("是否默认高亮第一个选项", "Whether to highlight the first option by default")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'disabled',
    title: {
      label: i18n("是否禁用", "Disabled"),
      tip: i18n("是否为禁用状态", "Whether disabled")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'labelInValue',
    title: {
      label: i18n("值包含label", "The value contains label"),
      tip: i18n("把每个选项的 label 包装到 value 中", "each Option label Wrap to value Middle")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'mode',
    title: {
      label: i18n("多选/单选", "Multiple/Single"),
      tip: i18n("多选/单选", "Multiple/Single")
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: i18n("单选", "Single"),
          value: 'single'
        }, {
          title: i18n("多选", "Multiple"),
          value: 'multiple'
        }, {
          title: i18n("任意内容", "Any content"),
          value: 'tags'
        }]
      }
    },
    propType: {
      type: 'oneOf',
      value: ['single', 'multiple', 'tags']
    }
  }, {
    name: 'maxTagCount',
    title: {
      label: i18n("最大tag数", "Maximum number of tags"),
      tip: i18n("最多显示多少个tag", "How many tags can be displayed at most?")
    },
    condition(target) {
      return target.getProps().getPropValue('mode') === 'tags';
    },
    propType: 'number'
  }, {
    name: 'maxTagTextLength',
    title: {
      label: i18n("tag文本长度", "tagTextLength"),
      tip: i18n("最大显示的tag文本长度", "Maximum displayed tag text length")
    },
    condition(target) {
      return target.getProps().getPropValue('mode') === 'tags';
    },
    propType: 'number'
  }, {
    name: 'notFoundContent',
    title: {
      label: i18n("搜索为空提示文案", "Prompt copy when search is empty"),
      tip: i18n("搜索为空提示文案", "Prompt copy when search is empty")
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'placeholder',
    title: {
      label: i18n("选择框默认文字", "Select placeholder"),
      tip: i18n("选择框默认文字", "Select placeholder")
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'showArrow',
    title: {
      label: i18n("是否显示下拉箭头", "Show arrow"),
      tip: i18n("是否显示下拉小箭头", "Whether to display the small drop-down arrow")
    },
    propType: 'bool',
    setter: 'BoolSetter'
  }, {
    name: 'showSearch',
    title: {
      label: i18n("是否可搜索", "YesNoCan Search"),
      tip: i18n("是否可搜索", "YesNoCan Search")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'size',
    title: {
      label: i18n("尺寸", "Size"),
      tip: i18n("选择框大小", "Select size")
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: i18n("大", "Large"),
          value: 'large'
        }, {
          title: i18n("中", "Middle"),
          value: 'middle'
        }, {
          title: i18n("小", "Small"),
          value: 'small'
        }]
      }
    },
    propType: {
      type: 'oneOf',
      value: ['large', 'middle', 'small']
    },
    defaultValue: 'middle'
  }, {
    name: 'loading',
    title: {
      label: i18n("加载中", "Loading"),
      tip: i18n("加载中状态", "LoadingStatus")
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'bordered',
    title: {
      label: i18n("显示边框", "Show border"),
      tip: i18n("是否有边框", "Whether bordered")
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'filterOption',
    title: {
      label: i18n("筛选可选项", "Filter options"),
      tip: i18n("是否根据输入进行筛选", "Whether to filter based on input")
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'func']
    },
    defaultValue: true
  }, {
    name: 'optionFilterProp',
    title: {
      label: i18n("用于筛选的字段", "Used for Filter Field"),
      tip: i18n("用于过滤的字段", "Fields to filter on")
    },
    propType: {
      type: 'oneOf',
      value: ['value', 'label']
    },
    defaultValue: 'value'
  },
  // {
  //   name: 'suffixIcon',
  // title: { label: 'Self-suffix icon', tip: 'Customized selection box suffix icon' },
  //   propType: 'node',
  // },
  // {
  //   name: 'removeIcon',
  // title: { label: 'Clear icon', tip: 'Customized multi-select box clear icon' },
  //   propType: 'node',
  // },
  // {
  //   name: 'clearIcon',
  // title: { label: 'Customized multi-select box clear icon', tip: 'Customized multi-select box clear icon' },
  //   propType: 'node',
  // },
  // {
  //   name: 'menuItemSelectedIcon',
  //   title: {
  // label: 'Customize the icon of the currently selected item during multi-selection',
  // tip: 'Customize the icon of the currently selected item during multi-selection',
  //   },
  //   propType: 'node',
  // },
  {
    name: 'tokenSeparators',
    title: {
      label: i18n("自动分词的分隔符", "Separator for automatic word segmentation"),
      tip: i18n("自动分词的分隔符", "Separator for automatic word segmentation")
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    }
  }, {
    name: 'onBlur',
    title: {
      label: i18n("失去焦点时回调", "On blurcallback"),
      tip: i18n("失去焦点时回调", "On blurcallback")
    },
    propType: 'func'
  }, {
    name: 'onChange',
    title: {
      label: i18n("选中回调函数", "Select callback function"),
      tip: i18n("选中 option，或 input 的 value 变化时，调用此函数", "This function is called when the option is selected or the value of the input changes.")
    },
    propType: 'func'
  }, {
    name: 'onDeselect',
    title: {
      label: i18n("取消选中时回调", "Callback when deselected"),
      tip: i18n("取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效", "Called when unselected. The parameter is the value (or key) value of the selected item. It only takes effect in multiple or tags mode.")
    },
    propType: 'func'
  }, {
    name: 'onFocus',
    title: {
      label: i18n("获得焦点时回调", "Callback when focus is obtained"),
      tip: i18n("获得焦点时回调", "Callback when focus is obtained")
    },
    propType: 'func'
  }, {
    name: 'onInputKeyDown',
    title: {
      label: i18n("按键按下时回调", "Callback when button is pressed"),
      tip: i18n("按键按下时回调", "Callback when button is pressed")
    },
    propType: 'func'
  }, {
    name: 'onMouseEnter',
    title: {
      label: i18n("鼠标移入时回调", "Callback when mouse moves in"),
      tip: i18n("鼠标移入时回调", "Callback when mouse moves in")
    },
    propType: 'func'
  }, {
    name: 'onMouseLeave',
    title: {
      label: i18n("鼠标移出时回调", "Callback when the mouse is moved out"),
      tip: i18n("鼠标移出时回调", "Callback when the mouse is moved out")
    },
    propType: 'func'
  }, {
    name: 'onPopupScroll',
    title: {
      label: i18n("下拉列表滚动时的回调", "Callback when scrolling the dropdown list"),
      tip: i18n("下拉列表滚动时的回调", "Callback when scrolling the dropdown list")
    },
    propType: 'func'
  }, {
    name: 'onSearch',
    title: {
      label: i18n("文本框值变化时回调", "Callback when input value changes"),
      tip: i18n("文本框值变化时回调", "Callback when input value changes")
    },
    propType: 'func'
  }, {
    name: 'onSelect',
    title: {
      label: i18n("被选中时回调", "Callback when selected"),
      tip: i18n("被选中时调用，参数为选中项的 value (或 key) 值", "Called when selected, the parameter is the value (or key) value of the selected item")
    },
    propType: 'func'
  }, {
    name: 'onDropdownVisibleChange',
    title: {
      label: i18n("展开下拉菜单的回调", "Callback when dropdown opens"),
      tip: i18n("展开下拉菜单的回调", "Callback when dropdown opens")
    },
    propType: 'func'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onBlur',
        template: "onBlur(${extParams}){\n// On blurcallback\nconsole.log('onBlur');}"
      }, {
        name: 'onChange',
        template: "onChange(value,option,${extParams}){\n// This function is called when option is selected or the value of input changes\nconsole.log('onChange',value,option);}"
      }, {
        name: 'onDeselect',
        template: "onDeselect(value,${extParams}){\n// Called when deselecting\nconsole.log('onDeselect',value);}"
      }, {
        name: 'onFocus',
        template: "onFocus(${extParams}){\n// Callback when focus is obtained\nconsole.log('onFocus');}"
      }, {
        name: 'onInputKeyDown',
        template: "onInputKeyDown(${extParams}){\n// Callback when the key is pressed\nconsole.log('onInputKeyDown');}"
      }, {
        name: 'onMouseEnter',
        template: "onMouseEnter(${extParams}){\n// Callback when the mouse moves in\nconsole.log('onMouseEnter');}"
      }, {
        name: 'onMouseLeave',
        template: "onMouseLeave(${extParams}){\n// Callback when the mouse moves out\nconsole.log('onMouseLeave');}"
      }, {
        name: 'onPopupScroll',
        template: "onPopupScroll(${extParams}){\n// Callback when the drop-down list scrolls\nconsole.log('onPopupScroll');}"
      }, {
        name: 'onSearch',
        template: "onSearch(value,${extParams}){\n// Callback when input value changes\nconsole.log('onSearch',value);}"
      }, {
        name: 'onSelect',
        template: "onSelect(value,option,${extParams}){\n// On select\nconsole.log('onSelect',value,option);}"
      }, {
        name: 'onDropdownVisibleChange',
        template: "onDropdownVisibleChange(open,${extParams}){\n// Callback when dropdown opens\nconsole.log('onDropdownVisibleChange',open);}"
      }]
    }
  }
};

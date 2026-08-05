import { uuid } from '../_utils/utils';
import snippets from './snippets';
export default {
  snippets,
  componentName: 'Select',
  title: "Select",
  category: "Data Entry",
  props: [{
    name: 'defaultValue',
    title: {
      label: "Default value",
      tip: "Default selected value"
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
      label: "Current value",
      tip: "Current value"
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
      label: "Optional",
      tip: "Optional"
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
                title: "Option label",
                setter: ['StringSetter', 'VariableSetter'],
                isRequired: true
              }, {
                name: 'value',
                title: "Option value",
                setter: ['StringSetter', 'NumberSetter', 'VariableSetter'],
                isRequired: true
              }, {
                name: 'disabled',
                title: "Disabled",
                setter: ['BoolSetter', 'VariableSetter']
              }]
            }
          },
          initialValue: () => {
            return {
              label: "Option label",
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
      label: "Allow clear",
      tip: "Whether allow clear"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'autoFocus',
    title: {
      label: "Auto focus",
      tip: "Get focus by default"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'defaultActiveFirstOption',
    title: {
      label: "Highlight first option",
      tip: "Whether to highlight the first option by default"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'disabled',
    title: {
      label: "Disabled",
      tip: "Whether disabled"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'labelInValue',
    title: {
      label: "The value contains label",
      tip: "each Option label Wrap to value Middle"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'mode',
    title: {
      label: "Multiple/Single",
      tip: "Multiple/Single"
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: "Single",
          value: 'single'
        }, {
          title: "Multiple",
          value: 'multiple'
        }, {
          title: "Any content",
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
      label: "Maximum number of tags",
      tip: "How many tags can be displayed at most?"
    },
    condition(target) {
      return target.getProps().getPropValue('mode') === 'tags';
    },
    propType: 'number'
  }, {
    name: 'maxTagTextLength',
    title: {
      label: "tagTextLength",
      tip: "Maximum displayed tag text length"
    },
    condition(target) {
      return target.getProps().getPropValue('mode') === 'tags';
    },
    propType: 'number'
  }, {
    name: 'notFoundContent',
    title: {
      label: "Prompt copy when search is empty",
      tip: "Prompt copy when search is empty"
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'placeholder',
    title: {
      label: "Select placeholder",
      tip: "Select placeholder"
    },
    propType: 'string',
    setter: 'StringSetter'
  }, {
    name: 'showArrow',
    title: {
      label: "Show arrow",
      tip: "Whether to display the small drop-down arrow"
    },
    propType: 'bool',
    setter: 'BoolSetter'
  }, {
    name: 'showSearch',
    title: {
      label: "YesNoCan Search",
      tip: "YesNoCan Search"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'size',
    title: {
      label: "Size",
      tip: "Select size"
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [{
          title: "Large",
          value: 'large'
        }, {
          title: "Middle",
          value: 'middle'
        }, {
          title: "Small",
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
      label: "Loading",
      tip: "LoadingStatus"
    },
    propType: 'bool',
    defaultValue: false,
    setter: 'BoolSetter'
  }, {
    name: 'bordered',
    title: {
      label: "Show border",
      tip: "Whether bordered"
    },
    propType: 'bool',
    defaultValue: true,
    setter: 'BoolSetter'
  }, {
    name: 'filterOption',
    title: {
      label: "Filter options",
      tip: "Whether to filter based on input"
    },
    propType: {
      type: 'oneOfType',
      value: ['bool', 'func']
    },
    defaultValue: true
  }, {
    name: 'optionFilterProp',
    title: {
      label: "Used for Filter Field",
      tip: "Fields to filter on"
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
      label: "Separator for automatic word segmentation",
      tip: "Separator for automatic word segmentation"
    },
    propType: {
      type: 'arrayOf',
      value: 'string'
    }
  }, {
    name: 'onBlur',
    title: {
      label: "On blurcallback",
      tip: "On blurcallback"
    },
    propType: 'func'
  }, {
    name: 'onChange',
    title: {
      label: "Select callback function",
      tip: "This function is called when the option is selected or the value of the input changes."
    },
    propType: 'func'
  }, {
    name: 'onDeselect',
    title: {
      label: "Callback when deselected",
      tip: "Called when unselected. The parameter is the value (or key) value of the selected item. It only takes effect in multiple or tags mode."
    },
    propType: 'func'
  }, {
    name: 'onFocus',
    title: {
      label: "Callback when focus is obtained",
      tip: "Callback when focus is obtained"
    },
    propType: 'func'
  }, {
    name: 'onInputKeyDown',
    title: {
      label: "Callback when button is pressed",
      tip: "Callback when button is pressed"
    },
    propType: 'func'
  }, {
    name: 'onMouseEnter',
    title: {
      label: "Callback when mouse moves in",
      tip: "Callback when mouse moves in"
    },
    propType: 'func'
  }, {
    name: 'onMouseLeave',
    title: {
      label: "Callback when the mouse is moved out",
      tip: "Callback when the mouse is moved out"
    },
    propType: 'func'
  }, {
    name: 'onPopupScroll',
    title: {
      label: "Callback when scrolling the dropdown list",
      tip: "Callback when scrolling the dropdown list"
    },
    propType: 'func'
  }, {
    name: 'onSearch',
    title: {
      label: "Callback when input value changes",
      tip: "Callback when input value changes"
    },
    propType: 'func'
  }, {
    name: 'onSelect',
    title: {
      label: "Callback when selected",
      tip: "Called when selected, the parameter is the value (or key) value of the selected item"
    },
    propType: 'func'
  }, {
    name: 'onDropdownVisibleChange',
    title: {
      label: "Callback when dropdown opens",
      tip: "Callback when dropdown opens"
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

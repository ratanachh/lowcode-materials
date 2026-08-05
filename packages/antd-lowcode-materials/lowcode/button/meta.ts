import snippets from './snippets';

export default {
  componentName: 'Button',
  title: "Button",
  category: 'General',
  props: [
    {
      title: "Function",
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'children',
          title: {
            label: "Content",
            tip: "children | Content",
          },
          propType: {
            type: 'oneOfType',
            value: ['node', 'string'],
          },
          setter: ['SlotSetter', 'StringSetter', 'VariableSetter'],
        },
        {
          name: 'htmlType',
          title: {
            label: "HTML type",
            tip: i18n(
              'htmlType | Set the original `type` of `button`',
              'htmlType | Set native `button` `type`',
            ),
          },
          propType: {
            type: 'oneOf',
            value: ['submit', 'reset', 'button'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'Submit',
                    value: 'submit',
                  },
                  {
                    title: 'Reset',
                    value: 'reset',
                  },
                  {
                    title: 'Button',
                    value: 'button',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'button',
        },
        {
          name: 'href',
          title: {
            label: "Href",
            tip: i18n(
              'href | Redirect address',
              'href | Link URL; when set, button behaves like an anchor',
            ),
          },
          propType: 'string',
          setter: ['StringSetter', 'VariableSetter'],
        },
        {
          name: 'target',
          title: {
            label: 'Target',
            tip: i18n(
              'target | Equivalent to a link target',
              'target | Same as anchor target; effective when href is set',
            ),
          },
          propType: {
            type: 'oneOf',
            value: ['_self', '_blank', '_parent', '_top'],
          },
          setter: [
            {
              componentName: 'SelectSetter',
              props: {
                options: [
                  {
                    title: "Same window",
                    value: '_self',
                  },
                  {
                    title: "New tab",
                    value: '_blank',
                  },
                  {
                    title: "Parent frame",
                    value: '_parent',
                  },
                  {
                    title: "Top frame",
                    value: '_top',
                  },
                ],
              },
            },
            'StringSetter',
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("href")?.trim()',
          },
        },
      ],
    },
    {
      title: "Appearance",
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'type',
          title: {
            label: "Type",
            tip: "type | Button type",
          },
          propType: {
            type: 'oneOf',
            value: ['primary', 'ghost', 'dashed', 'danger', 'link', 'text'],
          },
          setter: [
            {
              componentName: 'SelectSetter',
              props: {
                options: [
                  {
                    title: "Primary",
                    value: 'primary',
                  },
                  {
                    title: "Dashed",
                    value: 'dashed',
                  },
                  {
                    title: "Danger",
                    value: 'danger',
                  },
                  {
                    title: "Link",
                    value: 'link',
                  },
                  {
                    title: "Text",
                    value: 'text',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'size',
          title: {
            label: "Size",
            tip: "size | Button size",
          },
          propType: { type: 'oneOf', value: ['large', 'middle', 'small'] },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: "Large",
                    value: 'large',
                  },
                  {
                    title: "Middle",
                    value: 'middle',
                  },
                  {
                    title: "Small",
                    value: 'small',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'middle',
        },
        {
          name: 'shape',
          title: {
            label: "Shape",
            tip: i18n(
              'shape | Set button shape, optional `circle`, `round` or unset',
              'shape | Button shape: `circle`, `round`, or default',
            ),
          },
          propType: { type: 'oneOf', value: ['default', 'circle', 'round'] },
          defaultValue: 'default',
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: "Default",
                    value: 'default',
                  },
                  {
                    title: "Circle",
                    value: 'circle',
                  },
                  {
                    title: "Round",
                    value: 'round',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'icon',
          title: {
            label: "Icon",
            tip: "icon | Button icon",
          },
          propType: 'node',
          setter: {
            componentName: 'SlotSetter',
            initialValue: {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'Icon',
                  props: {
                    type: 'SmileOutlined',
                    size: 20,
                    rotate: 0,
                    spin: false,
                  },
                },
              ],
            },
          },
        },
        {
          name: 'block',
          title: {
            label: "Block",
            tip: i18n(
              'block | Option to fit button width to its parent width',
              'block | Fit button width to parent',
            ),
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'danger',
          title: {
            label: "Danger",
            tip: "danger | Danger button",
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'ghost',
          title: {
            label: "Ghost",
            tip: i18n(
              'ghost | Ghost property, makes button background transparent',
              'ghost | Transparent background',
            ),
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
      ],
    },
    {
      title: "State",
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'loading',
          title: {
            label: "Loading",
            tip: "loading | Loading state",
          },
          propType: 'bool',
          setter: ['BoolSetter', 'VariableSetter'],
        },
        {
          name: 'disabled',
          title: {
            label: "Disabled",
            tip: "disabled | Whether disabled",
          },
          propType: 'bool',
          setter: ['BoolSetter', 'VariableSetter'],
          defaultValue: false,
        },
      ],
    },
    {
      name: 'onClick',
      title: {
        label: "On click",
        tip: "Callback when button is clicked",
      },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      events: [
        {
          name: 'onClick',
          template:
            "onClick(event,${extParams}){\n// Callback when button is clicked\nconsole.log('onClick', event);}",
        },
      ],
      style: true,
    },
  },
  snippets,
};

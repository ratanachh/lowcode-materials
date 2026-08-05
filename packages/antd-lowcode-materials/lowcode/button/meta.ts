import snippets from './snippets';
import { i18n } from '../_utils/i18n';

export default {
  componentName: 'Button',
  title: i18n('按钮', 'Button'),
  category: 'General',
  props: [
    {
      title: i18n('功能', 'Function'),
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'children',
          title: {
            label: i18n('内容', 'Content'),
            tip: i18n('children | 内容', 'children | Content'),
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
            label: i18n('原生类型', 'HTML type'),
            tip: i18n(
              'htmlType | 设置 `button` 原生的 `type` 值',
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
            label: i18n('跳转地址', 'Href'),
            tip: i18n(
              'href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致',
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
              'target | 相当于 a 链接的 target 属性，href 存在时生效',
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
                    title: i18n('本窗口跳转', 'Same window'),
                    value: '_self',
                  },
                  {
                    title: i18n('打开新标签页', 'New tab'),
                    value: '_blank',
                  },
                  {
                    title: i18n('父窗口跳转', 'Parent frame'),
                    value: '_parent',
                  },
                  {
                    title: i18n('顶层窗口跳转', 'Top frame'),
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
      title: i18n('外观', 'Appearance'),
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'type',
          title: {
            label: i18n('类型', 'Type'),
            tip: i18n('type | 设置按钮类型', 'type | Button type'),
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
                    title: i18n('主按钮', 'Primary'),
                    value: 'primary',
                  },
                  {
                    title: i18n('虚线框按钮', 'Dashed'),
                    value: 'dashed',
                  },
                  {
                    title: i18n('危险按钮', 'Danger'),
                    value: 'danger',
                  },
                  {
                    title: i18n('链接按钮', 'Link'),
                    value: 'link',
                  },
                  {
                    title: i18n('类文本按钮', 'Text'),
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
            label: i18n('尺寸', 'Size'),
            tip: i18n('size | 设置按钮大小', 'size | Button size'),
          },
          propType: { type: 'oneOf', value: ['large', 'middle', 'small'] },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: i18n('大', 'Large'),
                    value: 'large',
                  },
                  {
                    title: i18n('中', 'Middle'),
                    value: 'middle',
                  },
                  {
                    title: i18n('小', 'Small'),
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
            label: i18n('形状', 'Shape'),
            tip: i18n(
              'shape | 设置按钮形状，可选值为 `circle`、 `round` 或者不设',
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
                    title: i18n('默认', 'Default'),
                    value: 'default',
                  },
                  {
                    title: i18n('圆形', 'Circle'),
                    value: 'circle',
                  },
                  {
                    title: i18n('圆角', 'Round'),
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
            label: i18n('图标', 'Icon'),
            tip: i18n('icon | 设置按钮的图标组件', 'icon | Button icon'),
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
            label: i18n('自适应', 'Block'),
            tip: i18n(
              'block | 将按钮宽度调整为其父宽度的选项',
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
            label: i18n('危险按钮', 'Danger'),
            tip: i18n('danger | 设置危险按钮', 'danger | Danger button'),
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'ghost',
          title: {
            label: i18n('幽灵属性', 'Ghost'),
            tip: i18n(
              'ghost | 幽灵属性，使按钮背景透明',
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
      title: i18n('状态', 'State'),
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'loading',
          title: {
            label: i18n('载入状态', 'Loading'),
            tip: i18n('loading | 设置按钮载入状态', 'loading | Loading state'),
          },
          propType: 'bool',
          setter: ['BoolSetter', 'VariableSetter'],
        },
        {
          name: 'disabled',
          title: {
            label: i18n('是否禁用', 'Disabled'),
            tip: i18n('disabled | 是否为禁用状态', 'disabled | Whether disabled'),
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
        label: i18n('点击回调', 'On click'),
        tip: i18n('点击按钮时的回调', 'Callback when button is clicked'),
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

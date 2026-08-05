import { i18n } from '../_utils/i18n';

export default [
  {
    title: i18n('主按钮', 'Primary Button'),
    screenshot: require('./__screenshots__/button-1.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'primary',
        children: 'Primary Button',
      },
    },
  },
  {
    title: i18n('次按钮', 'Default Button'),
    screenshot: require('./__screenshots__/button-2.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'default',
        children: 'Default Button',
      },
    },
  },
  {
    title: i18n('危险按钮', 'Danger Button'),
    screenshot: require('./__screenshots__/button-3.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'danger',
        children: 'Danger Button',
      },
    },
  },
  {
    title: i18n('文字按钮', 'Text Button'),
    screenshot: require('./__screenshots__/button-4.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'text',
        children: 'Text Button',
      },
    },
  },
  {
    title: i18n('虚框按钮', 'Dashed Button'),
    screenshot: require('./__screenshots__/button-5.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'dashed',
        children: 'Dashed Button',
      },
    },
  },
  {
    title: i18n('链接按钮', 'Link Button'),
    screenshot: require('./__screenshots__/button-6.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'link',
        children: 'Link Button',
      },
    },
  },
];

import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Avatar',
  title: i18n("头像", "Avatar"),
  category: "Data Display",
  props: [{
    name: 'icon',
    title: {
      label: i18n("头像图标", "AvatarIcon"),
      tip: i18n("设置头像的自定义图标", "Set Avatar CustomIcon")
    },
    propType: 'node'
  }, {
    name: 'shape',
    title: {
      label: i18n("头像形状", "avatar shape"),
      tip: i18n("指定头像的形状", "Specify the shape of the avatar")
    },
    propType: {
      type: 'oneOf',
      value: ['circle', 'square']
    }
  }, {
    name: 'size',
    title: {
      label: i18n("尺寸", "Size"),
      tip: i18n("设置头像的大小", "Set Avatar Size")
    },
    propType: {
      type: 'oneOfType',
      value: ['number', {
        type: 'oneOf',
        value: ['large', 'small', 'default']
      }]
    },
    defaultValue: 'default'
  }, {
    name: 'src',
    title: {
      label: i18n("图片地址", "Image URL"),
      tip: i18n("图片类头像的资源地址", "Resource address of picture avatar")
    },
    propType: 'string'
  }, {
    name: 'alt',
    title: {
      label: i18n("替代文本", "alt text"),
      tip: i18n("图像无法显示时的替代文本", "Alternative text when image cannot be displayed")
    },
    propType: 'string'
  }, {
    name: 'onError',
    title: {
      label: i18n("图片加载失败的事件", "Image loading failure event"),
      tip: i18n("图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为", "Image loading failure event. Returning false will turn off the component's default fallback behavior.")
    },
    propType: 'func'
  }, {
    name: 'gap',
    title: {
      label: i18n("文字边距", "text margins"),
      tip: i18n("字符类型距离左右两侧边界单位像素", "Character type distance from left and right borders in pixels")
    },
    propType: 'number'
  }],
  configure: {
    supports: {
      style: true,
      events: [{
        name: 'onError',
        template: "onError(${extParams}){\n// Image loading failure event\nconsole.log('onError');}"
      }]
    }
  }
};

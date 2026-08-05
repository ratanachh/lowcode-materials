import { i18n } from "../_utils/i18n";
export default [{
  title: i18n("两栏", "two columns"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/1-1.png',
  schema: {
    componentName: 'Row',
    props: {},
    children: [{
      componentName: 'Col',
      props: {
        span: 12
      }
    }, {
      componentName: 'Col',
      props: {
        span: 12
      }
    }]
  }
}, {
  title: i18n("三栏", "three columns"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/1-1-1.png',
  schema: {
    componentName: 'Row',
    props: {},
    children: [{
      componentName: 'Col',
      props: {
        span: 8
      }
    }, {
      componentName: 'Col',
      props: {
        span: 8
      }
    }, {
      componentName: 'Col',
      props: {
        span: 8
      }
    }]
  }
}, {
  title: i18n("四栏", "four columns"),
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/1-1-1-1.png',
  schema: {
    componentName: 'Row',
    props: {},
    children: [{
      componentName: 'Col',
      props: {
        span: 6
      }
    }, {
      componentName: 'Col',
      props: {
        span: 6
      }
    }, {
      componentName: 'Col',
      props: {
        span: 6
      }
    }, {
      componentName: 'Col',
      props: {
        span: 6
      }
    }]
  }
}, {
  title: '1:3',
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/1-3.png',
  schema: {
    componentName: 'Row',
    props: {},
    children: [{
      componentName: 'Col',
      props: {
        span: 6
      }
    }, {
      componentName: 'Col',
      props: {
        span: 18
      }
    }]
  }
}];

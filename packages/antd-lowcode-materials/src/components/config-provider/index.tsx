import React from 'react';
import { ConfigProvider as OriginalConfigProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import zhCN from 'antd/es/locale/zh_CN';

const LOCALE_ZH = 'zh-cn';
const LOCALE_EN = 'en-us';

const ConfigProvider = (props: any) => {
  const { locale = LOCALE_EN, ...rest } = props;

  let localeData = locale;
  if (typeof locale === 'string') {
    const normalized = locale.toLowerCase();
    if (normalized === LOCALE_ZH) {
      moment.locale('zh-cn');
      localeData = zhCN;
    } else if (normalized === LOCALE_EN) {
      moment.locale('en');
      // Ant Design default locale is English
      localeData = undefined;
    }
  }

  return <OriginalConfigProvider locale={localeData} {...rest} />;
};

export default ConfigProvider;

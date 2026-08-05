export const LOCALE = {
  ZH: 'zh_CN',
  EN: 'en_US',
} as const;

/** Default meta / snippet locale for this materials package. */
export const DEFAULT_LOCALE = LOCALE.EN;

export const CATEGORY = {
  GENERAL: 'General',
  NAVIGATION: 'Navigation',
  LAYOUT: 'Layout',
  DATA_ENTRY: 'Data Entry',
  DATA_DISPLAY: 'Data Display',
  FEEDBACK: 'Feedback',
  OTHER: 'Other',
} as const;

/** Align with demo assets.json groupList. */
export const GROUP = {
  BASIC: 'Atomic Components',
  FEATURED: 'Featured Components',
} as const;

/** Maps legacy Chinese category/group labels to English keys. */
export const CATEGORY_FROM_ZH: Record<string, string> = {
  通用: CATEGORY.GENERAL,
  基础: CATEGORY.GENERAL,
  导航: CATEGORY.NAVIGATION,
  布局: CATEGORY.LAYOUT,
  表单: CATEGORY.DATA_ENTRY,
  信息输入: CATEGORY.DATA_ENTRY,
  数据展示: CATEGORY.DATA_DISPLAY,
  信息展示: CATEGORY.DATA_DISPLAY,
  反馈: CATEGORY.FEEDBACK,
  信息反馈: CATEGORY.FEEDBACK,
  其他: CATEGORY.OTHER,
  基础组件: GROUP.BASIC,
  原子组件: GROUP.BASIC,
  精选组件: GROUP.FEATURED,
};

export type I18nText = {
  type: 'i18n';
  zh_CN: string;
  en_US: string;
  'zh-CN': string;
  'en-US': string;
};

/**
 * Bilingual meta text. English is the package default (`DEFAULT_LOCALE`).
 * Both underscore and hyphen keys are set for engine / pane resolvers.
 */
export function i18n(zh: string, en: string): I18nText {
  return {
    type: 'i18n',
    en_US: en,
    zh_CN: zh,
    'en-US': en,
    'zh-CN': zh,
  };
}

/** Resolve i18n text; defaults to English. */
export function resolveI18n(
  value: string | I18nText | undefined | null,
  locale: string = DEFAULT_LOCALE,
): string {
  if (value == null) {
    return '';
  }
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value !== 'object' || value.type !== 'i18n') {
    return '';
  }
  const normalized = locale.replace(/-/g, '_');
  const hyphen = locale.replace(/_/g, '-');
  return (
    value[normalized as keyof I18nText] ||
    value[hyphen as keyof I18nText] ||
    value.en_US ||
    value['en-US'] ||
    value.zh_CN ||
    value['zh-CN'] ||
    ''
  );
}

export function fieldTitle(
  zhLabel: string,
  enLabel: string,
  zhTip?: string,
  enTip?: string,
): { label: I18nText; tip?: I18nText } {
  return {
    label: i18n(zhLabel, enLabel),
    ...(zhTip != null
      ? { tip: i18n(zhTip, enTip ?? zhTip) }
      : {}),
  };
}

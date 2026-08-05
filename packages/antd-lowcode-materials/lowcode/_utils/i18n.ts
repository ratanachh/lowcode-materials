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



export type I18nText = any;

/**
 * Bilingual meta text. English is the package default (`DEFAULT_LOCALE`).
 * Both underscore and hyphen keys are set for engine / pane resolvers.
 */
export function i18n(zh: string, en: string): string {
  return en;
}

/** Resolve i18n text; defaults to English. */
export function resolveI18n(
  value: string | I18nText | undefined | null,
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
  return value.en_US || value['en-US'] || '';
}

export function fieldTitle(
  zhLabel: string,
  enLabel: string,
  zhTip?: string,
  enTip?: string,
): { label: string; tip?: string } {
  return {
    label: enLabel,
    ...(enTip != null ? { tip: enTip } : {}),
  };
}

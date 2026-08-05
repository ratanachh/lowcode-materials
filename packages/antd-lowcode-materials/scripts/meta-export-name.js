/**
 * Keep the legacy UMD global so existing assets.json / demos keep working
 * after the package moved from @alilc → @rchh (scope would otherwise become
 * RchhAntdLowcodeMaterialsMeta).
 */
const LEGACY_META_EXPORT_NAME = 'AlilcAntdLowcodeMaterialsMeta';
const SCOPED_META_EXPORT_NAME = 'RchhAntdLowcodeMaterialsMeta';

module.exports = {
  LEGACY_META_EXPORT_NAME,
  SCOPED_META_EXPORT_NAME,
};

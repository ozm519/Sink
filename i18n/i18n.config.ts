export default defineI18nConfig(() => {
  return {
    legacy: false,
    fallbackLocale: 'zh-CN',
    fallbackWarn: import.meta.dev,
    missingWarn: import.meta.dev,
  }
})

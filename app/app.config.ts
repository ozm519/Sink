export default defineAppConfig({
  title: 'Sink',
  github: 'https://github.com/ozm519/Sink',
  description: '开源短链接服务，支持数据分析、自定义短链和多语言，100% 运行在 Cloudflare 上。',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})

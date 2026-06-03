export function requireR2Bucket(env: Cloudflare.Env): R2Bucket {
  if (!env.R2) {
    throw createError({
      statusCode: 503,
      statusMessage: 'R2 存储桶未配置',
    })
  }

  return env.R2
}

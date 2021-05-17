const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/qwerty-log-next' : ''

module.exports = {
  basePath,
  assetPrefix: basePath,
  env: {
    basePath,
  },
}

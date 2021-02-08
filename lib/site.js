const netlify = require('./netlify')

module.exports = {
  name: process.env['SITE_NAME'],
  deploy: {
    id: process.env['DEPLOY_ID'],
    url: process.env['DEPLOY_URL'],
    log: `${netlify.url}/${process.env['SITE_NAME']}/deploys/${process.env['DEPLOY_ID']}`,
  },
  node: process.env['NODE_VERSION'],
  url: process.env['URL'],
  webhook: process.env['DISCORD_WEBHOOK_URL'],
  context: process.env['CONTEXT'],
  build: process.env['BUILD_ID'],
  branch: process.env['BRANCH'],
  repository: process.env['REPOSITORY_URL'],
  commit: process.env['COMMIT_REF'],
  head: process.env['HEAD'],
}

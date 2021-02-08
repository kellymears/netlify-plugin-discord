const netlify = require('./netlify')
const site = require('./site')

/**
 * Util: format time
 */
const time = () => new Date().toTimeString().split(' ')[0]

/**
 * Util: format embed.fields item
 */
const field = (name, value, inline = false) => ({
  name,
  value,
  inline,
})

/**
 * Format object: embed
 */
const embed = ({title, status}) => ({
  author: {
    name: netlify.name,
    url: netlify.url,
    icon_url: netlify.logo,
  },
  url: `${netlify.url}/sites/${site.name}`,
  color: netlify.color,
  title,
  description: `[${site.name}](${
    site.url
  }) ${status} at ${time()}.`,
  fields: [
    field('Build ID', site.build),
    field('Context', site.context),
    field('Node version', site.node),
    field('Repository', site.repository),
    field('Branch', site.branch),
    field('Commit', site.commit),
  ],
})

/**
 * Success embed
 */
const success = () =>
  embed({
    title: `Build deployed`,
    status: `was deployed`,
  })

/**
 * Fail embed
 */
const fail = () =>
  embed({
    title: `Build failed`,
    status: `failed to deploy`,
  })

module.exports = {
  success,
  fail,
}

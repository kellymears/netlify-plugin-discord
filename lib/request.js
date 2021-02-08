const axios = require('axios')
const embed = require('./embed')
const netlify = require('./netlify')
const site = require('./site')

const payload = embed => ({
  username: netlify.name,
  avatar_url: netlify.logo,
  embeds: [embed()],
})

const request = async type =>
  await axios.post(site.webhook, payload(embed[type]))

module.exports = request

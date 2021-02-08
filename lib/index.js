const site = require('./site')
const request = require('./request')

/**
 * netlify-plugin-discord-webhook
 */
module.exports = {
  /**
   * Pre-build
   */
  onPreBuild: async ({build}) => {
    !site.webhook && build.failBuild('No webhook set')

    console.log('Discord webhook URL was found')
  },

  /**
   * Success
   */
  onSuccess: async () => {
    try {
      const res = await request('success')
      console.log('Build status (success) sent to Discord')
    } catch (err) {
      console.error(err)
    }
  },

  /**
   * Error
   */
  onError: async () => {
    try {
      const res = await request('fail')
      console.log('Build status (fail) sent to Discord')
    } catch (err) {
      console.error(err)
    }
  },
}

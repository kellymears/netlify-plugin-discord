const site = require('./site')
const request = require('./request')

/**
 * netlify-plugin-discord
 */
module.exports = {
  /**
   * Pre-build
   */
  async onPreBuild({build}) {
    !site.webhook && build.failBuild('No webhook set')

    console.log('Discord webhook URL was found')
  },

  /**
   * Success
   */
  async onSuccess() {
    try {
      await request('success')

      console.log('Build status (success) sent to Discord')
    } catch (err) {
      console.error(err)
    }
  },

  /**
   * Error
   */
  async onError() {
    try {
      await request('fail')

      console.log('Build status (fail) sent to Discord')
    } catch (err) {
      console.error(err)
    }
  },
}

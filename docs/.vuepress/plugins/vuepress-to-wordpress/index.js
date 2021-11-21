const wpApi = require('./lib/wordpress-api')

const vuepressToWordpress = ({username, password, options, onPrepared}, app = '') => {
  const wpRpc = new wpApi(username, password, options)
  return {
    name: 'vuepress-to-wordpress',
    getWpRpc: () => {
      return wpRpc
    },
    onPrepared: (app) => {
      onPrepared(wpRpc, app)
    }
  }
}

module.exports = vuepressToWordpress
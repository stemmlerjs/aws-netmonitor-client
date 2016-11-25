
const config = {
  CURRENT_ENV: 'dev',
  dev: {
    baseUrl: 'http://localhost:80/api/',
  },
  prod: {
    baseUrl: ''
  }
}

module.exports = config.CURRENT_ENV === 'dev' ? config.dev : config.prod;
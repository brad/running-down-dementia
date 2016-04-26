const config = {
  'staging': {
    'server': {
      'host': 'http://lvh.me:8080',
      'basePath': ''
    },
    'client': {
      'host': 'http://everydayhero.github.io',
      'basePath': '/running-down-dementia'
    }
  },
  'production': {
    'server': {
      'host': 'http://lvh.me:8080',
      'basePath': ''
    },
    'client': {
      'host': 'http://everydayhero.github.io',
      'basePath': '/running-down-dementia'
    }
  },
  'development': {
    'server': {
      'host': 'http://lvh.me:8080',
      'basePath': ''
    },
    'client': {
      'host': 'http://lvh.me:8080',
      'basePath': ''
    }
  }
}

module.exports = config[process.env.NODE_ENV || 'development']

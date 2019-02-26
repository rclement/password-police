import express from 'express'
import data from '../server/data'

const app = express()
app.use('/data', data)

let server = null

export default nuxtConfig => ({
  build: {
    done(nuxt, generateOptions) {
      server = app.listen(nuxtConfig.default.server.port)
    }
  },

  generate: {
    done(nuxt) {
      server.close()
    }
  }
})

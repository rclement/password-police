import express from 'express'
import data from '../server/data'

const app = express()
app.use('/data', data)

let server = null

export default nuxtConfig => ({
  build: {
    done(nuxt) {
      const staticBuild = nuxt.bundleBuilder.context.isStatic
      if (staticBuild) {
        server = app.listen(nuxtConfig.default.server.port)
      }
    }
  },

  generate: {
    done(nuxt) {
      if (server) {
        server.close()
      }
    }
  }
})

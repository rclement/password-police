import express from 'express'
import dataMiddleware from '../server/data'
import consola from 'consola'

const logger = consola.withTag('password-police:hooks')

const app = express()
app.use('/data', dataMiddleware)

let server = null

export default nuxtConfig => ({
  build: {
    done(nuxt) {
      const staticBuild = nuxt.bundleBuilder.buildContext.isStatic
      if (staticBuild) {
        logger.info('Starting data server')
        server = app.listen(nuxtConfig.default.server.port)
      }
    }
  },

  generate: {
    done(nuxt) {
      if (server) {
        logger.success('Stopping data server')
        server.close()
      }
    }
  }
})

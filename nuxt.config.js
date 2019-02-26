import pkg from './package'
import locales from './locales'
import hooks from './hooks'

const environment = process.env.NODE_ENV
const development = environment === 'development'
const production = environment === 'production'

if (development) {
  require('dotenv').config()
}

const appName = pkg.name
const appVersion = pkg.version

const baseUrl = process.env.BASE_URL || undefined
const deployEnv = process.env.DEPLOY_ENV || undefined
const matomoUrl = process.env.MATOMO_URL || undefined
const matomoSiteId = process.env.MATOMO_SITE_ID || undefined
const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID || undefined
const sentryDsn = process.env.SENTRY_DSN || undefined

const ghpDeploy = deployEnv === 'GH_PAGES'
const staticPrefix = ghpDeploy && production ? `/${appName}` : ''

const sitemapPath = '/sitemap.xml'
const sitemapUrl = `${baseUrl}${sitemapPath}`

export default {
  mode: 'universal',

  env: {
    STATIC_PREFIX: staticPrefix
  },

  head: {
    title: appName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ]
  },

  loading: { color: '#fff' },

  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css',
    '~/assets/scss/main.scss'
  ],

  router: {
    base: `${staticPrefix}/`,
    middleware: ['google-analytics-consent', 'matomo-consent']
  },

  serverMiddleware: [{ path: '/data', handler: '~/server/data.js' }],

  plugins: [{ src: '~/plugins/dnt', mode: 'client' }],

  modules: [
    'nuxt-webfontloader',
    'nuxt-buefy',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-robots-module',
    [
      'nuxt-i18n',
      {
        baseUrl: baseUrl,
        locales: locales.locales,
        defaultLocale: locales.defaultLocale,
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
        },
        vueI18n: {
          fallbackLocale: locales.defaultLocale,
          messages: locales.messages
        }
      }
    ],
    ...(matomoUrl && matomoSiteId
      ? [
          [
            'nuxt-matomo',
            {
              matomoUrl: `//${matomoUrl}/`,
              siteId: matomoSiteId,
              consentRequired: true,
              cookies: false,
              doNotTrack: true,
              debug: development
            }
          ]
        ]
      : []),
    ...(googleAnalyticsId ? ['@nuxtjs/google-analytics'] : []),
    ...(sentryDsn ? ['@nuxtjs/sentry'] : [])
  ],

  webfontloader: {
    google: {
      families: ['Quicksand:300,400']
    }
  },

  buefy: {
    css: true,
    materialDesignIcons: false,
    defaultIconPack: 'fas'
  },

  axios: {
    browserBaseURL: '/'
  },

  icon: {
    iconSrc: 'static/icon.png',
    accessibleIcons: true
  },

  meta: {
    ogSiteName: appName,
    ogHost: baseUrl
  },

  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.(?:googleapis|gstatic).com/(.*)',
        strategyOptions: {
          cacheName: 'google-fonts',
          cacheExpiration: {
            maxEntries: 30,
            maxAgeSeconds: 300
          }
        }
      }
    ]
  },

  sitemap: {
    path: sitemapPath,
    hostname: baseUrl,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true,
    exclude: []
  },

  'nuxt-robots-module': [
    {
      UserAgent: '*',
      Allow: '/',
      Sitemap: sitemapUrl
    }
  ],

  ...(googleAnalyticsId
    ? {
        googleAnalytics: {
          id: googleAnalyticsId,
          debug: {
            enabled: development,
            sendHitTask: production
          }
        }
      }
    : {}),

  ...(sentryDsn
    ? {
        sentry: {
          dsn: sentryDsn,
          disabled: development,
          disableClientSide: development,
          config: {
            environment: environment,
            release: appVersion,
            beforeSend: function(event) {
              if (event.exception) {
                Sentry.showReportDialog()
              }
              return event
            }
          }
        }
      }
    : {}),

  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  hooks: hooks(this)
}

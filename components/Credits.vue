<template>
  <div class="credits">
    <div class="container has-text-centered">
      <nav class="columns is-vcentered">
        <div class="column">
          <div>
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              :title="link.name"
              :alt="link.name"
            >
              <b-icon
                :icon="link.icon.name"
                :pack="link.icon.pack"
                size="is-medium"
              />
              <br>

              <p class="heading">{{ link.name }}</p>
            </a>
          </div>
        </div>

        <div class="column is-8">
          <i18n
            path="credits.made"
            tag="p"
            class="heading"
          >
            <a
              :href="authorLink.url"
              :title="authorLink.name"
              :alt="authorLink.name"
              place="author"
            >
              {{ authorLink.name }}
            </a>

            <a
              :href="`${githubLink.url}/graphs/contributors`"
              :title="githubLink.name"
              :alt="githubLink.name"
              place="contributors"
            >
              {{ $t('credits.contributors') }}
            </a>
          </i18n>

          <i18n
            path="credits.powered"
            tag="p"
            class="heading"
          >
            <a
              :href="nuxtLink.url"
              :title="nuxtLink.name"
              :alt="nuxtLink.name"
              place="nuxt"
            >
              {{ nuxtLink.name }}
            </a>

            <a
              :href="bulmaLink.url"
              :title="bulmaLink.name"
              :alt="bulmaLink.name"
              place="bulma"
            >
              {{ bulmaLink.name }}
            </a>
          </i18n>

          <i18n
            path="credits.licensed"
            tag="p"
            class="heading"
          >
            <a
              :href="`${githubLink.url}/blob/master/LICENSE`"
              :title="githubLink.name"
              :alt="githubLink.name"
              place="license"
            >
              {{ $t('credits.license') }}
            </a>
          </i18n>

          <p class="heading">
            v{{ appVersion }}
          </p>

          <br>

          <p class="heading">
            {{ $t('credits.copyright.text') }} © {{ $t('credits.copyright.start') }} - {{ $t('credits.copyright.end') }}, {{ $t('credits.copyright.author') }}
          </p>

          <p class="heading">
            <a @click="updateCookiePrefs">
              {{ $t('credits.cookies') }}
            </a>
          </p>
        </div>

        <div class="column">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <b-icon
                icon="globe"
                pack="fas"
                size="is-small"
                style="padding-right: 1.5rem;"
              />

              {{ $t('credits.language') }}
            </a>

            <div class="navbar-dropdown is-boxed">
              <nuxt-link
                v-for="locale in $i18n.locales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                class="navbar-item"
              >
                {{ locale.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <cookie-consent
      :id="cookieConsentId"
      :ref="cookieConsentId"
    />
  </div>
</template>

<script>
import CookieConsent from '~/components/CookieConsent'

export default {
  components: {
    CookieConsent
  },

  data() {
    return {
      appVersion: process.env.APP_VERSION,
      cookieConsentId: 'cookie-consent',
      authorLink: this.$t('common.links.author'),
      githubLink: this.$t('common.links.github'),
      nuxtLink: this.$t('common.links.nuxt'),
      bulmaLink: this.$t('common.links.bulma')
    }
  },

  computed: {
    links() {
      return this.$t('common.links')
    },

    socialLinks() {
      return Object.entries(this.links)
        .filter(([id, link]) => link.category === 'social')
        .reduce((obj, [key, item]) => {
          obj[key] = item
          return obj
        }, {})
    }
  },

  methods: {
    updateCookiePrefs() {
      let cookieConsent = this.$refs[this.cookieConsentId]
      if (cookieConsent) {
        cookieConsent.clear()
      }
    }
  }
}
</script>

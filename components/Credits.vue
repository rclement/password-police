<template>
  <div class="credits">
    <div class="container">
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <a
              v-for="link in links"
              :key="link.name"
              :href="link.url"
              :title="link.name"
              :alt="link.name"
            >
              <b-icon
                :pack="link.icon.pack"
                :icon="link.icon.name"
                size="is-medium"
              />
            </a>
          </div>
        </div>

        <div class="level-item has-text-centered">
          <p>
            {{ $t('credits.copyright.text') }} © {{ $t('credits.copyright.start') }} - {{ $t('credits.copyright.end') }}, {{ $t('credits.copyright.author') }}

            <br>

            <a @click="updateCookiePrefs">
              {{ $t('credits.cookies.update') }}
            </a>
          </p>
        </div>

        <div class="level-item has-text-centered">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <b-icon
                icon="globe"
                pack="fas"
                size="is-small"
                style="padding: 0rem 1rem 0rem 0rem;"
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
      cookieConsentId: 'cookie-consent'
    }
  },

  computed: {
    links() {
      return this.$t('common.links')
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

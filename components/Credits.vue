<template>
  <div class="credits">
    <div class="container has-text-centered">
      <div class="columns is-centered">
        <div class="column">
          <div class="links">
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
                class="link-icon"
                size="is-medium"
              />
            </a>
          </div>

          <p class="has-bottom-padding">
            {{ $t('credits.copyright.text') }} © {{ $t('credits.copyright.start') }} - {{ $t('credits.copyright.end') }}, {{ $t('credits.copyright.author') }}
          </p>

          <p class="has-bottom-padding">
            <a @click="updateCookiePrefs">
              {{ $t('credits.cookies.update') }}
            </a>
          </p>
        </div>
      </div>
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

<style scoped>
.link-icon {
  padding: 0rem 1rem;
}

.links {
  padding: 0rem 0rem 1rem 0rem;
}

.has-bottom-padding {
  padding: 0rem 0rem 1rem 0rem;
}
</style>

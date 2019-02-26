<template>
  <vue-cookie-accept-decline
    :ref="id"
    :element-id="id"
    :debug="false"
    :position="'bottom-left'"
    :type="'floating'"
    :disable-decline="false"
    :transition-name="'slideFromBottom'"
    :show-postpone-button="true"
    class="cookie-consent"
    @status="status"
    @clicked-accept="accept"
    @clicked-decline="decline"
    @clicked-postpone="decline"
  >
    <div slot="postponeContent">
      &times;
    </div>

    <div slot="message">
      <div class="has-text-centered">
        <p>{{ $t('cookies.consent') }}</p>
        <a
          href="https://cookiesandyou.com"
          title="Cookies and you"
          alt="Cookies and you"
          place="learn"
        >
          {{ $t('cookies.learnMore') }}
        </a>
      </div>
    </div>

    <div slot="declineContent">
      {{ $t('cookies.decline') }}
    </div>

    <div slot="acceptContent">
      {{ $t('cookies.accept') }}
    </div>
  </vue-cookie-accept-decline>
</template>

<script>
import { mapActions } from 'vuex'
import VueCookieAcceptDecline from 'vue-cookie-accept-decline'

export default {
  components: {
    VueCookieAcceptDecline
  },

  props: {
    id: {
      type: String,
      default: ''
    }
  },

  methods: {
    ...mapActions({
      accept: 'analytics/accept',
      decline: 'analytics/decline'
    }),

    clear() {
      let cookieConsent = this.$refs[this.id]
      if (cookieConsent) {
        cookieConsent.removeCookie()
        cookieConsent.init()
      }
      this.decline()
    },

    status(val) {
      if (val === 'postpone') {
        this.clear()
      } else if (val === 'accept') {
        this.accept()
      } else if (val === 'decline') {
        this.decline()
      }
    }
  }
}
</script>

<style>
@import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css';
</style>

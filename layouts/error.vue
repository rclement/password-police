<template>
  <section class="section">
    <div class="container has-text-centered">
      <b-icon
        icon="sad-tear"
        pack="fas"
      />

      <p class="title">
        {{ err.title }}
      </p>

      <p class="subtitle">
        {{ err.message }}
      </p>

      <nuxt-link :to="localePath('index')">
        {{ $t('errors.backToHome') }}
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },

  computed: {
    err() {
      const codes = this.$t('errors.codes')
      for (const err of codes) {
        if (err.code === this.error.statusCode) {
          return err
        }
      }

      return {
        code: 500,
        title: '',
        message: ''
      }
    }
  }
}
</script>

<template>
  <section class="section">
    <div class="container has-text-centered">
      <figure class="image container is-128x128">
        <img
          src="~assets/svg/logo.svg"
          title="Logo"
        >
      </figure>

      <p class="title">
        {{ $t('home.title') }}
      </p>

      <i18n
        path="home.subtitle"
        tag="p"
        class="subtitle"
      >
        <a
          :href="passwordPolicyLink.url"
          :title="passwordPolicyLink.name"
          :alt="passwordPolicyLink.name"
          place="passwordpolicies"
        >
          {{ $t('home.passwordPolicies') }}
        </a>
      </i18n>

      <i18n
        path="home.contribute"
        tag="p"
      >
        <a
          :href="githubLink.url"
          :title="githubLink.name"
          :alt="githubLink.name"
          place="github"
        >
          {{ githubLink.name }}
        </a>
      </i18n>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      passwordPolicyLink: this.$t('common.links.passwordPolicy'),
      githubLink: this.$t('common.links.github')
    }
  }
}
</script>

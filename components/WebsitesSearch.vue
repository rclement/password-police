<template>
  <b-field :label="$t('search.label')">
    <b-input
      v-model="name"
      :placeholder="$t('search.placeholder')"
      icon="search"
      icon-pack="fas"
      rounded
    />
  </b-field>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      name: this.value
    }
  },

  watch: {
    name(val) {
      this.$emit('input', val)
    }
  }
}
</script>

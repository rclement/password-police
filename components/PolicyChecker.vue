<template>
  <b-icon
    pack="fas"
    :icon="check ? 'check' : 'times'"
    :type="check ? 'is-success' : 'is-danger'"
  />
</template>

<script>
export default {
  props: {
    check: {
      type: Boolean,
      default: false
    }
  }
}
</script>

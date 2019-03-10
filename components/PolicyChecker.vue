<template>
  <b-icon
    :type="check ? 'is-success' : 'is-danger'"
    :icon="check ? 'check' : 'times'"
    pack="fas"
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

<template>
  <aside class="menu">
    <p class="menu-label">
      Categories
    </p>

    <ul class="menu-list">
      <li
        v-for="(category, key) in categories"
        :key="key"
      >
        <a
          :class="{ 'is-active': value === key }"
          @click="selectCategory(key)"
        >
          {{ category.name }}
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },

    categories: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  methods: {
    selectCategory(category) {
      if (this.value === category) {
        this.value = ''
      } else {
        this.value = category
      }
      this.$emit('input', this.value)
    }
  }
}
</script>

<template>
  <aside class="menu">
    <p class="menu-label">
      {{ $t('categories.title') }}
    </p>

    <ul class="menu-list">
      <li
        v-for="category in categories"
        :key="category"
      >
        <a
          :class="{ 'is-active': selectedCategory === category }"
          @click="selectCategory(category)"
        >
          {{ $t(`categories.${category}`) }}
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
      type: Array,
      default() {
        return []
      }
    }
  },

  data() {
    return {
      selectedCategory: this.value
    }
  },

  methods: {
    selectCategory(category) {
      if (this.selectedCategory === category) {
        this.selectedCategory = ''
      } else {
        this.selectedCategory = category
      }
      this.$emit('input', this.selectedCategory)
    }
  }
}
</script>

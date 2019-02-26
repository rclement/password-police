<template>
  <aside class="menu">
    <p class="menu-label">
      {{ $t('categories.title') }}
    </p>

    <ul class="menu-list">
      <li
        v-for="(category, key) in categories"
        :key="key"
      >
        <a
          :class="{ 'is-active': selectedCategory === key }"
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

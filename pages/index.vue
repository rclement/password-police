<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-2">
          <categories-menu
            v-model="selectedCategory"
            :categories="categoryNames"
          />
        </div>

        <div class="column">
          <websites-table
            :data="filteredWebsites"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CategoriesMenu from '~/components/CategoriesMenu'
import WebsitesTable from '~/components/WebsitesTable'

export default {
  components: {
    CategoriesMenu,
    WebsitesTable
  },

  data() {
    return {
      selectedCategory: ''
    }
  },

  computed: {
    categoryNames() {
      return Object.keys(this.categories)
    },

    filteredWebsites() {
      let categories = this.categories

      if (this.selectedCategory !== '') {
        categories = {
          [this.selectedCategory]: this.categories[this.selectedCategory]
        }
      }

      return Object.entries(categories).reduce((obj, [key, item]) => {
        const websites = Object.entries(item).map(([id, w]) => w)
        obj.push(...websites)
        return obj
      }, [])
    }
  },

  async asyncData({ $axios }) {
    return await $axios.$get('/data/')
  }
}
</script>

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
          <websites-search
            v-model="searchName"
          />

          <websites-table
            v-model="filteredWebsites"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CategoriesMenu from '~/components/CategoriesMenu'
import WebsitesSearch from '~/components/WebsitesSearch'
import WebsitesTable from '~/components/WebsitesTable'

export default {
  components: {
    CategoriesMenu,
    WebsitesSearch,
    WebsitesTable
  },

  data() {
    return {
      selectedCategory: '',
      searchName: ''
    }
  },

  computed: {
    categoryNames() {
      return Object.keys(this.categories)
    },

    categoryWebsites() {
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
    },

    filteredWebsites() {
      const name = this.searchName
      if (name.length === 0) {
        return this.categoryWebsites
      }

      return this.categoryWebsites.filter(w => {
        return w.name.toLowerCase().indexOf(name.toLowerCase()) >= 0
      })
    }
  },

  async asyncData({ store }) {
    return store.state.data
  }
}
</script>

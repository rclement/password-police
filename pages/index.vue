<template>
  <div class="index">
    <section class="section">
      <div class="container has-text-centered">
        <p class="title">
          {{ $t('home.title') }}
        </p>

        <p class="subtitle">
          {{ $t('home.subtitle') }}
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-2">
            <categories-menu
              v-model="selectedCategory"
              :categories="categories"
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
  </div>
</template>

<script>
import CategoriesMenu from '~/components/CategoriesMenu'
import WebsitesTable from '~/components/WebsitesTable'
import { websiteScore } from '~/utils'

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
    filteredWebsites() {
      let categories = this.categories

      if (this.selectedCategory !== '') {
        categories = Object.entries(this.categories)
          .filter(([key, item]) => key === this.selectedCategory)
          .reduce((obj, [key, item]) => {
            obj[key] = item
            return obj
          }, {})
      }

      return Object.entries(categories).reduce((obj, [key, item]) => {
        obj.push(...item.websites)
        return obj
      }, [])
    }
  },

  asyncData() {
    let categories = {
      banking: {
        name: 'Banking',
        websites: [
          {
            id: 'credit-agricole',
            name: 'Credit Agricole',
            url: 'https://www.credit-agricole.fr',
            img: '/img/banking/credit-agricole.png',
            note: 'Numeric pad only, no user input',
            policies: {
              minlength: 6,
              maxlength: 6,
              uppercase: false,
              lowercase: false,
              numbers: true,
              symbols: false
            }
          }
        ]
      },
      government: {
        name: 'Government',
        websites: [
          {
            id: 'autoentrepreneur-urssaf',
            name: 'Auto-entrepreneur URSSAF',
            url: 'https://autoentrepreneur.urssaf.fr',
            img: '/img/government/autoentrepreneur-urssaf.png',
            note: 'Welcome to 1999!',
            policies: {
              minlength: 1,
              maxlength: 8,
              uppercase: true,
              lowercase: true,
              numbers: true,
              symbols: false
            }
          }
        ]
      }
    }

    categories = Object.entries(categories).reduce((cats, [cKey, cItem]) => {
      cItem.websites = cItem.websites.map(w => {
        w.score = websiteScore(w.policies)
        return w
      })

      cats[cKey] = cItem
      return cats
    }, {})

    return {
      categories: categories
    }
  }
}
</script>

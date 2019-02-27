const defaultState = {
  categories: {}
}

export const state = () => defaultState

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  }
}

export const actions = {
  async getAllCategories({ commit }) {
    const data = await this.$axios.$get('/data/').catch(() => defaultState)
    commit('setCategories', data.categories)
  }
}

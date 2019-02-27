export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('data/getAllCategories')
  }
}

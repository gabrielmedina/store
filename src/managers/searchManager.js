import algoliaService from '@/services/algoliaService'
import searchState from '@/states/searchState'
class SearchManager {
  getState() {
    return searchState
  }

  async get() {
    algoliaService.setIndex('dev_store')

    try {
      const response = await algoliaService.get()

      this.addProducts(response.hits || [])

      return searchState
    } catch (error) {
      console.log(error) // eslint-disable-line

      return []
    }
  }

  async getByTerm(term) {
    algoliaService.setIndex('dev_store')

    try {
      const response = await algoliaService.getByTerm(term)

      this.addProducts(response.hits || [])

      return searchState
    } catch (error) {
      console.log(error) // eslint-disable-line

      return []
    }
  }

  addProducts(products) {
    searchState.products.length = 0
    searchState.products.push(...products)

    return searchState.products
  }
}

export default new SearchManager

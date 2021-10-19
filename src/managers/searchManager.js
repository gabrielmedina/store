import searchState from '@/states/searchState'

class SearchManager {
  getProducts() {
    return searchState.products
  }

  setProducts(products) {
    searchState.products.length = 0
    searchState.products.push(...products)

    return searchState.products
  }
}

export default new SearchManager

import searchState from '@/states/searchState'

class SearchService {
  getProducts() {
    return searchState.products
  }

  setProducts(products) {
    searchState.products.length = 0
    searchState.products.push(...products)
  }
}

export default new SearchService

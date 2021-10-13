import algoliaService from '@/services/algoliaService'
import Products from '@/assets/data/products'

class ProductManager {
  async get() {
    algoliaService.setIndex('dev_store')

    try {
      const response = await algoliaService.get()

      return {
        products: response.hits
      }
    } catch (error) {
      console.log(error) // eslint-disable-line
    }
  }

  getById(id) {
    const product = Products.find((product) => product.id === id)
    // const product = await api.getProduct({ id })

    return product
  }

  async getByTerm(term) {
    algoliaService.setIndex('dev_store')

    try {
      const response = await algoliaService.getByTerm(term)

      return {
        products: response.hits
      }
    } catch (error) {
      console.log(error) // eslint-disable-line
    }
  }
}

export default new ProductManager

import algoliaService from '@/services/algoliaService'

class ProductManager {
  async getById(id) {
    algoliaService.setIndex('dev_store')

    try {
      const response = await algoliaService.getByTerm(id)

      const product = response.hits[0]

      return product
    } catch (error) {
      console.log(error) // eslint-disable-line

      return {}
    }
  }
}

export default new ProductManager

import Products from '@/assets/data/products'

class ProductManager {
  getById(id) {
    const product = Products.find((product) => product.id === id)

    return product
  }
}

export default new ProductManager

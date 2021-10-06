import Products from '@/assets/data/products'

class ProductService {
  getProducts() {
    const products = Products
    // const product = await api.getProducts()

    return products
  }

  getProductById(id) {
    const product = Products.find((product) => product.id === id)
    // const product = await api.getProduct({ id })

    return product
  }

  getProductByTerm(term) {
    term = term.toLowerCase()

    const products = Products.filter((product) => {
      const title = product.title.toLowerCase()

      return title.includes(term)
    })
    // const product = await api.getProduct({ term })

    return products
  }
}

export default new ProductService

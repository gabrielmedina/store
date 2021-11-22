import Products from '@@/test/_stubs/products'
import productManager from '@/managers/productManager'

describe('Managers > ProductManager', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('when getById() is called', () => {
    const product = Products[0]

    expect(productManager.getById(product.id)).toEqual(product)
  })
})

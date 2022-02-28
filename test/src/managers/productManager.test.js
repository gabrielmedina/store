import Products from '@@/test/_stubs/products'
import productManager from '@/managers/productManager'
import algoliaService from '@/services/algoliaService'

jest.mock('@/services/algoliaService')

algoliaService.getByTerm = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    hits: [{ ...Products[0] }]
  })
})

describe('Managers > ProductManager', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('when getById() is called', async () => {
    const product = Products[0]

    const response = await productManager.getById(product.id)

    expect(algoliaService.setIndex).toBeCalledTimes(1)
    expect(algoliaService.setIndex).toBeCalledWith('dev_store')
    expect(algoliaService.getByTerm).toBeCalledTimes(1)
    expect(algoliaService.getByTerm).toBeCalledWith(product.id)
    expect(response).toEqual(product)
  })
})

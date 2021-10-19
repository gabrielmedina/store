import Products from '@@/test/_stubs/products'
import productManager from '@/managers/productManager'
import algoliaService from '@/services/algoliaService'

jest.mock('@/services/algoliaService')

algoliaService.get = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    hits: []
  })
})

algoliaService.getByTerm = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    hits: []
  })
})

describe('Managers > ProductManager', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('when get() is called', () => {
    productManager.get()

    expect(algoliaService.setIndex).toBeCalledTimes(1)
    expect(algoliaService.setIndex).toBeCalledWith('dev_store')
    expect(algoliaService.get).toBeCalledTimes(1)
  })

  it('when getById() is called', () => {
    const product = Products[0]

    expect(productManager.getById(product.id)).toEqual(product)
  })

  it('when getByTerm() is called', () => {
    const term = 'term'

    productManager.getByTerm(term)

    expect(algoliaService.setIndex).toBeCalledTimes(1)
    expect(algoliaService.setIndex).toBeCalledWith('dev_store')
    expect(algoliaService.getByTerm).toBeCalledTimes(1)
    expect(algoliaService.getByTerm).toBeCalledWith(term)
  })
})

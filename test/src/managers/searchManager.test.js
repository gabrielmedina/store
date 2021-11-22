import Products from '@@/test/_stubs/products'
import searchManager from '@/managers/searchManager'
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

describe('Managers > SearchManager', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('when get() is called', () => {
    searchManager.get()

    expect(algoliaService.setIndex).toBeCalledTimes(1)
    expect(algoliaService.setIndex).toBeCalledWith('dev_store')
    expect(algoliaService.get).toBeCalledTimes(1)
  })

  it('when getByTerm() is called', () => {
    const term = 'term'

    searchManager.getByTerm(term)

    expect(algoliaService.setIndex).toBeCalledTimes(1)
    expect(algoliaService.setIndex).toBeCalledWith('dev_store')
    expect(algoliaService.getByTerm).toBeCalledTimes(1)
    expect(algoliaService.getByTerm).toBeCalledWith(term)
  })

  it('when addProducts() is called', () => {
    expect(searchManager.addProducts(Products)).toEqual(Products)
  })

  it('when getState() is called', () => {
    searchManager.addProducts(Products)
    expect(searchManager.getState()).toEqual({ products: [...Products] })
  })
})

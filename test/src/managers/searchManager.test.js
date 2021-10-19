import Products from '@@/test/_stubs/products'
import searchManager from '@/managers/searchManager'

describe('Managers > SearchManager', () => {
  it('when setProducts() is called', () => {
    expect(searchManager.setProducts(Products)).toEqual(Products)
  })

  it('when getProducts() is called', () => {
    expect(searchManager.getProducts()).toEqual(Products)
  })
})

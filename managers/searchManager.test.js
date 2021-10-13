import searchManager from '@/managers/searchManager'
import Products from '@/test/_stubs/products'

describe('Managers > SearchManager', () => {
  it('when setProducts() is called', () => {
    expect(searchManager.setProducts(Products)).toEqual(Products)
  })

  it('when getProducts() is called', () => {
    expect(searchManager.getProducts()).toEqual(Products)
  })
})

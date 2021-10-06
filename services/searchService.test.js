import searchService from '@/services/searchService'
import Products from '@/test/_stubs/products'

describe('Services > SearchService', () => {
  it('when setProducts() is called', () => {
    expect(searchService.setProducts(Products)).toEqual(Products)
  })

  it('when getProducts() is called', () => {
    expect(searchService.getProducts()).toEqual(Products)
  })
})

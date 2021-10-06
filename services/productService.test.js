import productService from '@/services/productService'
import Products from '@/test/_stubs/products'

// TODO: refactor all expect when API coming

describe('Services > ProductService', () => {
  it('when get() is called', () => {
    expect(productService.get()).toEqual(Products)
  })

  it('when getById() is called', () => {
    const product = Products[0]

    expect(productService.getById(product.id)).toEqual(product)
  })

  it('when getByTerm() is called', () => {
    const product = Products[0]

    expect(productService.getByTerm(product.title)).toEqual([ product ])
  })
})

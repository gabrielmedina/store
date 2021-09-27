import cartService from '@/services/cart'
import Products from '@/test/_stubs/products'

describe('Services > CartService', () => {
  it('when open() is called', () => {
    cartService.open()
    expect(cartService.isOpened()).toBeTruthy()
  })

  it('when close() is called', () => {
    cartService.close()
    expect(cartService.isOpened()).toBeFalsy()
  })

  it('when add() is called', () => {
    const product = Products[0]

    const response = cartService.add(product)

    expect(response).toEqual(product)
    expect(cartService.hasItems()).toBeTruthy()
    expect(cartService.isOpened()).toBeTruthy()
    expect(cartService.get()).toEqual([product])
  })

  it('when add() is called but the product has present in cart', () => {
    const product = Products[0]

    const response = cartService.add(product)

    expect(response).toBeFalsy()
    expect(cartService.get()).toHaveLength(1)
  })

  it('when remove() is called', () => {
    const product = Products[0]

    const response = cartService.remove(product)

    expect(response).toEqual(product)
    expect(cartService.hasItems()).toBeFalsy()
    expect(cartService.get()).toEqual([])
  })

  it('when remove() is called but the product has not present in cart', () => {
    const product = Products[0]

    const response = cartService.remove(product)

    expect(response).toBeFalsy()
  })
})

import Products from '@@/test/_stubs/products'
import cartManager from '@/managers/cartManager'

describe('Managers > CartManager', () => {
  it('when open() is called', () => {
    cartManager.open()
    expect(cartManager.isOpened()).toBeTruthy()
  })

  it('when close() is called', () => {
    cartManager.close()
    expect(cartManager.isOpened()).toBeFalsy()
  })

  it('when add() is called', () => {
    const product = Products[0]

    const response = cartManager.add(product)

    expect(response).toEqual(product)
    expect(cartManager.hasItems()).toBeTruthy()
    expect(cartManager.isOpened()).toBeTruthy()
    expect(cartManager.get()).toEqual([product])
  })

  it('when add() is called but the product has present in cart', () => {
    const product = Products[0]

    const response = cartManager.add(product)

    expect(response).toBeFalsy()
    expect(cartManager.get()).toHaveLength(1)
  })

  it('when remove() is called', () => {
    const product = Products[0]

    const response = cartManager.remove(product)

    expect(response).toEqual(product)
    expect(cartManager.hasItems()).toBeFalsy()
    expect(cartManager.get()).toEqual([])
  })

  it('when remove() is called but the product has not present in cart', () => {
    const product = Products[0]

    const response = cartManager.remove(product)

    expect(response).toBeFalsy()
  })
})

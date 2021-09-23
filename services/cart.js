import cartState from '@/states/cart'

class CartService {
  open() {
    cartState.opened = true
  }

  close() {
    cartState.opened = false
  }

  isOpened() {
    return cartState.opened
  }

  add(item) {
    if (this._findItem(item) > -1) {
      this.open()
      throw new Error('This item is present on cart!')
    }

    cartState.items.push(item)
    this.open()
  }

  remove(item) {
    const index = this._findItem(item)

    if (index > -1) {
      cartState.items.splice(index, 1)
    }
  }

  getAll() {
    return cartState.items
  }

  hasItems() {
    return cartState.items.length > 0
  }

  // private

  _findItem(item) {
    return cartState.items.findIndex(cartItem => cartItem.id === item.id)
  }
}

export default new CartService

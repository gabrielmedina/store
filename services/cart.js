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
    if (this.#findItem(item) > -1) {
      this.open()
      return false
    }

    cartState.items.push(item)
    this.open()
    return item
  }

  remove(item) {
    const index = this.#findItem(item)

    if (index > -1) {
      cartState.items.splice(index, 1)
      return item
    }

    return false
  }

  getAll() {
    return cartState.items
  }

  hasItems() {
    return cartState.items.length > 0
  }

  // private
  #findItem(item) {
    return cartState.items.findIndex(cartItem => cartItem.id === item.id)
  }
}

export default new CartService

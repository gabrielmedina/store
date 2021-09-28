import cartState from '@/states/cartState'

class CartService {
  add(item) {
    if (this.#findIndex(item) > -1) {
      this.open()
      return false
    }

    cartState.items.push(item)
    this.open()
    return item
  }

  remove(item) {
    const index = this.#findIndex(item)

    if (index > -1) {
      cartState.items.splice(index, 1)
      return item
    }

    return false
  }

  get() {
    return cartState.items
  }

  open() {
    cartState.opened = true
  }

  close() {
    cartState.opened = false
  }

  isOpened() {
    return cartState.opened
  }

  hasItems() {
    return cartState.items.length > 0
  }

  // private
  #findIndex(item) {
    return cartState.items.findIndex(({ id }) => id === item.id)
  }
}

export default new CartService

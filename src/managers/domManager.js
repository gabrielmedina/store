class DomManager {
  constructor() {
    this._elementTriggerFocus = null
  }

  // body scroll locker
  disableBodyScroll(element) {
    element.classList.add('body--scroll-lock')
  }

  enableBodyScroll(element) {
    element.classList.remove('body--scroll-lock')
  }

  // element focus return
  setTriggerElementFocus(element) {
    this._elementTriggerFocus = element
  }

  getTriggerElementFocus() {
    return this._elementTriggerFocus
  }

  returnFocusToTriggerElement() {
    const element = this._elementTriggerFocus

    if (element) {
      element.focus()

      this._elementTriggerFocus = null

      return true
    }

    return false
  }
}

export default new DomManager

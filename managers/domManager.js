class DomManager {
  disableBodyScroll(element) {
    element.classList.add('body--scroll-lock')
  }

  enableBodyScroll(element) {
    element.classList.remove('body--scroll-lock')
  }
}

export default new DomManager

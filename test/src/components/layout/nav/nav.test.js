import { screen, render, fireEvent } from '@testing-library/vue'
import Nav from '@/components/layout/nav/nav'
import cartManager from '@/managers/cartManager'
import domManager from '@/managers/domManager'

jest.mock('@/managers/cartManager')
jest.mock('@/managers/domManager')

function renderComponent() {
  const { container } = render(Nav)

  return {
    container,
  }
}

describe('Components > Layout > Nav > Nav', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('when the component is rendered', () => {
    it('should render correctly', () => {
      const { container } = renderComponent()

      expect(container).toBeDefined()
      expect(screen.getAllByRole('listitem')).toHaveLength(1)
    })
  })

  describe('when user click in open cart button', () => {
    it('should display the cart', async () => {
      renderComponent()

      await fireEvent.click(screen.getByTestId('cart'))

      expect(cartManager.open).toBeCalled()
      expect(cartManager.open).toBeCalledTimes(1)
    })

    it('should save the trigger element', async () => {
      renderComponent()

      const button = screen.getByTestId('cart')
      await fireEvent.click(button)

      expect(domManager.setTriggerElementFocus).toBeCalled()
      expect(domManager.setTriggerElementFocus).toBeCalledTimes(1)
      expect(domManager.setTriggerElementFocus).toBeCalledWith(button)
    })

    it('should disable scroll of body element', async () => {
      renderComponent()

      await fireEvent.click(screen.getByTestId('cart'))

      expect(domManager.disableBodyScroll).toBeCalled()
      expect(domManager.disableBodyScroll).toBeCalledTimes(1)
      expect(domManager.disableBodyScroll).toBeCalledWith(document.body)
    })
  })
})

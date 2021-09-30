import { screen, render, fireEvent } from '@testing-library/vue'
import Nav from '@/components/layout/nav/nav'
import cartService from '@/services/cartService'

jest.mock('@/services/cartService')

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
      expect(cartService.open).toBeCalled()
      expect(cartService.open).toBeCalledTimes(1)
    })
  })
})

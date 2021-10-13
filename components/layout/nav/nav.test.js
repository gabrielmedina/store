import { screen, render, fireEvent } from '@testing-library/vue'
import Nav from '@/components/layout/nav/nav'
import cartManager from '@/managers/cartManager'

jest.mock('@/managers/cartManager')

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
  })
})

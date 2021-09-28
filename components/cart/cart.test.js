import { screen, render, fireEvent } from '@testing-library/vue'
import Cart from '@/components/cart/cart'
import cartService from '@/services/cartService'
import Products from '@/test/_stubs/products'

// jest.mock('@/services/cartService')

function renderComponent() {
  const { container } = render(Cart)

  return {
    container,
  }
}

describe('Components > Cart > CartList', () => {
  describe('when the component is rendered', () => {
    it('should render correctly', () => {
      const { container } = renderComponent()

      expect(container).toBeDefined()
      expect(screen.getByTestId('cart')).toHaveStyle('display: none;')
    })
  })

  describe('when user add a item to cart', () => {
    it('should open the cart and display the item on list', async () => {
      renderComponent()

      const product = Products[0]

      await cartService.add(product)

      expect(screen.getByTestId('cart')).toHaveStyle('display: block;')
      expect(screen.getAllByRole('listitem')).toHaveLength(1)
      expect(screen.getByText(product.title)).toBeInTheDocument()
      expect(screen.getByText(product.price)).toBeInTheDocument()
    })
  })

  describe('when user click in close button', () => {
    it('should hidden the cart', async () => {
      renderComponent()

      await cartService.open()
      await fireEvent.click(screen.getByTestId('close'))

      expect(screen.getByTestId('cart')).toHaveStyle('display: none;')
    })
  })
})

import { screen, render, fireEvent } from '@testing-library/vue'
import Cart from '@/components/cart/cart'
import cartService from '@/services/cartService'
import Products from '@/test/_stubs/products'

function renderComponent() {
  const { container } = render(Cart)

  return {
    container,
  }
}

describe('Components > Cart > Cart', () => {
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
      expect(screen.getByText('With 1 product')).toBeInTheDocument()
    })
  })

  describe('when user add mutiply item to cart', () => {
    it('should display the items on list', async () => {
      renderComponent()

      const productOne = Products[0]
      const productTwo = Products[1]

      await cartService.add(productOne)
      await cartService.add(productTwo)

      expect(screen.getAllByRole('listitem')).toHaveLength(2)
      expect(screen.getByText(productOne.title)).toBeInTheDocument()
      expect(screen.getByText(productOne.price)).toBeInTheDocument()
      expect(screen.getByText(productTwo.title)).toBeInTheDocument()
      expect(screen.getByText(productTwo.price)).toBeInTheDocument()
      expect(screen.getByText('With 2 products')).toBeInTheDocument()
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

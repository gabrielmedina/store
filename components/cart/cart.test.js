import { screen, render, fireEvent } from '@testing-library/vue'
import Cart from '@/components/cart/cart'
import cartManager from '@/managers/cartManager'
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
    const product = Products[0]

    beforeEach(async () => {
      renderComponent()
      await cartManager.add(product)
    })

    afterEach(async () => {
      await cartManager.remove(product)
    })

    it('should open the cart', () => {
      expect(screen.getByTestId('cart')).toHaveStyle('display: block;')
    })

    it('should display the item on list', () => {
      expect(screen.getAllByRole('listitem')).toHaveLength(1)
      expect(screen.getByText(product.title)).toBeInTheDocument()
    })

    it('should display the subheading correctly', () => {
      expect(screen.getByText('With 1 product')).toBeInTheDocument()
    })

    it('should focus the cart heading', () => {
      expect(screen.getByText('My cart')).toHaveFocus()
    })
  })

  describe('when user add multiple items to cart', () => {
    const productOne = Products[0]
    const productTwo = Products[1]

    beforeEach(async () => {
      renderComponent()

      await cartManager.add(productOne)
      await cartManager.add(productTwo)
    })

    it('should display the items on list', () => {
      expect(screen.getAllByRole('listitem')).toHaveLength(2)
      expect(screen.getByText(productOne.title)).toBeInTheDocument()
      expect(screen.getByText(productTwo.title)).toBeInTheDocument()
    })

    it('should display the subheading correctly', () => {
      expect(screen.getByText('With 2 products')).toBeInTheDocument()
    })
  })

  describe('when user click in close button', () => {
    it('should hidden the cart', async () => {
      renderComponent()

      await cartManager.open()
      await fireEvent.click(screen.getByTestId('close'))

      expect(screen.getByTestId('cart')).toHaveStyle('display: none;')
    })
  })

  describe('when user ended the tab list', () => {
    it('should keep the focus on cart', async () => {
      renderComponent()

      await cartManager.open()

      screen.getByTestId('focus-trap').focus()
      expect(screen.getByText('My cart')).toHaveFocus()
    })
  })
})

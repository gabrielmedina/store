import { screen, render } from '@testing-library/vue'
import CartList from '@/components/cart/cart-list'
import Products from '@/test/_stubs/products'

function renderComponent() {
  const products = Products

  const { container } = render(CartList, {
    props: {
      products,
    }
  })

  return {
    products,
    container
  }
}

describe('Components > Cart > CartList', () => {
  describe('when the component is rendered', () => {
    it('should render correctly', () => {
      const { container, products } = renderComponent()

      expect(container).toBeDefined()
      expect(screen.getAllByRole('listitem')).toHaveLength(products.length)
    })
  })
})

import { screen, render } from '@testing-library/vue'
import ProductList from '@/components/product/product-list'
import Products from '@/test/_stubs/products'

function renderComponent() {
  const products = Products

  const { container } = render(ProductList, {
    props: {
      products,
    },
    stubs: {
      NuxtLink: true,
    }
  })

  return {
    products,
    container
  }
}

describe('Components > Product > ProductList', () => {
  describe('when the component is rendered', () => {
    it('should render correctly', () => {
      const { container, products } = renderComponent()

      expect(container).toBeDefined()
      expect(screen.getAllByRole('listitem')).toHaveLength(products.length)
    })
  })
})

import { screen, render, fireEvent } from '@testing-library/vue'
import ProductListItem from '@/components/product/product-list-item'
import cartService from '@/services/cartService'
import Products from '@/test/_stubs/products'

jest.mock('@/services/cartService')

function renderComponent() {
  const product = Products[0]

  const { container } = render(ProductListItem, {
    props: {
      product,
    },
    stubs: {
      NuxtLink: true,
    }
  })

  return {
    product,
    container
  }
}

describe('Components > Product > ProductListItem', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('when the component is rendered', () => {
    it('should render correctly', () => {
      const { container, product } = renderComponent()

      expect(container).toBeDefined()
      expect(screen.getByText(product.title)).toBeInTheDocument()
      expect(screen.getByText(product.price)).toBeInTheDocument()
      expect(screen.getByTestId('link')).toHaveAttribute('to', `/product/${product.slug}/${product.id}`)
    })
  })

  describe('when user click in add to cart button', () => {
    it('should add product to cart', async () => {
      const { product } = renderComponent()

      await fireEvent.click(screen.getByTestId('add'))
      expect(cartService.add).toBeCalledTimes(1)
      expect(cartService.add).toBeCalledWith(product)
    })
  })
})

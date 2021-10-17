import { screen, render, fireEvent } from '@testing-library/vue'
import ProductListItem from '@/components/product/product-list-item'
import cartManager from '@/managers/cartManager'
import domManager from '@/managers/domManager'
import Products from '@/test/_stubs/products'

jest.mock('@/managers/cartManager')
jest.mock('@/managers/domManager')

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
      expect(screen.getByTestId('link')).toHaveAttribute('to', `/product/${product.slug}/${product.id}`)
    })
  })

  describe('when user click in add to cart button', () => {
    it('should add product to cart', async () => {
      const { product } = renderComponent()

      await fireEvent.click(screen.getByTestId('add'))
      expect(cartManager.add).toBeCalledTimes(1)
      expect(cartManager.add).toBeCalledWith(product)
    })

    it('should save the trigger element', async () => {
      renderComponent()

      const button = screen.getByTestId('add')
      await fireEvent.click(button)

      expect(domManager.setTriggerElementFocus).toBeCalled()
      expect(domManager.setTriggerElementFocus).toBeCalledTimes(1)
      expect(domManager.setTriggerElementFocus).toBeCalledWith(button)
    })

    it('should disable scroll of body element', async () => {
      renderComponent()

      await fireEvent.click(screen.getByTestId('add'))

      expect(domManager.disableBodyScroll).toBeCalled()
      expect(domManager.disableBodyScroll).toBeCalledTimes(1)
      expect(domManager.disableBodyScroll).toBeCalledWith(document.body)
    })
  })
})

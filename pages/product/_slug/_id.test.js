import { createLocalVue } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import { render, screen, fireEvent } from '@testing-library/vue'
import PageProductDetail from '@/pages/product/_slug/_id'
import Products from '@/test/_stubs/products'
import cartService from '@/services/cartService'

jest.mock('@/services/cartService')

const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

function renderComponent(params) {
  const { $route } = params

  const { container } = render(PageProductDetail, {
    localVue,
    stubs: {
      NuxtLink: true,
    },
    mocks: {
      $route
    }
  })

  return {
    container
  }
}

describe('Pages > ProductDetail', () => {
  describe('when the component is rendered', () => {
    const product = Products[0]
    const $route = { params: { id: product.id }}

    it('should render correctly', () => {
      const { container } = renderComponent({ $route })

      expect(container).toBeDefined()
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(product.title)
      expect(screen.getByText(product.price)).toBeInTheDocument()
    })
  })

  describe('when user click in add to cart button', () => {
    const product = Products[0]
    const $route = { params: { id: product.id }}

    it('should add product to cart', async () => {
      renderComponent({ $route })

      await fireEvent.click(screen.getByTestId('add'))
      expect(cartService.add).toBeCalledTimes(1)
      expect(cartService.add).toBeCalledWith(product)
    })
  })
})

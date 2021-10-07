import { createLocalVue } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import { render, screen } from '@testing-library/vue'
import PageIndex from '@/pages/index'
import Products from '@/test/_stubs/products'

const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

function renderComponent(params) {
  const { $route } = params

  const { container } = render(PageIndex, {
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

describe('Pages > Index', () => {
  describe('when the component is rendered', () => {
    const $route = { query: { search: '' }}

    it('should render correctly', () => {
      const { container } = renderComponent({ $route })

      expect(container).toBeDefined()
      expect(screen.getAllByRole('listitem')).toHaveLength(Products.length)
    })
  })

  describe('when have query search on route', () => {
    const product = Products[0]
    const $route = { query: { search: product.title }}

    it('should render with products like query search', () => {
      renderComponent({ $route })

      expect(screen.getAllByRole('listitem')).toHaveLength(1)
      expect(screen.getByText(product.title)).toBeInTheDocument()
    })
  })
})

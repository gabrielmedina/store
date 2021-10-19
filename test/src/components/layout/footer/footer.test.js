import { render } from '@testing-library/vue'
import Footer from '@/components/layout/footer/footer'

function renderComponent() {
  const { container } = render(Footer)

  return {
    container,
  }
}

describe('Components > Layout > Footer > Footer', () => {
  describe('when the component is rendered', () => {
    it('should render correctly', () => {
      const { container } = renderComponent()

      expect(container).toBeDefined()
    })
  })
})

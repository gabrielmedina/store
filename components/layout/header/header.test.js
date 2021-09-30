import { render, screen } from '@testing-library/vue'
import Header from '@/components/layout/header/header'

function renderComponent() {
  const { container } = render(Header, {
    stubs: {
      NuxtLink: true,
    },
  })

  return {
    container,
  }
}

describe('Components > Layout > Header > Header', () => {
  describe('when the component is rendered', () => {
    it('should render correctly', () => {
      const { container } = renderComponent()

      expect(container).toBeDefined()
      expect(screen.getByTestId('home')).toHaveAttribute('to', `/`)
    })
  })
})

import { screen, render } from '@testing-library/vue'
import Card from '@/components/card/card'
import Products from '@/test/_stubs/products'

function renderComponent() {
  const product = Products[0]

  const { container } = render(Card, {
    props: {
      title: product.title,
      text: product.summary,
      image: product.image
    }
  })

  return {
    product,
    container
  }
}

describe('Components > Card > Card', () => {
  describe('when the component is rendered', () => {
    it('should render correctly', () => {
      const { container, product } = renderComponent()

      expect(container).toBeDefined()
      expect(screen.getByText(product.title)).toBeInTheDocument()
      expect(screen.getByText(product.summary)).toBeInTheDocument()
      expect(screen.getByRole('img')).toHaveAttribute('src', product.image.src)
      expect(screen.getByRole('img')).toHaveAttribute('alt', product.image.alt)
    })
  })
})

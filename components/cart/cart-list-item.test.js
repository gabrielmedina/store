import { screen, render, fireEvent } from '@testing-library/vue'
import CartListItem from '@/components/cart/cart-list-item'
import cartService from '@/services/cartService'
import Products from '@/test/_stubs/products'

jest.mock('@/services/cartService')

function renderComponent() {
  const product = Products[0]

  const { container } = render(CartListItem, {
    props: {
      product,
    }
  })

  return {
    product,
    container
  }
}

describe('Components > Cart > CartListItem', () => {
  describe('when the component is rendered', () => {
    it('should render correctly', () => {
      const { container, product } = renderComponent()

      expect(container).toBeDefined()
      expect(screen.getByTestId('quantity')).toHaveTextContent('1')
      expect(screen.getByText(product.title)).toBeInTheDocument()
      expect(screen.getByText(product.price)).toBeInTheDocument()
    })
  })

  describe('when user click in increase button', () => {
    it('should increase the quantity', async () => {
      renderComponent()

      await fireEvent.click(screen.getByTestId('increase'))
      expect(screen.getByTestId('quantity')).toHaveTextContent('2')

      await fireEvent.click(screen.getByTestId('increase'))
      expect(screen.getByTestId('quantity')).toHaveTextContent('3')
    })
  })

  describe('when user click in decrease button', () => {
    it('should decrease the quantity', async () => {
      renderComponent()

      await fireEvent.click(screen.getByTestId('increase')) // to add a new item
      expect(screen.getByTestId('quantity')).toHaveTextContent('2')

      await fireEvent.click(screen.getByTestId('decrease'))
      expect(screen.getByTestId('quantity')).toHaveTextContent('1')
    })

    describe('and have just 1 item', () => {
      it('should remove from cart', async () => {
        const { product } = renderComponent()

        await fireEvent.click(screen.getByTestId('decrease'))
        expect(cartService.remove).toBeCalledWith(product)
      })
    })
  })
})

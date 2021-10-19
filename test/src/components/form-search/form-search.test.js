import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import FormSearch from '@/components/form-search/form-search'

function renderComponent() {
  const { container, emitted } = render(FormSearch)

  return {
    container,
    emitted,
  }
}

describe('Components > FormSearch > FormSearch', () => {
  describe('when the component is rendered', () => {
    it('should render correctly', () => {
      const { container } = renderComponent()

      expect(container).toBeDefined()
      expect(screen.getByRole('form')).toBeInTheDocument()
      expect(screen.getByRole('searchbox')).toBeInTheDocument()
      expect(screen.getByRole('searchbox').value).toEqual('')
    })
  })

  describe('when user input a value on searchbox', () => {
    const term = 'watch'

    it('should update value data', async () => {
      renderComponent()

      const searchbox = screen.getByRole('searchbox')

      await fireEvent.update(searchbox, term)
      expect(searchbox.value).toEqual(term)
    })

    it('should emit submit event', async () => {
      const { emitted } = renderComponent()

      const searchbox = screen.getByRole('searchbox')

      await fireEvent.update(searchbox, term)
      await waitFor(() => expect(emitted().submit).toBeTruthy())
      await waitFor(() => expect(emitted().submit.length).toBe(1))
      await waitFor(() => expect(emitted().submit[0]).toEqual([term]))
    })

    it('should display cleaner button', async () => {
      renderComponent()

      await fireEvent.update(screen.getByRole('searchbox'), term)

      expect(screen.getByTestId('clear')).toBeInTheDocument()
    })
  })

  describe('when user click in clear search button', () => {
    const term = 'watch'

    it('should clear value data', async () => {
      renderComponent()

      const searchbox = screen.getByRole('searchbox')

      await fireEvent.update(searchbox, term)
      expect(searchbox.value).toEqual(term)

      await fireEvent.click(screen.getByTestId('clear'))
      expect(searchbox.value).toEqual('')
    })
  })
})

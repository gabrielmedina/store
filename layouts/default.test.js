import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import LayoutDefault from '@/layouts/default'

const mockRouter = {
  push: jest.fn()
}

function renderComponent() {
  const { container } = render(LayoutDefault, {
    stubs: {
      Nuxt: true,
      NuxtLink: true,
    },
    mocks: {
      $router: mockRouter,
    },
  })

  return {
    container
  }
}

describe('Layouts > Default', () => {
  describe('when the layout is rendered', () => {
    it('should render correctly', () => {
      const { container } = renderComponent()

      expect(container).toBeDefined()
    })
  })

  describe('when user input data on searchbox', () => {
    const term = 'term'

    it('should push router to "/" with query search value', async () => {
      renderComponent()

      await fireEvent.update(screen.getByRole('searchbox'), term)

      await waitFor(() => expect(mockRouter.push).toBeCalled())
      await waitFor(() => expect(mockRouter.push).toBeCalledWith({
        name: 'index',
        query: { search: term }
      }))
    })
  })
})

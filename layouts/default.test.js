import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import LayoutDefault from '@/layouts/default'

const mockRouter = {
  push: jest.fn()
}

function renderComponent(params) {
  const { $route } = params

  const { container } = render(LayoutDefault, {
    stubs: {
      Nuxt: true,
      NuxtLink: true,
    },
    mocks: {
      $route,
      $router: mockRouter,
    },
  })

  return {
    container
  }
}

describe('Layouts > Default', () => {
  describe('when the layout is rendered', () => {
    const $route = {
      path: '/',
      query: {}
    }

    it('should render correctly', () => {
      const { container } = renderComponent({ $route })

      expect(container).toBeDefined()
    })
  })

  describe('when url is provide with query search', () => {
    const term = 'term'

    const $route = {
      path: '/',
      query: {
        search: term
      }
    }

    it('should render the searchbox with value', () => {
      renderComponent({ $route })

      expect(screen.getByRole('searchbox').value).toEqual(term)
    })
  })

  describe('when user input data on searchbox', () => {
    const term = 'term'

    const $route = {
      path: '/',
      query: {}
    }

    it('should push router to "/" with query search value', async () => {
      renderComponent({ $route })

      await fireEvent.update(screen.getByRole('searchbox'), term)

      await waitFor(() => expect(mockRouter.push).toBeCalled())
      await waitFor(() => expect(mockRouter.push).toBeCalledWith({
        name: 'index',
        query: { search: term }
      }))
    })
  })
})

import { screen, render } from '@testing-library/vue'
import Links from '@@/test/_stubs/links'
import Breadcrumb from '@/components/breadcrumb/breadcrumb'

function renderComponent() {
  const links = Links

  const { container } = render(Breadcrumb, {
    props: {
      links,
    },
    stubs: {
      NuxtLink: true,
    },
  })

  return {
    links,
    container,
  }
}

describe('Components > Breadcrumb > Breadcrumb', () => {
  describe('when the component is rendered', () => {
    it('should render correctly', () => {
      const { container, links } = renderComponent()

      expect(container).toBeDefined()
      expect(screen.getAllByRole('listitem')).toHaveLength(links.length)

      const firstLink = links[0]

      expect(screen.getByText(firstLink.title)).toBeInTheDocument()
      expect(screen.getByTestId(firstLink.path)).toHaveAttribute('to',firstLink.path)
    })
  })
})

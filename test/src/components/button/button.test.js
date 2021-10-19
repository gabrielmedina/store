import { screen, render } from '@testing-library/vue'
import Button from '@/components/button/button'

function renderComponent(props = {}, attrs = {}) {
  const { container, baseElement } = render(Button, {
    props: {
      ...props,
    },
    attrs: {
      ...attrs,
    },
    stubs: {
      NuxtLink: true,
      RouterLink: true,
    }
  })

  return {
    container,
    baseElement
  }
}

describe('Components > Button > Button', () => {
  describe('when the component is rendered', () => {
    it('should render correctly', () => {
      const { container } = renderComponent()

      expect(container).toBeDefined()
      expect(screen.getByRole('button')).toBeInTheDocument()
    })
  })

  describe('when tag props is "a"', () => {
    it('should render the component with element <a>', () => {
      renderComponent({ tag: 'a' }, { href: '/path' })

      expect(screen.getByRole('link')).toBeInTheDocument()
      expect(screen.getByRole('link')).toHaveAttribute('href', '/path')
    })
  })

  describe('when tag props is "nuxt-link"', () => {
    it('should render the component with element <nuxt-link>', () => {
      const { baseElement } = renderComponent({ tag: 'nuxt-link' }, { to: '/path' })

      expect(baseElement.querySelector('nuxtlink-stub')).toBeInTheDocument()
      expect(baseElement.querySelector('nuxtlink-stub')).toHaveAttribute('to', '/path')
    })
  })

  describe('when tag props is "router-link"', () => {
    it('should render the component with element <router-link>', () => {
      const { baseElement } = renderComponent({ tag: 'router-link' }, { to: '/path' })

      expect(baseElement.querySelector('routerlink-stub')).toBeInTheDocument()
      expect(baseElement.querySelector('routerlink-stub')).toHaveAttribute('to', '/path')
    })
  })

  describe('when variant props is "transparent"', () => {
    it('should render the component with class "button--transparent"', () => {
      renderComponent({ variant: 'transparent' })

      expect(screen.getByRole('button')).toHaveClass('button--transparent')
    })
  })

  describe('when variant props is "primary"', () => {
    it('should render the component with class "button--primary"', () => {
      renderComponent({ variant: 'primary' })

      expect(screen.getByRole('button')).toHaveClass('button--primary')
    })
  })

  describe('when affordance props is "icon"', () => {
    it('should render the component with class "button--icon"', () => {
      renderComponent({ affordance: 'icon' })

      expect(screen.getByRole('button')).toHaveClass('button--icon')
    })
  })
})

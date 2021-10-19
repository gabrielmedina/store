<template>
  <nav>
    <ul class="default__nav">
      <li class="default__nav-item">
        <Button
          data-testid="cart"
          variant="transparent"
          affordance="icon"
          @click.prevent="openCart"
        >
          <SvgCart>
            <title>Open my cart</title>
          </SvgCart>
        </Button>
      </li>
    </ul>
  </nav>
</template>

<script>
import cartManager from '@/managers/cartManager'
import domManager from '@/managers/domManager'

import Button from '@/components/button/button'

import SvgCart from '~/assets/img/icons/cart-outline.svg?inline'

export default {
  name: 'Nav',
  components: {
    Button,
    SvgCart,
  },
  methods: {
    openCart(event) {
      cartManager.open()

      domManager.setTriggerElementFocus(event.target)
      domManager.disableBodyScroll(document.querySelector('body'))
    },
  },
}
</script>

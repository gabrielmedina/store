<template>
  <nav>
    <ul class="default__nav">
      <li class="default__nav-item">
        <Button
          tag="a"
          href="#cart"
          variant="transparent"
          type="icon"
          @click="openCart"
        >
          <SvgCart />
        </Button>
      </li>
    </ul>
  </nav>
</template>

<script>
import cartService from '@/services/cartService'

import Button from '@/components/button/button'

import SvgCart from '~/assets/img/icons/cart-outline.svg?inline'

export default {
  name: 'Nav',
  components: {
    Button,
    SvgCart,
  },
  methods: {
    openCart() {
      cartService.open()
    },
  },
}
</script>

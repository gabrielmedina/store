<template>
  <nav>
    <ul class="default__nav">
      <li class="default__nav-item">
        <ButtonIcon
          tag="a"
          href="#cart"
          @click="openCart"
        >
          <SvgCart />
        </ButtonIcon>
      </li>
    </ul>
  </nav>
</template>

<script>
import cartState from '@/state/cart'

import ButtonIcon from '@/components/button/button-icon'

import SvgCart from '~/assets/img/icons/cart-outline.svg?inline'

export default {
  name: 'Nav',
  components: {
    ButtonIcon,
    SvgCart,
  },
  methods: {
    openCart() {
      cartState.open = true;
    }
  }
}
</script>

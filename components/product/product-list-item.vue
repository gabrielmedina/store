<template>
  <nuxt-link
    class="product-list-item"
    to="/product/slug/id"
  >
    <Card
      title="Watch Vintage V"
      text="$ 50,00"
      :image="{
        src: '/watch-vintage-v.jpg',
        alt: 'Watch Vintage V'
      }"
    >
      <template #cta>
        <ButtonIcon
          tag="button"
          @click.stop.prevent="addToCart"
        >
          <SvgCart />
        </ButtonIcon>
      </template>
    </Card>
  </nuxt-link>
</template>

<script>
import { objectShouldHave } from 'vue-prop-validation-helper'

import cartState from '@/state/cart'

import Card from '@/components/card/card'
import ButtonIcon from '@/components/button/button-icon'

import SvgCart from '~/assets/img/icons/cart-outline.svg?inline'

export default {
  name: 'ProductListItem',
  components: {
    Card,
    ButtonIcon,
    SvgCart,
  },
  props: {
    product: {
      type: Object,
      required: true,
      validator: objectShouldHave([
        'id',
        'title',
        'image',
      ]),
    }
  },
  methods: {
    addToCart() {
      cartState.items.push(this.product);
      cartState.open = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.product-list-item {
  display: block;
  text-decoration: none;
}
</style>

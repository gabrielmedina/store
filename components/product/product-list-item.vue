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
          @click.stop="addToCart"
        >
          <SvgCart />
        </ButtonIcon>
      </template>
    </Card>
  </nuxt-link>
</template>

<script>
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
  methods: {
    addToCart() {
      console.log('Add to cart');
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

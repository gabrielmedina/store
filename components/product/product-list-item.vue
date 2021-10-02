<template>
  <nuxt-link
    data-testid="link"
    class="product-list-item"
    :to="`/product/${product.slug}/${product.id}`"
  >
    <Card :title="product.title" :text="product.price" :image="product.image">
      <template #cta>
        <Button
          tag="button"
          data-testid="add"
          type="icon"
          @click.stop.prevent="addToCart"
        >
          <SvgCart>
            <title>Add to cart</title>
          </SvgCart>
        </Button>
      </template>
    </Card>
  </nuxt-link>
</template>

<script>
import { objectShouldHave } from 'vue-prop-validation-helper'

import cartService from '@/services/cartService'
import domService from '@/services/domService'

import Card from '@/components/card/card'
import Button from '@/components/button/button'

import SvgCart from '~/assets/img/icons/cart-outline.svg?inline'

export default {
  name: 'ProductListItem',
  components: {
    Card,
    Button,
    SvgCart,
  },
  props: {
    product: {
      type: Object,
      required: true,
      validator: objectShouldHave(['id', 'slug', 'title', 'price', 'image']),
    },
  },
  methods: {
    addToCart() {
      cartService.add(this.product)
      domService.disableBodyScroll(document.querySelector('body'))
    },
  },
}
</script>

<style lang="scss" scoped>
.product-list-item {
  display: block;
  text-decoration: none;
}
</style>

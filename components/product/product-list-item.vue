<template>
  <nuxt-link
    data-testid="link"
    class="product-list-item"
    :to="`/product/${product.slug}/${product.id}`"
  >
    <Card
      :title="product.title"
      :text="price"
      :image="product.image"
    >
      <template #cta>
        <Button
          tag="button"
          data-testid="add"
          affordance="icon"
          @click.stop.prevent="addToCart"
        >
          <SvgCart>
            <title>Add {{ product.title }} to cart</title>
          </SvgCart>
        </Button>
      </template>
    </Card>
  </nuxt-link>
</template>

<script>
import { objectShouldHave } from 'vue-prop-validation-helper'

import cartManager from '@/managers/cartManager'
import domManager from '@/managers/domManager'

import formatCurrency from '@/utils/formatCurrency'

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
  computed: {
    price() {
      return formatCurrency.format(this.product.price)
    },
  },
  methods: {
    addToCart() {
      cartManager.add(this.product)
      domManager.disableBodyScroll(document.querySelector('body'))
    },
  },
}
</script>

<style lang="scss" scoped>
.product-list-item {
  display: block;
  text-decoration: none;
  will-change: transform;
  transition: transform 0.2s;

  &:hover,
  &:focus {
    transform: translateY(-4px);
  }
}
</style>

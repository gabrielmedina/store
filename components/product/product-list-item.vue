<template>
  <nuxt-link
    class="product-list-item"
    :to="`/product/${product.slug}/${product.id}`"
  >
    <Card :title="product.title" :text="product.price" :image="product.image">
      <template #cta>
        <ButtonIcon tag="button" @click.stop.prevent="addToCart">
          <SvgCart />
        </ButtonIcon>
      </template>
    </Card>
  </nuxt-link>
</template>

<script>
import { objectShouldHave } from 'vue-prop-validation-helper'

import cartService from '@/services/cart'

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
      validator: objectShouldHave(['id', 'slug', 'title', 'price', 'image']),
    },
  },
  methods: {
    addToCart() {
      try {
        cartService.add(this.product)
      } catch (error) {
        // TODO: move this msg to Toast component
        console.warn(error) // eslint-disable-line
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.product-list-item {
  display: block;
  text-decoration: none;
}
</style>

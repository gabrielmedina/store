<template>
  <section class="cart-list-item">
    <div class="cart-list-item__content">
      <h2 class="cart-list-item__title">
        {{ product.title }}
      </h2>

      <p class="cart-list-item__price">
        {{ product.price }}
      </p>

      <div class="cart-list-item__quantity">
        <ButtonIcon
          tag="button"
          class="cart__close"
          @click="decrease"
        >
          <SvgRemove />
        </ButtonIcon>

        <span class="cart-list-item__quantity-value">
          {{ quantity }}
        </span>

        <ButtonIcon
          tag="button"
          class="cart__close"
          @click="increase"
        >
          <SvgAdd />
        </ButtonIcon>
      </div>
    </div>

    <figure class="cart-list-item__figure">
      <img
        class="cart-list-item__image"
        :src="product.image.src"
        :alt="product.image.alt"
      >
    </figure>
  </section>
</template>

<script>
import { objectShouldHave } from 'vue-prop-validation-helper'

import cartService from '@/services/cart'

import SvgAdd from '~/assets/img/icons/add-outline.svg?inline'
import SvgRemove from '~/assets/img/icons/remove-outline.svg?inline'

export default {
  name: 'CartListItem',
  components: {
    SvgAdd,
    SvgRemove
  },
  props: {
    product: {
      type: Object,
      required: true,
      validator: objectShouldHave([
        'id',
        'title',
        'price',
        'image'
      ]),
    },
  },
  data() {
    return {
      quantity: 1,
    }
  },
  methods: {
    increase() {
      this.quantity++
    },
    decrease() {
      if (this.quantity === 1) {
        // TODO: improve UX with confirmation dialog
        return cartService.remove(this.product)
      }

      this.quantity--
    },
  }
}
</script>

<style lang="scss" scoped>
.cart-list-item {
  display: grid;
  column-gap: 24px;
  grid-template-columns: auto 1fr;
}

.cart-list-item__content {
  order: 1;
  display: grid;
  row-gap: 8px;
}

.cart-list-item__title {
  font-size: 1rem;
}

.cart-list-item__price {
  color: #777;
  font-size: .9rem;
}

.cart-list-item__figure {
  width: 104px;
  overflow: hidden;
  border-radius: 4px;
}

.cart-list-item__image {
  display: block;
  width: 100%;
}

.cart-list-item__quantity {
  order: 2;
  display: flex;
  align-self: end;
  align-items: center;
}

.cart-list-item__quantity-value {
  box-sizing: border-box;
  display: block;
  min-width: 24px;
  padding: 0 4px;
  text-align: center;
}

</style>

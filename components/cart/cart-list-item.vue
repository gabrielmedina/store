<template>
  <section class="cart-list-item">
    Item
  </section>
</template>

<script>
import { objectShouldHave } from 'vue-prop-validation-helper'

export default {
  name: 'CartListItem',
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
  }
}
</script>

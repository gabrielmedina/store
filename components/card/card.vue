<template>
  <section class="card">
    <header class="card__header">
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__text">{{ text }}</p>
    </header>

    <figure
      v-if="image"
      class="card__figure"
    >
      <img
        class="card__image"
        :src="image.src"
        :alt="image.alt"
      >
    </figure>

    <slot
      name="cta"
      class="card__cta"
    />
  </section>
</template>

<script>
import { objectShouldHave } from 'vue-prop-validation-helper'

export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      default: null,
      validator: objectShouldHave([
        'src',
        'alt'
      ])
    }
  }
}
</script>

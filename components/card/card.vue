<template>
  <section class="card">
    <header class="card__header">
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__text">{{ text }}</p>

      <div class="card__cta">
        <slot name="cta" />
      </div>
    </header>

    <figure
      v-if="image"
      class="card__figure"
    >
      <img
        class="card__image"
        :src="image.src"
        :alt="image.alt"
      />
    </figure>
  </section>
</template>

<script>
import { objectShouldHave } from 'vue-prop-validation-helper'

// TODO: Move this component to a Design System
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

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
}

.card__header {
  order: 2;
  position: relative;
  display: grid;
  row-gap: 8px;
  padding: 24px;

  @media screen and (min-width: 992px) {
    padding: 32px;
  }
}

.card__title {
  margin: 0;
  color: #222;
  font-size: 1rem;

  @media screen and (min-width: 992px) {
    font-size: 1.15rem;
  }
}

.card__text {
  margin: 0;
  color: #757575;
  font-size: .9rem;

  @media screen and (min-width: 992px) {
    font-size: 1rem;
  }
}

.card__cta {
  position: absolute;
  right: 16px;
  top: 0;
  transform: translateY(-50%);
}

.card__figure {
  order: 1;
  min-height: 56px;
  background: #e5e5e5;
}

.card__image {
  display: block;
  width: 100%;
}
</style>

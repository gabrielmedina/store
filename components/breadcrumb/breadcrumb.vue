<template>
  <ol
    v-if="display"
    class="breadcrumb"
  >
    <li
      v-for="link in links"
      :key="link.path"
      class="breadcrumb__item"
    >
      <nuxt-link
        :to="link.path"
        :data-testid="link.path"
        class="breadcrumb__link"
      >
        {{ link.title }}
      </nuxt-link>
    </li>
  </ol>
</template>

<script>
import { everyItemOfArrayShouldHave } from 'vue-prop-validation-helper'

// TODO: Move this component to a Design System
export default {
  name: 'Breadcrumb',
  props: {
    links: {
      type: Array,
      required: true,
      validator: everyItemOfArrayShouldHave([
        'path',
        'title'
      ])
    }
  },
  computed: {
    display() {
      return this.links.length > 0
    },
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  column-gap: 8px;
  margin: 0 0 24px;
  padding: 0;
  list-style: none;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
}

.breadcrumb__item {
  display: none;

  &:nth-last-child(2) {
    display: block;
  }

  @media screen and (min-width: 768px) {
    display: block;

    &::after {
      content: '/';
      margin-left: 8px;
      color: #757575;
    }

    &:last-child {
      &::after {
        display: none;
      }
    }
  }
}

.breadcrumb__link {
  color: var(--color-primary);
  text-decoration: none;
  padding: 8px 0;

  @media screen and (max-width: 767px) {
    &::before {
      content: '\2039';
    }
  }

  &.nuxt-link-exact-active {
    opacity: .5;
  }
}
</style>

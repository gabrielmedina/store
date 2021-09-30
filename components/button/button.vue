<template>
  <component
    :is="tag"
    class="button"
    :class="{
      [`button--${variant}`]: variant,
      [`button--${type}`]: type,
    }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper'

// TODO: Move this component to a Design System
export default {
  name: 'Button',
  props: {
    tag: {
      type: String,
      default: 'button',
      validator: shouldBeOneOf([
        'a',
        'button',
        'nuxt-link',
        'router-link'
      ])
    },
    variant: {
      type: String,
      default: null,
      validator: shouldBeOneOf([
        'transparent',
        'primary',
      ])
    },
    type: {
      type: String,
      default: null,
      validator: shouldBeOneOf([
        'icon',
      ])
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 24px;
  border: 0;
  border-radius: 4px;
  background: #fff;
  font-size: 1rem;
  color: var(--color-primary);

  &:hover,
  &:focus {
    background: #f5f5f5;
  }
}

.button--primary {
  color: #fff;
  background: var(--color-primary);

  &:hover,
  &:focus {
    background: var(--color-primary-dark);
  }
}

.button--transparent {
  background: unset;

  &:hover,
  &:focus {
    background: rgba(0,0,0,.05);
  }
}

.button--icon {
  width: 48px;
  padding: 12px;
  border-radius: 100%;
}
</style>

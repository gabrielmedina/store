<template>
  <component
    :is="tag"
    class="button-icon"
    :class="`button-icon--${type}`"
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
  name: 'ButtonIcon',
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
    type: {
      type: String,
      default: 'default',
      validator: shouldBeOneOf([
        'default',
        'transparent',
        'primary',
      ])
    }
  }
}
</script>

<style lang="scss" scoped>
.button-icon {
  cursor: pointer;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  padding: 12px;
  border: 0;
  border-radius: 100%;
  background: #fff;
  color: var(--color-primary);

  &:hover,
  &:focus {
    background: #f5f5f5;
  }
}

.button-icon--primary {
  color: #fff;
  background: var(--color-primary);

  &:hover,
  &:focus {
    background: var(--color-primary-dark);
  }
}

.button-icon--transparent {
  background: unset;

  &:hover,
  &:focus {
    background: rgba(0,0,0,.05);
  }
}
</style>

<template>
  <form
    class="form-search"
    @submit.prevent="handleSubmit"
  >
    <label
      for="form-search"
      class="form-search__label"
    >
      Search
    </label>

    <input
      id="form-search"
      v-model="value"
      type="search"
      placeholder="What are you searching for?"
      class="form-search__input"
    />

    <Button
      v-if="hasValue"
      tag="button"
      type="button"
      affordance="icon"
      class="form-search__button-clear"
      @click="handleClear"
    >
      <SvgClear>
        <title>Clear search</title>
      </SvgClear>
    </Button>
  </form>
</template>

<script>
import { debounce } from 'lodash'

import Button from '@/components/button/button'

import SvgClear from '~/assets/img/icons/close-outline.svg?inline'

export default {
  name: 'FormSearch',
  components: {
    Button,
    SvgClear,
  },
  data() {
    return {
      value: '',
    };
  },
  computed: {
    hasValue() {
      return this.value !== ''
    },
  },
  watch: {
    value() {
      this.handleUpdate()
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.value)
    },
    handleClear() {
      if (this.hasValue) {
        this.value = ''
      }
    },
    handleUpdate: debounce(function() {
      this.handleSubmit()
    }, 500),
  },
}
</script>

<style lang="scss" scoped>
.form-search {
  position: relative;
  display: block;
}

.form-search__label {
  display: none;
}

.form-search__input {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 56px;
  padding: 0 24px;
  background: #fff;
  border-radius: 4px;
  border: solid 1px var(--color-primary);
  font-size: 1rem;

  &:focus {
    border-color: var(--color-primary-dark);
  }
}

.form-search__button-clear {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
}
</style>

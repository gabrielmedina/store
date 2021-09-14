<template>
  <form class="form-search">
    <label
      for="form-search"
      class="form-search__label"
    >
      Search
    </label>

    <input
      id="form-search"
      type="search"
      placeholder="What are you searching for?"
      class="form-search__input"
    >
  </form>
</template>

<script>
export default {
  name: 'FormSearch',
}
</script>

<style lang="scss" scoped>
.form-search {
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
  border-radius: 4px;
  border: solid 1px var(--color-primary);
  font-size: 1rem;

  &:focus {
    border-color: var(--color-primary-dark);
  }

  @media screen and (min-width: 768px) {
    max-width: 408px;
  }
}
</style>

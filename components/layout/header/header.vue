<template>
  <header>
    <nuxt-link to="/">
      <slot name="logo" />
    </nuxt-link>

    <slot />

    <nav>
      <slot name="nav" />
    </nav>
  </header>
</template>

<script>
export default {
  name: 'LayoutHeader',
}
</script>


<template>
  <footer class="footer">
    <slot
      name="logo"
      class="footer__logo"
    />

    <slot class="footer__content"/>
  </footer>
</template>

<script>
export default {
  name: 'LayoutFooter',
}
</script>

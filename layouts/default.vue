<template>
  <div class="w-screen z-50">
    <navbar ref="navbar" />
  </div>
  <div class="">
    <slot />
  </div>
  <!-- <AppFooter /> -->
</template>

<script>
import navbar from '@/components/navbar.vue';
// import AppFooter from '@/components/footer.vue';
export default {
  // components: { navbar, AppFooter },
};
</script>

<style lang="scss" scoped></style>

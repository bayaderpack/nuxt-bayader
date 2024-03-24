<script setup lang="ts">
useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

const localePath = useLocalePath()
</script>
<template>
  <div
    class="min-h-screen "
  >
    <Navbar />
    <!--

    Template below is intended to be removed..

  -->
    <div class=" mt-16">

        <slot />

      <Footer />
    </div>
  </div>
</template>
<style lang="postcss">
ul .router-link-exact-active {
  @apply border-slate-400 bg-slate-500 text-neutral-content hover:border-slate-500 hover:bg-slate-500 dark:border-slate-600 dark:bg-slate-700;
}
</style>

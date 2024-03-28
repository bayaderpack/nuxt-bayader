<template>
<div class="card rounded-box shadow-lg w-full">
  <figure><img :src="props.image" :alt="props.title" class="object-cover w-full" /></figure>
  <div class="card-body">
    <h2 class="card-title dark:text-slate-50">{{ props.title}}!</h2>
    <div class="card-actions justify-end">
      <button class="btn btn-accent">{{ props.button }}</button>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  image: String,
  button: String,
})
</script>

<style>

</style>
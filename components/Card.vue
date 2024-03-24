<template>
<div class="card">
  <figure><img :src="props.image" :alt="props.title" /></figure>
  <div class="card-body">
    <h2 class="card-title">{{ props.title}}!</h2>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">{{ props.button }}</button>
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
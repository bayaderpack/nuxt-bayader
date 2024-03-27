<script setup>
const activeTabHash = ref("");
const tabs = ref([]);

provide("addTab", (tab) => {
  const count = tabs.value.push(tab);

  if (count === 1) {
    activeTabHash.value = tab.hash;
  }
});
provide("activeTabHash", activeTabHash);
</script>

<template>
  <div role="tablist" class="container tabs-boxed  tabs mt-12 flex items-start">
    <a
      role="tab"
      class="tab h-auto px-6 py-2 text-3xl font-bold"
      :class="{
        '': tab.hash !== activeTabHash,
        'tab-active !bg-accent  !text-white': tab.hash === activeTabHash,
      }"
      v-for="tab in tabs"
      :key="tab.title"
      @click="activeTabHash = tab.hash"
    >
      {{ tab.title }}
    </a>
    <div class="px-4 py-12">
      <slot />
    </div>
  </div>
</template>

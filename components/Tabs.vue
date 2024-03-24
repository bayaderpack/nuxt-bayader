<script setup>
const activeTabHash = ref('');
const tabs = ref([]);

provide('addTab', (tab) => {
  const count = tabs.value.push(tab);

  if (count === 1) {
    activeTabHash.value = tab.hash;
  }
});
provide('activeTabHash', activeTabHash);
</script>

<template>
<div role="tablist" class="tabs tabs-lifted tabs-lg mt-12 w-full">
      <a
      role="tab" class="tab text-3xl font-black"
        :class="{
          '': tab.hash !== activeTabHash,
          'tab-active text-success': tab.hash === activeTabHash,
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
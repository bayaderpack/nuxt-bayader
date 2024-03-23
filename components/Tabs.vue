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
      <div class="rounded-box border shadow-lg max-w-9xl w-8xl px-18">
    <ul class="flex flex-nowrap justify-between border-b ">
      <li
        class="
          w-full
          font-black
          text-center
          py-4
          cursor-pointer
        "
        :class="{
          'bg-transparent rounded-box rounded-b-none': tab.hash !== activeTabHash,
          'bg-base-100 rounded-box rounded-b-none': tab.hash === activeTabHash,
        }"
        v-for="tab in tabs"
        :key="tab.title"
        @click="activeTabHash = tab.hash"
      >
        {{ tab.title }}
      </li>
    </ul>
    <div class="px-4 py-12">
    <slot />
</div>
  </div>
</template>
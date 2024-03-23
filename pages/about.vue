<script setup>
const { t } = useI18n();
useHead({
  title: t("pages.about.meta.title"),
  meta: [{ name: "description", content: t("pages.about.meta.description") }],
});
useSeoMeta({
  title: t("pages.about.meta.title"),
  description: t("pages.about.meta.description"),
});
</script>
<template>
  <div class="p-5 text-left">
    <h1 class="text-left">{{ $t("pages.about.title") }}</h1>
    <main class="mt-4 text-slate-500 dark:text-slate-400 space-x-4 bg-white rounded-box shadow-lg p-12">
      <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="relative">
        <img src="https://bayaderpack.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-us1.785eb612.jpg&w=640&q=75" alt="">
      <h2 class="rounded-box border-none p-12 bg-green-200 absolute top-4 right-16 text-3xl">Bayader Aljazeera for Packaging & Printing</h2>
      </div>

<div class="prose">
  <p class="text-lg">Established in 2002 with strong determination to provide high quality and affordable solutions of packaging and printing to the local market. By now Bayader Aljazeera has become a specialized manufacturer of packaging boxes and materials with state of the art production machines, we are proud to be able to provide the best possible solutions of packaging and printing to businesses with the most affordable prices. helping businesses and customers to achieve success.</p>
  <p class="text-lg">Bayader Aljazeera for Packaging & Printing was the first manufacturer in Saudi Arabia which is able to provide packaging and printing solutions to small & medium enterprises with low quantity and ready to use solutions, helping small businesses that cannot afford to plan a large quantity order, and now we've been able to establish an automated channel through our web platform to customize businesses selections by online orders.</p>
</div>
</div>
    </main>
  </div>
</template>

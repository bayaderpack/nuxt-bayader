<script setup lang="ts">
const { t } = useI18n();
useHead({
  title: t("pages.index.meta.title"),
  meta: [{ name: "description", content: t("pages.index.meta.description") }],
});
useSeoMeta({
  title: t("pages.index.meta.title"),
  description: t("pages.index.meta.description"),
});
</script>
<template>
  <div>
<div class="hero min-h-[34rem]" style="background-image: url(bg.jpg); background-size: cover;">
  <div class="hero-content justify-start items-start w-full text-neutral-content">
    <div class="max-w-lg text-white bg-black p-8 rounded-box bg-opacity-70">
      <h1 class="mb-5 text-3xl font-bold text-accent">Bayader Aljazirah</h1>
      <p class="mb-5 text-5xl">Why we are your best option?</p>
      <button class="btn btn-accent">Find out</button>
    </div>
  </div>
</div>

<div class="flex flex-col items-center mt-12">
  <h1 class="heading-1">Select type or industry that you need</h1>
  <Tabs>
    <Tab title="Type">
      <div class="flex justify-between px-16 gap-24 w-full">




<Card title="Luxury Box" image="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fcategories%2Fluxury%2Fluxury_category_thumbnail.jpg&w=128&q=75" button="Add to cart"/>
<Card title="Pizza" image="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fcategories%2Fpizza%2Fpizza_category_thumbnail.jpg&w=128&q=75" button="Add to cart"/>
<Card title="Bags" image="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fcategories%2Fbags%2Fbags_category_thumbnail.jpg&w=128&q=75" button="Add to cart"/>
<Card title="Wrap paper" image="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fcategories%2Fwrap%2Fwrap_category_thumbnail.jpg&w=128&q=75" button="Add to cart"/>



</div>
    </Tab>
    <Tab title="Industry">


<div class="flex justify-between gap-24 px-16 w-full">

  <Card title="Restaurants & Coffee Shops" image="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fcategories%2Frestaurants%2Fresturants_category_thumbnail.jpg&w=128&q=75" button="Add to cart"/>
<Card title="Sweets" image="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fcategories%2Fsweets%2Fsweets_category_thumbnail.jpg&w=128&q=75" button="Add to cart"/>
<Card title="Cosmetics" image="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fcategories%2Fcosmetics%2Fcosmetics_category_thumbnail.jpg&w=128&q=75" button="Add to cart"/>

</div>
    </Tab>
  </Tabs>

</div>
</div>
</template>


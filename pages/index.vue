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
      <button class="btn btn-success">Find out</button>
    </div>
  </div>
</div>

<div class="flex flex-col items-center mt-12">
  <h1 class="heading-1">Select type or industry that you need</h1>
  <Tabs>
    <Tab title="Type">
      <div class="grid grid-cols-4 gap-12 px-16 w-full">



      <div class="card bg-base-100 shadow-lg hover:scale-110 transition-all duration-300">
  <figure><img class="w-full h-auto" src="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fcategories%2Fluxury%2Fluxury_category_thumbnail.jpg&w=128&q=75" alt="Luxury Box"/></figure>
  <div class="card-body p-2 ">
    <h2 class="card-title text-green-600">Luxury Box<br /> <br /><br /></h2>

    <div class="card-actions justify-end">
      <button class="btn btn-success">Order your</button>
    </div>
  </div>

</div>
<div class="card bg-base-100 shadow-lg hover:scale-110 transition-all duration-300">
  <figure><img class="w-full h-auto" src="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fcategories%2Fpizza%2Fpizza_category_thumbnail.jpg&w=128&q=75" alt="Pizza"/></figure>
  <div class="card-body p-2 ">
    <h2 class="card-title text-green-600">Pizza<br /> <br /><br /></h2>

    <div class="card-actions justify-end">
      <button class="btn btn-success">Order your</button>
    </div>
  </div>

</div>
<div class="card bg-base-100 shadow-lg hover:scale-110 transition-all duration-300">
  <figure><img class="w-full h-auto" src="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fcategories%2Fbags%2Fbags_category_thumbnail.jpg&w=128&q=75" alt="Bags"/></figure>
  <div class="card-body p-2 ">
    <h2 class="card-title text-green-600">Bags<br /> <br /><br /></h2>

    <div class="card-actions justify-end">
      <button class="btn btn-success">Order your</button>
    </div>
  </div>

</div>
<div class="card bg-base-100 shadow-lg hover:scale-110 transition-all duration-300">
  <figure><img class="w-full h-auto" src="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fcategories%2Fwrap%2Fwrap_category_thumbnail.jpg&w=128&q=75" alt="Wrap paper"/></figure>
  <div class="card-body p-2 ">
    <h2 class="card-title text-green-600">Wrap paper<br /> <br /><br /></h2>

    <div class="card-actions justify-end">
      <button class="btn btn-success">Order your</button>
    </div>
  </div>

</div>
</div>
    </Tab>
    <Tab title="Industry">
<div class="grid grid-cols-4 gap-12 px-16 w-full">
<div class="card bg-base-100 shadow-lg hover:scale-110 transition-all duration-300">
  <figure><img class="w-full h-auto" src="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fcategories%2Frestaurants%2Fresturants_category_thumbnail.jpg&w=128&q=75" alt="Restaurants & Coffee Shops"/></figure>
  <div class="card-body p-2 ">
    <h2 class="card-title text-green-600">Restaurants <br />& <br />Coffee Shops</h2>

    <div class="card-actions justify-end">
      <button class="btn btn-success">Order your</button>
    </div>
  </div>

</div>
<div class="card bg-base-100 shadow-lg hover:scale-110 transition-all duration-300">
  <figure><img class="w-full h-auto" src="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fcategories%2Fsweets%2Fsweets_category_thumbnail.jpg&w=128&q=75" alt="Sweets"/></figure>
  <div class="card-body p-2 ">
    <h2 class="card-title text-green-600">Sweets<br /> <br /><br /></h2>

    <div class="card-actions justify-end">
      <button class="btn btn-success">Order your</button>
    </div>
  </div>

</div>
<div class="card bg-base-100 shadow-lg hover:scale-110 transition-all duration-300">
  <figure><img class="w-full h-auto" src="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fcategories%2Fcosmetics%2Fcosmetics_category_thumbnail.jpg&w=128&q=75" alt="Cosmetics"/></figure>
  <div class="card-body p-2 ">
    <h2 class="card-title text-green-600">Cosmetics<br /> <br /><br /></h2>

    <div class="card-actions justify-end">
      <button class="btn btn-success">Order your</button>
    </div>
  </div>

</div>
</div>
    </Tab>
  </Tabs>

</div>
</div>
</template>


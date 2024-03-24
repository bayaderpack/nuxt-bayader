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
    <PageTitle>
      {{ $t("pages.about.title") }}
    </PageTitle>

    <main class="mt-4 bg-base-100 dark:bg-base-300 text-base-content  space-x-4  rounded-box shadow-lg p-12">
      <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="relative">
        <img src="https://bayaderpack.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-us1.785eb612.jpg&w=640&q=75" alt="" class="rounded-box">
      <h2 class="rounded-box border-none p-12 bg-green-200 absolute top-4 right-16 text-3xl">Bayader Aljazeera for Packaging & Printing</h2>
      </div>

<div class="prose mt-8 md:mt-0 dark:text-slate-50">
  <p class="text-lg">Established in 2002 with strong determination to provide high quality and affordable solutions of packaging and printing to the local market. By now Bayader Aljazeera has become a specialized manufacturer of packaging boxes and materials with state of the art production machines, we are proud to be able to provide the best possible solutions of packaging and printing to businesses with the most affordable prices. helping businesses and customers to achieve success.</p>
  <p class="text-lg">Bayader Aljazeera for Packaging & Printing was the first manufacturer in Saudi Arabia which is able to provide packaging and printing solutions to small & medium enterprises with low quantity and ready to use solutions, helping small businesses that cannot afford to plan a large quantity order, and now we've been able to establish an automated channel through our web platform to customize businesses selections by online orders.</p>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 mt-20">
  <div class="prose mb-8 md:mb-0 dark:text-slate-50">
    <h3>Why Bayader Aljazeera?</h3>
    <ol>
      <li class="text-lg">We can help you to design and manufacture your custom design/size product with the lowest minimum order quantity in the market. If you are a small business owner, you don't need to worry about having to afford large quantity order to be able to launch your business.</li>
      <li class="text-lg">We've a fully automated advanced manufacture machines that are capable of manufacturing all your packaging needs with the lowest possible cost, reducing the cost and time of having to import raw or end materials</li>
      <li class="text-lg">You can easily request an order online and provide your custom design/requests, we will help you to draw and design the material, and send you a detailed quotation within no time.</li>
      <li class="text-lg">We provide packaging and printing solutions for all businesses with no exceptions, resturants, coffee shops, cosmetics, food factories, bakeries, sweet shops, you name it.</li>
    </ol>
</div>
      <div class="relative">
        <img src="https://bayaderpack.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-us2.efc56b69.jpg&w=640&q=75" alt="" class="rounded-box">

      </div>


</div>
    </main>
  </div>
</template>

<template>
  <div class="p-5 text-left">
    <PageTitle>
      Contact Us
    </PageTitle>

    <main class="mt-4 bg-base-100 dark:bg-base-300 text-base-content  space-x-4  rounded-box shadow-lg p-12">
      <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="flex flex-col">
        <div class="prose mb-6 text-lg dark:text-slate-50">
          <p>Southern Ring Rd, Al-Manakh, Riyadh 14311,</p>
          <p>KSA Riyadh</p>
          <p><span class="font-semibold">Telephone: </span>055-562-1885</p>
          <p><span class="font-semibold">Email: </span>info@bayaderpack.com</p>
        </div>
        <iframe class="rounded-box" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.0447518650913!2d46.77670969675842!3d24.622142428067917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f089b33a44a2f%3A0x7aa4c73b11ee6e28!2z2KjZitin2K_YsSDYp9mE2KzYstmK2LHYqSDZhNmE2LfYqNin2LnYqSDZiNin2YTYqti62YTZitmBIEJheWFkZXIgQWxqYXppcmFoIHByaW50aW5nICYgcGFja2FnaW5n!5e0!3m2!1sen!2ssa!4v1711278709068!5m2!1sen!2ssa" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

<div class="mt-8 md:mt-0 bg-base-200 p-2 md:p-6 rounded-box flex flex-col justify-between max-w-[500px] border-4 border-content-text dark:border-accent">
  <label class="form-control w-full">
  <div class="label">
    <span class="label-text text-md"><Icon name="icomoon-free:user-tie" /> First Name</span>
  </div>
  <input type="text" placeholder="Type here" class="input input-bordered dark:input-accent w-full" />
</label>
<label class="form-control w-full">
  <div class="label">
    <span class="label-text text-md"><Icon name="ic:round-phone" /> Phone number</span>
  </div>
  <input type="text" placeholder="Type here" class="input input-bordered dark:input-accent w-full" />
</label>

<label class="form-control w-full">
  <div class="label">
    <span class="label-text text-md"><Icon name="gravity-ui:envelope" /> E-mail</span>
  </div>
  <input type="text" placeholder="Type here" class="input input-bordered dark:input-accent w-full" />
</label>

<label class="form-control w-full">
  <div class="label">
    <span class="label-text text-md"><Icon name="solar:case-round-minimalistic-bold" /> Company</span>
  </div>
  <input type="text" placeholder="Type here" class="input input-bordered dark:input-accent w-full" />
</label>

<label class="form-control w-full">
  <div class="label">
    <span class="label-text text-md"><Icon name="ph:file-text-thin" /> Your message</span>
  </div>
  <textarea class="textarea textarea-bordered dark:textarea-accent h-24" placeholder="Your message"></textarea>
</label>


<button class="btn btn-accent text-lg">SUBMIT <Icon name="fa:send" class="text-3xl text-primary" /></button>
</div>
</div>

    </main>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
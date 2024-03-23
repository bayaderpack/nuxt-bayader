<script setup lang="ts">
defineProps({ error: { type: Object, default: null } });
</script>
<template>
  <!-- <div
    class="h-screen bg-slate-100 p-20 text-slate-900 dark:bg-slate-900 dark:text-white"
  >
    <div
      class="mx-auto w-auto max-w-md rounded-2xl bg-white p-6 text-center shadow-xl dark:bg-slate-800"
    >
      <div
        class="relative flex flex-col justify-center gap-y-4 sm:h-40 sm:gap-y-5"
      >
        <p class="mb-[-1em] font-semibold text-slate-500 dark:text-slate-400">
          {{ error.statusCode }}
        </p>
        <h1 class="text-xl font-medium">
          <template v-if="error.statusCode == 404">
            {{ $t("error.page-not-found") }}
          </template>
          <template v-else>
            {{ error.message }}
          </template>
        </h1>

      </div>
    </div>
  </div> -->
  <!-- component -->
<div class="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
    <div class="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div class="w-full md:w-1/2">
            <div class="mb-10 lg:mb-20">
               <img src="https://flipstore.withun.link/identity/Group%201.svg">
            </div>
            <div class="mb-10 md:mb-20 text-gray-600 font-light">
                <h1 class="font-black uppercase text-3xl lg:text-5xl text-indigo-700 mb-10">{{ error.statusCode }}
                  <template v-if="error.statusCode == 404">
            {{ $t("error.page-not-found") }}
          </template>
          <template v-else>
            {{ error.message }}
          </template></h1>
            </div>
            <div class="mb-20 md:mb-0">
              <button
          class="btn btn-error"
          @click="clearError({ redirect: '/' })"
        >
          {{ $t("error.return") }}
        </button>
            </div>
        </div>
        <div class="w-full md:w-1/2 text-center">
           <img src="https://www.svgrepo.com/show/14899/printer.svg" class="w-64 h-64">

        </div>
    </div>
    <div class="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
    <div class="w-96 h-full bg-indigo-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
</div>
</template>

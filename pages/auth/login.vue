<template>
  <div>
    <h2>User Login</h2>

    {{ token.getToken }}
    {{ token.getStatus }}

    <form class="mx-auto max-w-sm" @submit.prevent="handleSubmite()">
      <div class="mb-5">
        <label
          for="email"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >email</label
        >
        <input
          id="email"
          v-model="user.email"
          type="email"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@flowbite.com"
          required
        />
        <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
      </div>

      <div class="mb-5">
        <label
          for="password"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >password</label
        >
        <input
          id="password"
          v-model="user.password"
          type="password"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          required
        />
        <span v-if="errors.password" class="text-red-500">{{
          errors.password
        }}</span>
      </div>

      <button
        type="submit"
        class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["guest"],
  // or middleware: 'auth'
});

const auth = useAuthStore();
const token = useTokenStore();
const user = ref({
  email: "",
  password: "",
});

const errors = ref({
  email: "test",
  password: "test",
});

const handleSubmite = async () => {
  await auth.login(user);
};
</script>

<style lang="scss" scoped></style>

<script setup>
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
 // use logUserOut action from  auth store
// const token = useCookie("token"); // useCookie new hook in nuxt 3
const token = useTokenStore();
definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
});

const { data, pending, error, refresh } = await useFetch('http://localhost:8080/api/user/get',{
    headers: {
          Accept: "application/json",
          Authorization: `${token.getToken}`,
        },
  })

</script>

<template>


  <div class="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

    <div v-for="user, key in data.users" :key="key">
    <p>{{user.email}}</p>
    <p>{{user.username}}</p>
  </div>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>

  </div>
</div>

</template>

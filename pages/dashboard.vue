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
  <div>
<!-- {{token.getToken}} -->
    <div v-for="user, key in data.users" :key="key">
    <p>{{user.email}}</p>
    <p>{{user.username}}</p>
  </div>
  </div>

</template>

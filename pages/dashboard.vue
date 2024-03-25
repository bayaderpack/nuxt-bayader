<script setup>
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
const { logUserOut } = useAuthStore(); // use logUserOut action from  auth store
const token = useCookie("token"); // useCookie new hook in nuxt 3

definePageMeta({
    middleware: "auth", // this should match the name of the file inside the middleware directory
});
</script>
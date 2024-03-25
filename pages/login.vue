<script  setup>
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
    username: "",
    password: "",
});
const router = useRouter();

// bind the login function to the login button  click event and prevent default form submission
const login = async () => {
    await authenticateUser(user.value); // call authenticateUser and pass the user object
    // redirect to homepage if user is authenticated
    if (authenticated) {
        router.push("/dashboard");
    }
};
definePageMeta({
    middleware: "auth", // this should match the name of the file inside the middleware directory
});
</script>
import { defineStore } from "pinia";

interface UserPayloadInterface {
    username: string;
    password: string;
}

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authenticated: false,
        loading: false,
    }),
    actions: {
        authenticateUser({ username, password }: UserPayloadInterface) {
            const loginApi = "http://localhost:8000/api/auth/login";
            const csrf = "<?= csrf() ?>";
            const credentials = username + ":" + password;

            // authenticate user with kirby headless api
            async function authenticate() {
                const response = await fetch(loginApi, {
                    method: "post",
                    // for reference: "/vendor/getkirby/cms/config/api/routes/auth.php" && https://getkirby.com/docs/reference/objects/cms/auth/login
                    headers: new Headers({ "Content-Type": "application/json", "X-CSRF": csrf, Authorization: "Basic " + btoa(credentials) }),
                    body: JSON.stringify({ email: username, password: password, long: false }),
                });
                if (!response.ok) {
                    const message = `An error has occured: ${response.status}`;
                    throw new Error(message);
                }
                const data = await response.json();
                return data;
            }
            // then set token cookie
          authenticate().then((data) => {
              const token = useCookie("token"); // useCookie new hook in nuxt 3
              token.value = data.user.id; // set token to cookie
              if (!data.ok) {
                  useRouter().push("/dashboard"); // redirect to dashboard page
                  this.authenticated = true; // set authenticated state value to true
              }
          });
        },
        logUserOut() {
            const token = useCookie("token"); // useCookie new hook in nuxt 3
            this.authenticated = false; // set authenticated  state value to false
            token.value = null; // clear the token cookie
            useRouter().push("/login"); // redirect to login page
        },
    },
});
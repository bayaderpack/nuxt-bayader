/* eslint-disable prettier/prettier */
import { defineStore } from "pinia";
import { useTokenStore } from "./token";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {},
  }),
  // user save
  persist: {
    paths: ["user"],
  },

  getters: {
    getUser: (state) => state.user,
  },

  actions: {
    // login
    async login(userData) {
      // console.log("data", userData.value)
      const token = useTokenStore();

      const data = await $fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        body: { ...userData.value },
      });
      console.log("auth_store", data);
      token.setToken(data.token);
      this.user = data.user;
      return navigateTo("/dashboard");
    }, // end login

    // register
    async register(userData) {
      // alert('oky');

      const token = useTokenStore();
      const data = await $fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        body: { ...userData },
      });
      token.value = data.data;
      return navigateTo("/auth/login");
    },

    // logout part

    logout() {
      // alert('oky');

      const token = useTokenStore();
      // const res = await $fetch("http://localhost:8080/api/logout", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     authorization: `Bearer ${token.getToken}`,
      //   },
      // });
      token.removeToken();
      // console.log("auth_store", res);
      return navigateTo("/auth/login");
    },

    async getAllUsers() {
      // alert('oky');

      const token = useTokenStore();
      const res = await $fetch("http://localhost:8080/api/user/get", {
        headers: {
          Accept: "application/json",
          authorization: `${token.getToken}`,
        },
      });
      // token.removeToken();
      console.log("auth_store", res);
      return navigateTo("/auth/login");
    },

    // async rolerequest() {

    //   //alert('oky');

    //   const token = useTokenStore();
    //   try {
    //     const res = await $fetch('http://localhost:8080/api/role_permissions', {
    //       method: 'GET',
    //       headers: {
    //         Accept: "application/json",
    //         authorization: `Bearer ${token.getToken}`,

    //       },

    //     });

    //     console.log('auth_store', res);

    //   } catch (error) {
    //     throw error;
    //   }

    // },

    //         commonSetter(data){
    //  const tokenStore =useTokenStore();
    //  tokenStore.setToken(data.authorization.token);
    //  this.user = data.user

    //  return navigateTo("/layout/dashboard");

    //         }
  }, // end action
});

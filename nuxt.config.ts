// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    compressPublicAssets: true,
    logLevel: 4,
  },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/device",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@dargmuesli/nuxt-cookie-control",
    "@nuxtjs/sitemap",
    "@nuxt/fonts",
    "@nuxtjs/color-mode",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.ts",
    exposeConfig: false,
    viewer: true,
  },
  pinia: {
    storesDirs: ["./store/**"],
  },
  colorMode: {
    classSuffix: "",
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  fonts: {
    families: [{ name: "Montserrat", provider: "google" }],
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      styles: ["normal", "italic"],
    },
  },
  site: {
    url: import.meta.env.VITE_BASE_URL,
  },
  imports: {
    dirs: ["./stores", "./locales"],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  image: {
    provider: "ipx",
    quality: 80,
    format: ["png", "jpeg", "webp"],
  },
  i18n: {
    langDir: "./locales",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en.json",
        name: "English",
        dir: "ltr",
      },
      {
        code: "ar",
        iso: "ar-SA",
        file: "ar.json",
        name: "Arabic",
        dir: "rtl",
      },
    ],
    baseUrl: import.meta.env.VITE_BASE_URL,
    defaultLocale: "en",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "language",
      redirectOn: "root",
    },
  },
  cookieControl: {
    cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 365, // one year
    // set all these to true for highest GDPR enforcement
    isAcceptNecessaryButtonEnabled: true,
    isModalForced: false,
    isCookieIdVisible: true,
    closeModalOnClickOutside: true,
    // show cookie button
    isControlButtonEnabled: true,
    // disable to get unstyled css for tailwind
    isCssEnabled: false,
    isDashInDescriptionEnabled: false,
    cookies: {
      necessary: [
        {
          name: {
            en: en.cookies.necessary.title,
            ar: ar.cookies.necessary.title,
          },
          description: {
            en: en.cookies.necessary.description,
            ar: ar.cookies.necessary.description,
          },
          targetCookieIds: ["ncc_"],
        },
      ],
      optional: [],
    },
    locales: ["en", "ar"],
  },
});

<!-- <script setup>
const { locale, availableLocales } = useI18n();

// update local storage upon language change
const toggleLocale = () => {
  localStorage.setItem("nuxt-lang", locale.value);
};

// check for stored language on initial load.
onMounted(() => {
  const storedLanguage = localStorage.getItem("nuxt-lang");
  if (storedLanguage) {
    locale.value = storedLanguage;
  }
});

const switchLocalePath = useSwitchLocalePath()

</script>
<template>
  <form>
    <label for="languages" aria-label="icon">
      <Icon name="prime:language" size="1.5em" />
    </label>
    <select
      id="languages"
      v-model="locale"
      aria-label="language"
      class="bg-transparent"
      @change="toggleLocale"
    >
      <option
        v-for="language in availableLocales"
        :key="language"
        :aria-label="$t('locale.' + language)"
        :value="language"
        :selected="locale === language"
        class="dark:bg-slate-800"
      >
        {{ $t("locale." + language) }}
      </option>
    </select>
  </form>
</template> -->

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()


const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
    {{ locale.name }}
  </NuxtLink>
</template>

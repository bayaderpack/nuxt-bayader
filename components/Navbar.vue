<script setup>
    const open = ref(false);
    const { locale, availableLocales } = useI18n()
    function menuOpen() {
      open.value = !open.value;
    }
 const data = () => {
    return {
      navigation: [
        { title: "pages.index.title", router: "/" },
        { title: "pages.contact.title", router: "/contact-us" },
        { title: "Dashboard", router: "/dashboard" },
        // { title: "Products", router: "/product",
        //   children: [
        //   { title: "Type", router: "/type" },
        //   { title: "Industry", router: "/industry" },
        //   ]
        // },

        { title: "pages.about.title", router: "/about" },
      ],
    };
  }
  const localePath = useLocalePath()

  const theme = ref(false)

  const colorMode = useColorMode();
const changeColor = () => {
  colorMode.preference = (!theme.value ? 'dark' : 'light')
  // console.log(colorMode.value)
}
// console.log(colorMode.value)
</script>

<template>
<Html :data-theme="$colorMode.value"></Html>
  <div class="flex flex-col bg-glass px-2 md:px-16 py-0 md:py-6  ">
  <div class="navbar bg-glass ">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn lg:hidden" @click="menuOpen">
        <Icon name="heroicons-solid:menu-alt-1" class="text-2xl" />
      </div>

    </div>
    <a class="btn btn-ghost text-xl" :href="localePath('/')">
      <img class="object-cover w-full h-full" src="https://bayaderpack.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.edd1eadf.png&w=256&q=75" alt="">
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 ">
      <li v-for="link in data().navigation" :key="link.title">
        <details v-if="link.children && link.children.length" class="me-2 ">
          <summary class="text-base-content border border-base-content font-bold">{{ link.title }}</summary>
          <ul class="p-2 w-56 border border-base-content bg-orange-100  font-bold">
            <li v-for="sub in link.children" :key="sub.title"><NuxtLink :to="localePath(sub.router)" class="text-base-content">{{ $t(sub.title) }}</NuxtLink></li>
          </ul>
        </details>
        <NuxtLink v-else :to="localePath(link.router)" class="text-base-content border border-base-content me-2 font-bold">{{ $t(link.title)}}</NuxtLink>
      </li>

    </ul>
  </div>
  <div class="navbar-end">
    <label class="swap swap-rotate btn btn-ghost btn-circle">

  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" class=" text-base-content"  v-model="theme" @click="changeColor" />

  <!-- sun icon -->
  <Icon name="ph:sun" class="swap-off text-base-content text-2xl" />
  <Icon name="ph:moon" class="swap-on text-base-content text-2xl" />


  <!-- moon icon -->

</label>


<!-- sun icon -->
<NuxtLink class="btn btn-ghost btn-circle text-base-content text-2xl" :to="locale == 'ar' ? switchLocalePath('en') : switchLocalePath('ar')"><Icon :name="locale == 'ar' ? 'flag:sa-4x3' : 'flag:us-4x3'" class="" /></NuxtLink>


    <!-- <div class="flex-none"> -->
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <Icon class="text-base-content text-3xl"  name="bitcoin-icons:cart-filled" />
          <span class="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow text-base-content">
        <div class="card-body">
          <span class="font-bold text-lg">8 Items</span>
          <span class="text-info">Subtotal: $999</span>
          <div class="card-actions">
            <button class="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabindex="0" class="menu menu-md dropdown-content mt-3 z-[1] p-6 shadow bg-base-100 dark:bg-base-300 rounded-box w-72  text-base-content dark:text-slate-50">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge badge-accent">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>

</div>
<Transition name="slide-fade">
<ul class="block w-full menu bg-base-200 rounded-box mb-4" v-if="open">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
  </Transition>
    </div>
</template>

<style scoped>
.sticky-nav {
  animation: sticky-nav 300ms;
}

@keyframes sticky-nav {
  0% {
    transform: translateY(-6em);
  }

  100% {
    transform: translateY(0);
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
}
</style>


<template>
<footer class="footer p-10  bg-base-100 mt-10">
  <nav>
    <h6 class="footer-title">Services</h6>
    <a class="link link-hover">Branding</a>
    <a class="link link-hover">Design</a>
    <a class="link link-hover">Marketing</a>
    <a class="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 class="footer-title">Company</h6>
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Jobs</a>
    <a class="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 class="footer-title">Legal</h6>
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
    <a class="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer class="footer px-10 py-4 border-t bg-base-100 text-base-content border-base-300">
  <aside class="items-center grid-flow-col">
    <p>© <span class="font-black" >2023-{{ new Date().getFullYear() }} </span> - {{ $t("site.name") }} All rights reserved <span class="font-black">Bajro Lisic</span></p>
  </aside>

</footer>
</template>

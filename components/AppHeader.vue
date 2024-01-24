<template>
  <header>
    <!-- <nav>
      <TheDesktopNav class="hidden lg:block" />
      <TheMobileNav class="block lg:hidden" />
    </nav> -->
    <nav class="flex justify-center">
      <NuxtLink to="/" class="text-2xl text-center font-bold bg-gradient-to-r from-[#0099ff] to-[#41b300] bg-clip-text text-transparent mt-4 md:text-3xl">
        Political Awareness Platform</NuxtLink>
    </nav>
    <!-- <div class="w-full flex justify-center my-4">
      <UBreadcrumb class="border border-slate-200 rounded-lg p-2" :links="links" />
    </div> -->
  </header>
</template>

<!-- <script setup>
const links = [{
  label: 'Home',
  to: '/'
}, {
  label: 'Navigation'
}, {
  label: 'Breadcrumb',
}]

const route = useRoute();
console.log(route);
</script> -->
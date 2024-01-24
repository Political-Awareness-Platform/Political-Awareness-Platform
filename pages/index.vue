<template>
  <div>
    <section class="max-w-5xl mx-auto text-center bg-gray-50 p-4 my-8 rounded-2xl">
      <p class="text-lg antialiased hover:subpixel-antialiased tracking-tight">{{ $t('HomePage.PlatformGoal') }}</p>
    </section>

    <section class="max-w-6xl mx-auto">
      <h4 class="text-sky-500 text-2xl font-bold">{{ $t('HomePage.GoalTitle1') }}</h4>
      <p class="text-base antialiased hover:subpixel-antialiased mb-4 tracking-tight">{{ $t('HomePage.Goal1') }}</p>

      <h4 class="text-sky-600 text-2xl font-bold">{{ $t('HomePage.GoalTitle2') }}</h4>
      <p class="text-base antialiased hover:subpixel-antialiased mb-4 tracking-tight">{{ $t('HomePage.Goal2') }}</p>

      <h4 class="text-sky-700 text-2xl font-bold">{{ $t('HomePage.GoalTitle3') }}</h4>
      <p class="text-base antialiased hover:subpixel-antialiased mb-4 tracking-tight">{{ $t('HomePage.Goal3') }}</p>
    </section>

    <section>
      <h4 class="bg-gradient-to-r from-sky-500 to-sky-700 w-max mx-auto bg-clip-text text-transparent text-2xl font-bold my-8 text-center">{{ $t('HomePage.AvailableCountries') }}</h4>
      <div class="flex flex-row flex-wrap justify-center gap-3">
        <ULink :to="localePath('/newzealand')" active-class="text-primary"
          inactive-class="text-gray-500 border border-gray-200 px-4 py-2 w-max rounded-lg hover:bg-gray-50 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          New Zealand
        </ULink>
        <ULink :to="localePath('/turkiye')" active-class="text-primary"
          inactive-class="text-gray-500 border border-gray-200 px-4 py-2 w-max rounded-lg hover:bg-gray-50 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          Türkiye
        </ULink>
        <ULink :to="localePath('/deutschland')" active-class="text-primary"
          inactive-class="text-gray-500 border border-gray-200 px-4 py-2 w-max rounded-lg hover:bg-gray-50 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          Deutschland
        </ULink>

      </div>
    </section>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>

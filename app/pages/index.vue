<template>
  <div>
    <UCard class="max-w-5xl mx-auto my-8">
      <p class="text-lg tracking-tight">{{ $t('HomePage.PlatformGoal') }}</p>
    </UCard>

    <section class="max-w-6xl mx-auto">
      <h4 class="text-primary text-2xl font-bold">{{ $t('HomePage.GoalTitle1') }}</h4>
      <p class="text-base mb-4 tracking-tight">{{ $t('HomePage.Goal1') }}</p>

      <h4 class="text-primary text-2xl font-bold">{{ $t('HomePage.GoalTitle2') }}</h4>
      <p class="text-base mb-4 tracking-tight">{{ $t('HomePage.Goal2') }}</p>

      <h4 class="text-primary text-2xl font-bold">{{ $t('HomePage.GoalTitle3') }}</h4>
      <p class="text-base mb-4 tracking-tight">{{ $t('HomePage.Goal3') }}</p>
    </section>

    <section class="my-8">
      <h4 class="text-primary text-2xl font-bold text-center mb-4">{{ $t('HomePage.AvailableCountries') }}</h4>
      <div class="flex flex-row flex-wrap justify-center gap-3">
        <UButton :to="localePath('/newzealand')" color="neutral" variant="outline">
          New Zealand
        </UButton>
        <UButton :to="localePath('/turkiye')" color="neutral" variant="outline">
          Türkiye
        </UButton>
        <UButton :to="localePath('/deutschland')" color="neutral" variant="outline">
          Deutschland
        </UButton>
      </div>
    </section>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>

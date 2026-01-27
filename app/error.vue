<template>
  <UApp>
    <UMain>
      <UContainer>
        <UCard class="max-w-sm mx-auto text-center mt-7">
          <template #header>
            <p class="font-bold text-7xl">{{ error.statusCode }}</p>
          </template>
          <p class="text-6xl mt-7">Ooops.</p>
          <p class="text-5xl mt-7">Error occurred</p>
          <DevOnly>
            <p class="mt-7">{{ error.message }}</p>
          </DevOnly>
          <template #footer>
            <UButton color="primary" block @click="handleError">Go Home Page</UButton>
          </template>
        </UCard>
      </UContainer>
    </UMain>
  </UApp>
</template>

<script setup>
defineProps({
  error: Object,
});

const localPath = useLocalePath();

const handleError = () => clearError({ redirect: localPath("/") });
</script>
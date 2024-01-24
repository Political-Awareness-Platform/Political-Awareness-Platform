<template>
  <div class="max-w-sm mx-auto text-center mt-7 card">
    <p class="font-bold mt-7 text-7xl">{{error.statusCode}}</p>
    <p class="text-6xl mt-7">Ooops.</p>
    <p class="text-5xl mt-7">Error occurred</p>
    <DevOnly>
      <p class="mt-7">{{error.message}}</p>
    </DevOnly>
    <button class="mt-5 pressable-button" @click="handleError">Go Home Page</button>
  </div>
</template>

<script setup>
  defineProps({
    error: Object
  });

  const localPath = useLocalePath();

  const handleError = () => clearError({ redirect: localPath("/") })
</script>
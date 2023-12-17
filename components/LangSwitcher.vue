<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton color="white" :label="locale" trailing-icon="i-heroicons-language" />
  </UDropdown>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n();

const items = computed(() => {
  var languages = [];
  for (let i = 0; i < locales.value.length; i++) {
    languages.push([{
      label: locales.value[i].name, click: () => setLocale(locales.value[i].code)
    }])
  }
  return languages;
});
</script>
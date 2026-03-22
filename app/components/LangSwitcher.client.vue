<template>
  <ULocaleSelect
    :model-value="uiLocale"
    :locales="availableLocales"
    @update:model-value="handleLocaleChange"
  />
</template>

<script setup>
const { locale, setLocale } = useI18n();

const availableLocales = [
  {
    code: "en-GB",
    name: "English",
  },
  {
    code: "de-DE",
    name: "Deutsch",
  },
  {
    code: "tr-TR",
    name: "Türkçe",
  },
];

// Map i18n locale to UI locale code
const uiLocale = computed(() => {
  // en maps to en-GB for UI
  return locale.value === "en" ? "en-GB" : locale.value;
});

// Map UI locale codes to i18n locale codes
const handleLocaleChange = (code) => {
  // en-GB maps to en for i18n
  const i18nCode = code === "en-GB" ? "en" : code;
  setLocale(i18nCode);
};
</script>
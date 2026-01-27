<template>
  <ULocaleSelect
    :model-value="locale"
    :locales="availableLocales"
    @update:model-value="setLocale($event)"
  />
</template>

<script setup>
import { en, de, tr } from "@nuxt/ui/locale";

const { locale, setLocale } = useI18n();

const availableLocales = [en, de, tr];
</script>
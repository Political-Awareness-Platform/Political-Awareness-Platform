<template>
  <div>
    <div class="flex flex-col lg:flex-row gap-4 justify-around my-8">
      <div>
        <img width="100%" src="/flags/newzealand.jpg" alt="country-flag" class="rounded" />
      </div>
      <div>
        <p><b>{{ $t('CountryPage.ActivePoliticParties') }} : </b>15</p>
        <p><b>{{ $t('CountryPage.PartiesinParlament') }} : </b>6</p>
        <p><b>{{ $t('CountryPage.NumberofVoters') }} : </b>2 883 412</p>
        <p><b>{{ $t('CountryPage.ContributiontoElection') }} : </b>78.2%</p>
      </div>
    </div>

    <div class="flex flex-row flex-wrap justify-center items-stretch gap-4 my-12">
      <UButton v-for="party in parties" :key="party.partyInfo.name" :to="localePath(`/newzealand/${party.partyInfo.dbcode}`)" color="neutral" variant="outline">
        {{ party.partyInfo.name }}
      </UButton>
    </div>

    <div class="flex justify-center">
      <UButton :to="_pageLink" target="_blank" color="neutral" variant="solid" icon="i-heroicons-pencil-square">
        {{ $t('CountryPage.EditThisPage') }}
      </UButton>
    </div>
  </div>
</template>

<script setup>
import parties from "~/assets/parties/newzealand.json";

const localePath = useLocalePath();
const { name } = useRoute();
const country = name.split("__")[0];
const _pageLink = `https://github.com/Political-Awareness-Platform/Political-Awareness-Platform/blob/development/pages/${country}/index.vue`;

useHead({
  title: "NEW ZEALAND",
});
</script>
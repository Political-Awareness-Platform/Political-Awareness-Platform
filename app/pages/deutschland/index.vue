<template>
  <div>
    <div class="flex flex-col lg:flex-row gap-4 justify-around my-8">
      <div>
        <img width="100%" src="/flags/deutschland.jpg" alt="country-flag" class="rounded" />
      </div>
      <div>
        <p><b>{{ $t('CountryPage.ActivePoliticParties') }} : </b>51</p>
        <p><b>{{ $t('CountryPage.PartiesinParlament') }} : </b>14</p>
        <p><b>{{ $t('CountryPage.NumberofVoters') }} : </b>61 675 529</p>
        <p><b>{{ $t('CountryPage.ContributiontoElection') }} : </b>79.8%</p>
      </div>
    </div>

    <div class="flex flex-row flex-wrap justify-center items-stretch gap-4 my-12">
      <UButton v-for="party in parties" :key="party.partyInfo.name" :to="localePath(`/deutschland/${party.partyInfo.dbcode}`)" color="neutral" variant="outline">
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
import parties from "~/assets/parties/deutschland.json";

const localePath = useLocalePath();
const { name } = useRoute();
const country = name.split("__")[0];
const _pageLink = `https://github.com/Political-Awareness-Platform/Political-Awareness-Platform/blob/development/pages/${country}/index.vue`;

useHead({
  title: "DEUTSCHLAND",
});
</script>
<template>
  <div class="p-2 mx-auto">
    <div class="flex flex-col lg:flex-row lg:flex-col-2 space-y-4 justify-around my-8">
      <div>
        <img width="100%" src="~/assets/flags/newzealand.jpg" alt="country-flag" class="rounded">
      </div>
      <div>
        <p><b>{{ $t('CountryPage.ActivePoliticParties') }} : </b>15</p>
        <p><b>{{ $t('CountryPage.PartiesinParlament') }} : </b>5</p>
        <p><b>{{ $t('CountryPage.NumberofVoters') }} : </b>3 570 000</p>
        <p><b>{{ $t('CountryPage.ContributiontoElection') }} : </b>79.8%</p>
      </div>
    </div>

    <div class="flex flex-row flex-wrap justify-center items-stretch gap-6 my-12 lg:gap-8">
      <div v-for="party in parties" :key="party.partyInfo.name">
        <NuxtLink :to="localePath(`/newzealand/${party.partyInfo.dbcode}`)"
          class="px-3 py-2 border rounded-lg shadow hover:bg-gray-50 lg:px-6 lg:py-3">{{ party.partyInfo.name }}
        </NuxtLink>
      </div>
    </div>

    <div class="flex justify-center">
      <UButton as="NuxtLink" :to="pageLink" target="_blank" color="gray" variant="solid" icon="i-heroicons-pencil-square"
        >{{ $t('CountryPage.EditThisPage') }}</UButton>
    </div>

  </div>
</template>

<script setup>
import data from '~/assets/parties/newzealand.json';
const parties = data;

const { name } = useRoute();
const country = name.split('__')[0];
const pageLink = `https://github.com/Political-Awareness-Platform/Political-Awareness-Platform/blob/development/pages/${country}/index.vue`;
</script>
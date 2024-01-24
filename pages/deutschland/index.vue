<template>
  <div class="p-2 mx-auto">
    <div class="flex flex-col lg:flex-row lg:flex-col-2 space-y-4 justify-around my-8">
      <div>
        <img width="100%" src="~/assets/flags/deutschland.jpg" alt="country-flag" class="rounded">
      </div>
      <div>
        <p><b>{{ $t('CountryPage.ActivePoliticParties') }} : </b>51</p>
        <p><b>{{ $t('CountryPage.PartiesinParlament') }} : </b>14</p>
        <p><b>{{ $t('CountryPage.NumberofVoters') }} : </b>61 675 529</p>
        <p><b>{{ $t('CountryPage.ContributiontoElection') }} : </b>79.8%</p>
      </div>
    </div>

    <div class="flex flex-row flex-wrap justify-center items-stretch gap-6 lg:gap-8 my-12">
      <div v-for="party in parties" :key="party.partyInfo.name">
        <NuxtLink :to="localePath(`/deutschland/${party.partyInfo.dbcode}`)"
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
import data from '~/assets/parties/deutschland.json';
const parties = data;

const { name } = useRoute();
const country = name.split('__')[0];
const pageLink = `https://github.com/Political-Awareness-Platform/Political-Awareness-Platform/blob/development/pages/${country}/index.vue`;

useHead({
  title: "DEUTSCHLAND",
})

</script>
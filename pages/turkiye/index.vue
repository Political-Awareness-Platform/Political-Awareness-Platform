<template>
  <div class="p-2 mx-auto">
    <div class="flex flex-col lg:flex-row lg:flex-col-2 space-y-4 justify-around my-8">
      <div>
        <img width="100%" src="~/assets/flags/turkiye.jpg" alt="country-flag" class="rounded">
      </div>
      <div>
        <p><b>{{ $t('CountryPage.ActivePoliticParties') }} : </b>120</p>
        <p><b>{{ $t('CountryPage.PartiesinParlament') }} : </b>11</p>
        <p><b>{{ $t('CountryPage.NumberofVoters') }} : </b>57 058 636</p>
        <p><b>{{ $t('CountryPage.ContributiontoElection') }} : </b>84.67%</p>
      </div>
    </div>

    <div class="flex flex-row flex-wrap justify-center items-stretch gap-6 lg:gap-10 my-12">
      <div v-for="party in parties" :key="party.partyInfo.name">
        <NuxtLink :to="localePath(`/turkiye/${party.partyInfo.dbcode}`)" class="px-3 py-2 lg:px-6 lg:py-3 border rounded-lg shadow">{{
          party.partyInfo.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from '~/assets/parties/turkiye.json';
const parties = data;
</script>
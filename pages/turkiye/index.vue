<template>
  <div class="p-2 mx-auto">
    <div class="flex flex-col justify-around my-8 space-y-4 lg:flex-row lg:flex-col-2">
      <div>
        <img width="100%" src="~/assets/flags/turkiye.jpg" alt="country-flag" class="rounded">
      </div>
      <div>
        <p><b>{{ $t('CountryPage.ActivePoliticParties') }} : </b> <a target="_blank"
            href="https://www.yargitaycb.gov.tr/icerik/1093/siyasi-parti-genel-bilgileri"
            class="underline text-sky-800">139</a></p>
        <p><b>{{ $t('CountryPage.PartiesinParlament') }} : </b>15</p>
        <p><b>{{ $t('CountryPage.NumberofVoters') }} : </b>64 191 285</p>
        <p><b>{{ $t('CountryPage.ContributiontoElection') }} : </b> <a target="_blank"
            href="https://www.ysk.gov.tr/doc/dosyalar/docs/14Mayis2023CBSecimIstatistik.pdf"
            class="underline text-sky-800">87.05%</a>
        </p>
      </div>
    </div>

    <div class="flex flex-row flex-wrap items-stretch justify-center gap-6 my-12 lg:gap-8">
      <div v-for="party in parties" :key="party.partyInfo.name">
        <NuxtLink :to="localePath(`/turkiye/${party.partyInfo.dbcode}`)"
          class="px-3 py-2 border rounded-lg shadow hover:bg-gray-50 lg:px-6 lg:py-3">{{ party.partyInfo.name }}
        </NuxtLink>
      </div>
    </div>
    <div class="flex justify-center">
      <UButton as="NuxtLink" :to="pageLink" target="_blank" color="gray" variant="solid" icon="i-heroicons-pencil-square">
        {{ $t('CountryPage.EditThisPage') }}</UButton>
    </div>
  </div>
</template>

<script setup>
import data from '~/assets/parties/turkiye.json';

const parties = data;
const { name } = useRoute();
const country = name.split('__')[0];
const pageLink = `https://github.com/Political-Awareness-Platform/Political-Awareness-Platform/blob/development/pages/${country}/index.vue`;

useHead({
  title: "TÜRKİYE"
})
</script>
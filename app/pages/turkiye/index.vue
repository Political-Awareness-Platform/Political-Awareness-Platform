<template>
  <div>
    <div class="flex flex-col justify-around my-8 gap-4 lg:flex-row">
      <div>
        <img width="100%" src="/flags/turkiye.jpg" alt="country-flag" class="rounded" />
      </div>
      <div>
        <p><b>{{ $t('CountryPage.ActivePoliticParties') }} : </b>
          <ULink to="https://www.yargitaycb.gov.tr/icerik/1093/siyasi-parti-genel-bilgileri" target="_blank" class="text-primary underline">156</ULink>
        </p>
        <p><b>{{ $t('CountryPage.PartiesinParlament') }} : </b>15</p>
        <p><b>{{ $t('CountryPage.NumberofVoters') }} : </b>64 191 285</p>
        <p><b>{{ $t('CountryPage.ContributiontoElection') }} : </b>
          <ULink to="https://www.ysk.gov.tr/doc/dosyalar/docs/14Mayis2023CBSecimIstatistik.pdf" target="_blank" class="text-primary underline">87.05%</ULink>
        </p>
      </div>
    </div>

    <div class="flex flex-row flex-wrap items-stretch justify-center gap-4 my-12">
      <UButton v-for="party in parties" :key="party.partyInfo.name" :to="localePath(`/turkiye/${party.partyInfo.dbcode}`)" color="neutral" variant="outline">
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
import parties from "~/assets/parties/turkiye.json";

const localePath = useLocalePath();
const { name } = useRoute();
const country = name.split("__")[0];
const _pageLink = `https://github.com/Political-Awareness-Platform/Political-Awareness-Platform/blob/development/app/pages/${country}/index.vue`;

useHead({
  title: "TÜRKİYE",
});
</script>
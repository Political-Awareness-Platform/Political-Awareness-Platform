<template>
  <div class="p-2 mx-auto">

    <div class="flex flex-col lg:flex-row lg:flex-col-2 space-y-4 justify-around my-8">
      <div>
        <img width="100%" src="~/assets/flags/newzealand.jpg" alt="country-flag" class="rounded">
      </div>
      <div>
        <p><b>{{ $t('CountryPage.ActivePoliticParties') }} : </b>15</p>
        <p><b>{{ $t('CountryPage.PartiesinParlament') }} : </b>6</p>
        <p><b>{{ $t('CountryPage.NumberofVoters') }} : </b>2 883 412</p>
        <p><b>{{ $t('CountryPage.ContributiontoElection') }} : </b>78.2%</p>
      </div>
    </div>

    <div class="flex flex-row flex-wrap justify-center items-stretch gap-6 my-12 lg:gap-8">
      <div v-for="party in parties" :key="party.partyInfo.name">
        <NuxtLink :to="localePath(`/newzealand/${party.partyInfo.dbcode}`)"
          class="px-3 py-2 border rounded-lg shadow hover:bg-gray-50 lg:px-6 lg:py-3">{{ party.partyInfo.name }}
        </NuxtLink>
      </div>
    </div>

    <div class="flex flex-col gap-4 justify-around my-8 lg:flex-row lg:flex-col-2">
      <!-- Positive Imaginary Party Comment -->
      <UCard :ui="{ header: { padding: 'px-2 py-3 sm:px-2' }, body: { padding: 'p-3' } }" class="w-full">
        <template #header>
          <h2 class="text-md text-sky-500 font-extrabold text-center hover:text-sky-600">What should be the foremost
            priority of a
            political party?</h2>
        </template>

        <UTextarea v-model="positiveComment" label="Positive Comment"
          placeholder="Write a topic that should be prioritized by a political party" />

        <div class="flex justify-end">
          <UButton icon="i-heroicons-paper-airplane" label="Send" :trailing="false" size="md" color="sky"
            variant="solid" class="mt-2" @click="sendPositiveComment" />
        </div>

      </UCard>


      <!-- Negative Imaginary Party Comment -->
      <UCard :ui="{ header: { padding: 'px-2 py-3 sm:px-2' }, body: { padding: 'p-3' } }" class="w-full">
        <template #header>
          <h2 class="text-md text-orange-500 font-extrabold text-center hover:text-orange-600">What is the most critical
            topic a political
            party
            should refrain from addressing?</h2>
        </template>

        <UTextarea v-model="negativeComment" label="Negative Comment"
          placeholder="Write a topic that should be avoided by a political party" />

        <div class="flex justify-end">
          <UButton icon="i-heroicons-paper-airplane" label="Send" :trailing="false" size="md" color="orange"
            variant="solid" class="mt-2" @click="sendNegativeComment" />
        </div>

      </UCard>

    </div>

    <div class="flex justify-center">
      <UButton as="NuxtLink" :to="pageLink" target="_blank" color="gray" variant="solid"
        icon="i-heroicons-pencil-square">
        {{ $t('CountryPage.EditThisPage') }}</UButton>
    </div>

  </div>
</template>

<script setup>
import data from '~/assets/parties/newzealand.json';

const parties = data;
const { name } = useRoute();
const country = name.split('__')[0];
const pageLink = `https://github.com/Political-Awareness-Platform/Political-Awareness-Platform/blob/development/pages/${country}/index.vue`;

const positiveComment = ref('');
const negativeComment = ref('');

const sendPositiveComment = () => {
  console.log(positiveComment.value);
  positiveComment.value = '';
}

const sendNegativeComment = () => {
  console.log(negativeComment.value);
  negativeComment.value = '';
}

useHead({
  title: "NEW ZEALAND",
})
</script>
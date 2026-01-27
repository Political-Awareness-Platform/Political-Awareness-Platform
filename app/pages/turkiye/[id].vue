<template>
  <div v-if="party">
    <div class="flex flex-col gap-6 lg:flex-row">
      <div class="w-full lg:w-1/4">
        <div>
          <img class="w-full rounded" :src="`/logos/turkiye/${party.partyInfo.dbcode}.jpg`" alt="party-logo" />
        </div>
        <div class="flex flex-row flex-wrap justify-around mt-8 gap-2">
          <UButton v-if="party.partyInfo.internet_address" :to="party.partyInfo.internet_address" target="_blank" color="neutral" variant="ghost" icon="i-heroicons-globe-alt" />
          <UButton v-if="party.partyInfo.facebook" :to="party.partyInfo.facebook" target="_blank" color="neutral" variant="ghost" icon="i-simple-icons-facebook" />
          <UButton v-if="party.partyInfo.twitter" :to="party.partyInfo.twitter" target="_blank" color="neutral" variant="ghost" icon="i-simple-icons-x" />
        </div>
      </div>

      <div class="w-full lg:w-3/4">
        <div class="flex flex-row flex-wrap justify-center gap-3">
          <UCard v-if="party.partyInfo.name" class="text-center">
            <template #header><b>{{ $t('PartyPage.PartyName') }}</b></template>
            {{ party.partyInfo.name }}
          </UCard>
          <UCard v-if="party.partyInfo.shortname" class="text-center">
            <template #header><b>{{ $t('PartyPage.ShortName') }}</b></template>
            {{ party.partyInfo.shortname }}
          </UCard>
          <UCard v-if="party.partyInfo.established" class="text-center">
            <template #header><b>{{ $t('PartyPage.Established') }}</b></template>
            {{ party.partyInfo.established }}
          </UCard>
          <UCard v-if="party.partyInfo.founder" class="text-center">
            <template #header><b>{{ $t('PartyPage.Founder') }}</b></template>
            {{ party.partyInfo.founder }}
          </UCard>
          <UCard v-if="party.partyInfo.president" class="text-center">
            <template #header><b>{{ $t('PartyPage.President') }}</b></template>
            {{ party.partyInfo.president }}
          </UCard>
          <UCard v-if="party.partyInfo.public_relation" class="text-center">
            <template #header><b>{{ $t('PartyPage.PublicRelation') }}</b></template>
            {{ party.partyInfo.public_relation }}
          </UCard>
          <UCard v-if="party.partyInfo.current_member" class="text-center">
            <template #header><b>{{ $t('PartyPage.CurrentMember') }}</b></template>
            {{ party.partyInfo.current_member }}
          </UCard>
          <UCard v-if="party.partyInfo.phone" class="text-center">
            <template #header><b>{{ $t('PartyPage.PhoneNumber') }}</b></template>
            {{ party.partyInfo.phone }}
          </UCard>
          <UCard v-if="party.partyInfo.address" class="text-center">
            <template #header><b>{{ $t('PartyPage.Address') }}</b></template>
            {{ party.partyInfo.address }}
          </UCard>
          <UCard v-if="party.partyInfo.email" class="text-center">
            <template #header><b>{{ $t('PartyPage.partyEmailAddress') }}</b></template>
            {{ party.partyInfo.email }}
          </UCard>
        </div>
      </div>
    </div>

    <h2 class="text-2xl text-primary font-extrabold text-center mt-12 mb-4">{{ $t('PartyPage.PartyPurposesTitle') }}</h2>
    <div v-for="purpose in party.partyPurposes" :key="purpose">
      <p class="text-base mb-4 tracking-tight">{{ purpose }}</p>
    </div>

    <div class="flex justify-center">
      <UButton to="https://github.com/Political-Awareness-Platform/Political-Awareness-Platform/blob/development/assets/parties/turkiye.json" target="_blank" color="neutral" variant="solid" icon="i-heroicons-pencil-square">
        {{ $t('PartyPage.EditThisPage') }}
      </UButton>
    </div>
  </div>

  <div v-else class="p-4 text-center">
    <UCard>
      <h2 class="text-xl font-bold mb-4">{{ $t('PartyPage.PartyNotFound') || 'Party not found' }}</h2>
      <p class="mb-4">{{ $t('PartyPage.PartyNotFoundMessage') || 'The requested party could not be found.' }}</p>
      <UButton to="/turkiye" color="primary">{{ $t('PartyPage.BackToCountry') || 'Back to Türkiye' }}</UButton>
    </UCard>
  </div>
</template>

<script setup>
import parties from "~/assets/parties/turkiye.json";

const { id } = useRoute().params;

const party = computed(() => {
  if (!parties) return null;
  return parties.find((party) => party.partyInfo.dbcode === id);
});

const partyName = computed(() => {
  return party.value?.partyInfo.name || "Party Details";
});

useHead({
  title: partyName,
});
</script>
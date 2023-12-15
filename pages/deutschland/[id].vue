<template>
  <div class="p-4">

    <div class="flex flex-col gap-6 lg:flex-row">
      <div class="w-full lg:flex-auto lg:w-1/4">
        <div>
          <img class="w-full rounded" :src="`/logos/deutschland/${party.partyInfo.dbcode}.jpg`" alt="party-logo" />
        </div>
        <!-- Social Media Links -->
        <div class="flex flex-row flex-wrap justify-around mt-8">
          <a v-show="party.partyInfo.internet_address" :href="party.partyInfo.internet_address" target="_blank"><img
              src="/logos/world-wide-web.svg" alt="website-icon" class="w-8 h-8" /></a>
          <a v-show="party.partyInfo.facebook" :href="party.partyInfo.facebook" target="_blank"><img
              src="/logos/facebookicon.svg" alt="facebook-icon" class="w-8 h-8" /></a>
          <a v-show="party.partyInfo.twitter" :href="party.partyInfo.twitter" target="_blank"><img
              src="/logos/twittericon.svg" alt="twitter-icon" class="w-8 h-8" /></a>
        </div>
      </div>

      <div class="wfull lg:flex-auto lg:w-3/4">
        <div class="flex flex-row flex-wrap justify-center justify-items-center gap-3 md:gap-6">
          <p class="p-2 border rounded-xl text-base font-Quicksand max-h-fit" v-show="party.partyInfo.name"><b>{{
            $t('PartyPage.PartyName') }} </b><br /> {{
    party.partyInfo.name }}</p>
          <p class="p-2 border rounded-xl text-base font-Quicksand" v-show="party.partyInfo.shortname"><b>{{
            $t('PartyPage.ShortName') }} </b><br /> {{ party.partyInfo.shortname }}</p>
          <p class="p-2 border rounded-xl text-base font-Quicksand" v-show="party.partyInfo.established"><b>{{
            $t('PartyPage.Established') }} </b><br /> {{ party.partyInfo.established }}</p>
          <p class="p-2 border rounded-xl text-base font-Quicksand" v-show="party.partyInfo.founder"><b>{{
            $t('PartyPage.Founder') }} </b><br /> {{ party.partyInfo.founder }}</p>
          <p class="p-2 border rounded-xl text-base font-Quicksand" v-show="party.partyInfo.president"><b>{{
            $t('PartyPage.President') }} </b><br /> {{ party.partyInfo.president }}</p>
          <p class="p-2 border rounded-xl text-base font-Quicksand" v-show="party.partyInfo.public_relation"><b>{{
            $t('PartyPage.PublicRelation') }} </b><br /> {{ party.partyInfo.public_relation }}</p>
          <p class="p-2 border rounded-xl text-base  font-Quicksand" v-show="party.partyInfo.current_member"><b>{{
            $t('PartyPage.CurrentMember') }} </b><br /> {{ party.partyInfo.current_member }}</p>
          <p class="p-2 border rounded-xl text-base font-Quicksand" v-show="party.partyInfo.phone"><b>{{
            $t('PartyPage.PhoneNumber') }} </b><br /> {{ party.partyInfo.phone }}</p>
          <p class="p-2 border rounded-xl text-base font-Quicksand" v-show="party.partyInfo.address"><b>{{
            $t('PartyPage.Address') }} </b><br /> {{ party.partyInfo.address }}</p>
          <p class="p-2 border rounded-xl text-base font-Quicksand" v-show="party.partyInfo.email"><b>{{
            $t('PartyPage.partyEmailAddress') }} </b><br /> {{ party.partyInfo.email }}</p>
        </div>
      </div>


    </div>
    <h2 class="text-2xl text-sky-800 font-extrabold text-center mt-12 mb-4">{{ $t('PartyPage.PartyPurposesTitle') }}</h2>
    <div v-for="purpose in party.partyPurposes">
      <p class="text-base antialiased hover:subpixel-antialiased mb-4 tracking-tight">
        <UIcon name="i-heroicons-information-circle" /> {{ purpose }}
      </p>
    </div>

  </div>
</template>

<script setup>
import data from '~/assets/parties/deutschland.json';
const { id } = useRoute().params;
const party = data.find(party => party.partyInfo.dbcode === id);
</script>
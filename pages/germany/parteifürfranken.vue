<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/franken.png" alt="franken-logo" />
      </div>
      <PartyDetails :partyInfo="partyInfo" :partyDetails="partyDetails" />
    </div>
    <PartyPurpose :partyPurposeList="partyPurposes" purposeText="Zweck der Partei" />
    <Authentication v-show="!this.$store.state.user.userUID" />
    <div class="party-comment-section" v-if="this.$store.state.user.userUID">
     <div class="positive-section">
        <PartyPagePositiveCommentSection :partyDetails="partyDetails" />
      </div>
      <div class="negative-section">
        <PartyPageNegativeCommentSection :partyDetails="partyDetails" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partyDetails: { country: 'germany', dbcode: 'parteifürfranken' },
      partyInfo: {
        name: 'Partei für Franken',
        shortname: '',
        established: '31/10/2009',
        founder: '',
        address: 'Waldstrasse 55 91154 Roth',
        internet_address: 'https://www.partei-fuer-franken.de/',
        public_relation: '',
        current_member: '',
        president: '',
        facebook: 'https://www.facebook.com/DieFranken/',
        twitter: 'https://twitter.com/die_franken',
        phone: '09171 / 8284-10',
      },
      partyPurposes: [
        {
          description:
            '',
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
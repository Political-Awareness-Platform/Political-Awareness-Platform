<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/rep.png" alt="rep-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'dierepublikaner' },
      partyInfo: {
        name: 'Die Republikaner',
        shortname: 'REP',
        established: '26/11/1983',
        founder: 'Franz Schönhuber and Franz Handlos',
        address: 'Düsseldorf office Box 140407 40074 Düsseldorf',
        internet_address: 'https://www.die-republikaner.net/',
        public_relation: '',
        current_member: '4,033',
        president: 'Tilo Schöne',
        facebook: 'https://www.facebook.com/Republikaner/',
        twitter: 'https://twitter.com/republikaner',
        phone: '',
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
<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/afdlogo.png" alt="afdlogo-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'alternativefürdeutschland' },
      partyInfo: {
        name: 'Alternative für Deutschland',
        shortname: 'AfD',
        established: '6/02/2013',
        founder: ' Alexander Gauland , Bernd Lucke , Konrad Adam , Gerd Robanus',
        address: 'Schillstraße 9 10785 Berlin',
        internet_address: 'https://www.afd.de/',
        public_relation: '',
        current_member: '',
        president: 'Jörg Meuthen',
        facebook: 'https://www.facebook.com/alternativefuerde/',
        twitter: 'https://twitter.com/AfD',
        phone: '030 - 2205696-0',
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
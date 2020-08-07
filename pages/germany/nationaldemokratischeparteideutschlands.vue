<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/nddp.png" alt="nddp-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'nationaldemokratischeparteideutschlands' },
      partyInfo: {
        name: 'National Demokratische Partei Deutschlands',
        shortname: 'NDPD',
        established: '25/05/1948',
        founder: 'Lothar Bolz',
        address: 'P.O. Box 84 01 57 12531 Berlin',
        internet_address: 'https://npd.de/',
        public_relation: 'ALEXANDER NEIDLEIN',
        current_member: '110,000',
        president: 'Frank Franz',
        facebook: 'https://www.facebook.com/npd.de/',
        twitter: 'https://twitter.com/npdde',
        phone: '(030) 650 11 0',
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
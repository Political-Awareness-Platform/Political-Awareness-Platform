<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/odp.png" alt="odp-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'okologischdemokratischepartei' },
      partyInfo: {
        name: 'Okologisch Demokratische Partei',
        shortname: 'ÖDP',
        established: '24/01/1982',
        founder: '',
        address: 'Pommergasse 1 97070 Wuerzburg',
        internet_address: 'https://www.oedp.de/startseite/',
        public_relation: '',
        current_member: '8.002 ',
        president: 'Christoph Raabs',
        facebook: 'https://www.facebook.com/oedp.de/',
        twitter: 'https://twitter.com/oedp_de',
        phone: '0931 - 40486 0',
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
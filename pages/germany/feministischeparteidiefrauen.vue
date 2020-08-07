<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/frauen.jpg" alt="frauen-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'feministischeparteidiefrauen' },
      partyInfo: {
        name: 'Feministische Partei die Frauen',
        shortname: 'Die Frauen',
        established: '10/06/1995',
        founder: '',
        address: '',
        internet_address: 'http://www.feministischepartei.de/startseite.html',
        public_relation: '',
        current_member: '400',
        president: 'Sabine Scherbaum',
        facebook: 'https://www.facebook.com/feministischeparteidiefrauen/',
        twitter: 'https://twitter.com/feministischep?lang=en',
        phone: '069/61009622',
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
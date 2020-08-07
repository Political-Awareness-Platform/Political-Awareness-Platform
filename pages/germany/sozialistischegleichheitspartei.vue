<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/sgp.jpg" alt="sgp-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'sozialistischegleichheitspartei' },
      partyInfo: {
        name: 'Sozialistische Gleichheitspartei',
        shortname: 'SGP',
        established: '1971',
        founder: '',
        address: 'Neuenburger Strasse 13 10969 Berlin',
        internet_address: 'https://www.gleichheit.de/',
        public_relation: '',
        current_member: '273',
        president: 'Ulrich Rippert',
        facebook: 'https://www.facebook.com/Gleichheit',
        twitter: 'https://twitter.com/gleichheit',
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
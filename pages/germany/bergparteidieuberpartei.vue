<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/berglogo.jpg" alt="berg-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'bergparteidieuberpartei' },
      partyInfo: {
        name: 'Bergpartei, die überpartei',
        shortname: '',
        established: '01/04/2011',
        founder: 'Jan Theiler',
        address: '',
        internet_address: 'http://www.bergpartei.de/',
        public_relation: '',
        current_member: '',
        president: 'Rico Tscharnke ',
        facebook: 'https://www.facebook.com/Bergpartei/',
        twitter: 'https://twitter.com/bergpartei',
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
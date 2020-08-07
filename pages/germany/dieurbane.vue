<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/dieurbane.png" alt="dieurbane-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'dieurbane' },
      partyInfo: {
        name: 'Die Urbane',
        shortname: 'Die Urbane',
        established: '01/05/2017',
        founder: '',
        address: 'Ringbahnstrasse 42 12099 Berlin',
        internet_address: 'https://www.die-urbane.de/',
        public_relation: '',
        current_member: '261',
        president: 'Raphael Hillebrand',
        facebook: 'https://www.facebook.com/DieUrbane/',
        twitter: 'https://twitter.com/dieurbane',
        phone: '+49 (0) 30 629 380 71',
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
<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/diepartei.png" alt="diepartei-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'diepartei' },
      partyInfo: {
        name: 'Die Partei',
        shortname: 'Die Partei',
        established: '02/08/2004',
        founder: 'Martin Sonneborn',
        address: '',
        internet_address: 'https://www.die-partei.de/',
        public_relation: 'Thomas Hintner',
        current_member: '43,000',
        president: 'Martin Sonneborn',
        facebook: 'https://www.facebook.com/DiePARTEI',
        twitter: 'https://twitter.com/DiePARTEI',
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
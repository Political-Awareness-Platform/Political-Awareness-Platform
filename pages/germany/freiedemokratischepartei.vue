<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/fdp.png" alt="fdp-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'freiedemokratischepartei' },
      partyInfo: {
        name: 'Freie Demokratische Partei',
        shortname: 'FDP',
        established: '12/12/1948',
        founder: 'Franz Blücher',
        address: 'Reinhardtstraße 14 10117 Berlin, Germany',
        internet_address: 'https://www.fdp.de/',
        public_relation: 'Linda Teuteberg',
        current_member: '65,500',
        president: 'Christian Lindner',
        facebook: 'https://www.facebook.com/FDP',
        twitter: 'https://twitter.com/fdp',
        phone: '030 - 28 49 58 0',
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
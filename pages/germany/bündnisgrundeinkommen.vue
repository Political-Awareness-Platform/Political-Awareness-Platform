<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/bündnisgrundeinkommen.png" alt="bündnisgrundeinkommen-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'bündnisgrundeinkommen' },
      partyInfo: {
        name: 'Bündnis Grundeinkommen',
        shortname: 'BGE',
        established: '25/09/2016',
        founder: '',
        address: 'Driesener Straße 10 10439 Berlin',
        internet_address: 'https://www.buendnis-grundeinkommen.de/',
        public_relation: '',
        current_member: '300',
        president: 'Carl-Richard Klütsch',
        facebook: 'https://www.facebook.com/buendnis.grundeinkommen/',
        twitter: 'https://twitter.com/bgepartei/',
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
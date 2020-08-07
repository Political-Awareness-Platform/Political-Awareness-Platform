<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/bündnisc.png" alt="bündnisc-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'christenfürdeutschland' },
      partyInfo: {
        name: 'Christen für Deutschland',
        shortname: 'Bündnis C',
        established: '28/05/2015',
        founder: '',
        address: 'Winterstrasse 29 76137 Karlsruhe',
        internet_address: 'https://buendnis-c.de/',
        public_relation: '',
        current_member: '1200',
        president: 'Karin Heepen',
        facebook: 'https://www.facebook.com/buendnisC.de/',
        twitter: 'https://twitter.com/buendnisc?lang=en',
        phone: '0721-49 55 96',
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
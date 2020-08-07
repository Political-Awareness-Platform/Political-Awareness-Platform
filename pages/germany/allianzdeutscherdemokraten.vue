<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/addemocrats.png" alt="addemocrats-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'allianzdeutscherdemokraten' },
      partyInfo: {
        name: 'Allianz Deutscher Demokraten',
        shortname: 'AD-Demokraten',
        established: '2016',
        founder: 'Remzi Aru',
        address: 'Zebrafinkweg 8 - 13129 Berlin',
        internet_address: 'https://ad-demokraten.de/',
        public_relation: 'Uğur Karadağ',
        current_member: '2500',
        president: 'Ramazan Akbaş',
        facebook: 'https://www.facebook.com/ADDemokraten/',
        twitter: '',
        phone: '+49 30 12088267',
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
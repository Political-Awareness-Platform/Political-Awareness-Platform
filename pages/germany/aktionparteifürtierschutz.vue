<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/tierschutz.jpg" alt="Tierschutz-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'aktionparteifürtierschutz' },
      partyInfo: {
        name: 'Aktion Partei für Tierschutz',
        shortname: 'Tierschutzliste',
        established: '28/02/2017',
        founder: '',
        address: '',
        internet_address: 'https://tierschutz-hier.de/',
        public_relation: '',
        current_member: '',
        president: '',
        facebook: 'https://www.facebook.com/tierschutz.hier/',
        twitter: 'https://twitter.com/tierschutzh',
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
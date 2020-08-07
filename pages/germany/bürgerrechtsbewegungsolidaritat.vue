<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/bürgerrechtsbewegung.jpg" alt="bürgerrechtsbewegung-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'bürgerrechtsbewegungsolidaritat' },
      partyInfo: {
        name: 'Bürgerrechtsbewegung Solidarität',
        shortname: 'BüSo',
        established: '1992',
        founder: 'Helga Zepp-LaRouche',
        address: 'BüSo federal office PO Box 424152 12083 Berlin',
        internet_address: 'https://www.bueso.de/',
        public_relation: '',
        current_member: '',
        president: 'Helga Zepp-LaRouche',
        facebook: 'https://www.facebook.com/BueSoDeutschland',
        twitter: 'https://twitter.com/Bue_So?lang=de',
        phone: '06131-237384',
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
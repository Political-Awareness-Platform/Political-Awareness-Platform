<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/tierschutzallianz.jpg" alt="Tierschutzallianz-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'allianzfürmenschenrechte' },
      partyInfo: {
        name: 'Allianz für Menschenrechte, Tier- und Naturschutz',
        shortname: 'Tierschutzallianz',
        established: '2013',
        founder: '',
        address: '',
        internet_address: 'https://www.tierschutzallianz.de/',
        public_relation: '',
        current_member: '120',
        president: 'Josef Fassl',
        facebook: 'https://www.facebook.com/Tierschutzallianz',
        twitter: '',
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
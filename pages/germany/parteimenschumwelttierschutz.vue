<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/tierschutzpartei.png" alt="Tierschutzpartei-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'parteimenschumwelttierschutz' },
      partyInfo: {
        name: 'Partei Mensch Umwelt Tierschutz',
        shortname: 'Tierschutzpartei',
        established: '13/02/1993',
        founder: '',
        address: '',
        internet_address: 'https://www.tierschutzpartei.de/',
        public_relation: '',
        current_member: '2000',
        president: '	Matthias Ebner & Robert Gabel',
        facebook: 'https://www.facebook.com/Tierschutzpartei/',
        twitter: 'https://twitter.com/tierschutzparte',
        phone: '037468/5267',
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
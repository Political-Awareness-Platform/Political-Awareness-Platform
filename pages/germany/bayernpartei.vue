<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/bayern.png" alt="bayern-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'bayernpartei' },
      partyInfo: {
        name: 'Bavaria Party e. V.',
        shortname: 'BP',
        established: '28/10/1946',
        founder: '',
        address: 'Baumkirchner Str. 20 81673 Munich',
        internet_address: 'https://bayernpartei.de/',
        public_relation: 'Harold Amann',
        current_member: '',
        president: 'Florian Weber',
        facebook: '',
        twitter: '',
        phone: '4524427-00',
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
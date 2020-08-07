<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/kdp.png" alt="kdp-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'kommunistischeparteideutschlands' },
      partyInfo: {
        name: 'Kommunistische Partei Deutschlands',
        shortname: 'KDP',
        established: '21/04/1946',
        founder: 'Rosa Luxemburg , Karl Liebknecht',
        address: '',
        internet_address: 'http://www.k-p-d-online.de/',
        public_relation: '',
        current_member: '360,000',
        president: '',
        facebook: 'https://www.facebook.com/kpd.1918',
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
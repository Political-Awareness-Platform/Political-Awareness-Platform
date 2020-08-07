<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/mut.jpg" alt="mut-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'mut' },
      partyInfo: {
        name: 'MUT',
        shortname: 'MUT',
        established: '06/2017',
        founder: '',
        address: 'Dreimühlenstrasse 32 80469 Munich',
        internet_address: 'https://www.mut-bayern.de/',
        public_relation: '',
        current_member: '400',
        president: 'Claudia Stamm Stephan Lessenich',
        facebook: 'https://www.facebook.com/mutparteibayern/',
        twitter: 'https://twitter.com/mut_bayern',
        phone: '089-215441911',
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
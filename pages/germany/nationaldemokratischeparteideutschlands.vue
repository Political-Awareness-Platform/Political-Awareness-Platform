<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <!-- <img src="~assets/logos/germany/.png" alt="-logo" /> -->
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
      partyDetails: { country: 'germany', dbcode: 'nationaldemokratischeparteideutschlands' },
      partyInfo: {
        name: 'National Demokratische Partei Deutschlands',
        shortname: '',
        established: '',
        founder: '',
        address: '',
        internet_address: '',
        public_relation: '',
        current_member: '',
        president: '',
        facebook: '',
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
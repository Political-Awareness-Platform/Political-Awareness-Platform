<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/derIIIweg.jpeg" alt="derIIIweg-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'derIIIweg' },
      partyInfo: {
        name: 'Der III. Weg',
        shortname: 'III. Weg',
        established: '23/09/2013',
        founder: 'Klaus Armstroff',
        address: 'PO Box 11 22 67085 Bad Dürkheim',
        internet_address: 'https://der-dritte-weg.info/',
        public_relation: '',
        current_member: '580',
        president: 'Klaus Armstroff',
        facebook: '',
        twitter: 'https://twitter.com/der_dritte_weg',
        phone: '06329-992 265',
      },
      partyPurposes: [
        {
          description:
            '',
        },
        {
          description:
            '',
        },
        {
          description:
            '',
        },
        {
          description:
            '',
        },
        {
          description:
            '',
        },
        {
          description:
            '',
        },
        {
          description:
            '',
        },
        {
          description:
            '',
        },
        {
          description:
            '',
        },
        {
          description:
            '',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
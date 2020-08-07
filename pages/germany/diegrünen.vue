<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/grünen.png" alt="grünen-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'diegrünen' },
      partyInfo: {
        name: 'Bündnis 90/Die Grünen',
        shortname: 'Grüne',
        established: '13/01/1991',
        founder: '',
        address: 'Platz vor dem Neuen Tor 1 10115 Berlin',
        internet_address: 'https://www.gruene.de/',
        public_relation: '',
        current_member: '101,561',
        president: 'Annalena Baerbock - Robert Habeck',
        facebook: 'https://www.facebook.com/B90DieGruenen/',
        twitter: 'https://twitter.com/die_gruenen',
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
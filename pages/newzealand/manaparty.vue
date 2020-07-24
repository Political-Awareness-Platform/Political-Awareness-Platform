<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/newzealand/mana.jpg" alt="mana-logo" />
      </div>
      <PartyDetails :partyInfo="partyInfo" :partyDetails="partyDetails" />
    </div>
    <PartyPurpose :partyPurposeList="partyPurposes" purposeText="Party Purposes" />
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
      partyDetails: { country: 'newzealand', dbcode: 'manaparty' },
      partyInfo: {
        name: 'Mana Party',
        shortname: 'MANA',
        established: '24 June 2011',
        founder: '',
        address: 'MANA Movement PO Box 546 Kaitaia 0441',
        internet_address: '',
        public_relation: 'Hilda Halkyard-Harawira',
        current_member: '',
        president: 'Hone Harawira',
        facebook: '',
        twitter: '',
        phone: '021 2900216',
      },
      partyPurposes: [
        {
          description:
            'Mana describes itself as a political waka for all peoples with a specific focus on giving a voice to the poor, the powerless and the dispossessed" and on striving to empower them against the government by the rich and powerful for the rich and powerful',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/turkey/gencparti.png" alt="genç-logo" />
      </div>
      <PartyDetails :partyInfo="partyInfo" :partyDetails="partyDetails" />
    </div>
    <PartyPurpose :partyPurposeList="partyPurposes" purposeText="Partinin Amaclari" />
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
      partyDetails: { country: 'turkey', dbcode: 'gencparti' },
      partyInfo: {
        name: 'Genç Parti',
        shortname: 'GENÇPARTİ',
        established: '26 Kasım 1992',
        founder: 'Cem Uzan',
        address: 'Cumhuriyet Mah.Mithat Paşa Cad. No: 26/11 Çankaya/Ankara',
        internet_address: '?',
        public_relation: 'Melek Dingaz',
        current_member: '37.275',
        president: 'Murat Hakan UZAN',
        facebook: 'https://www.facebook.com/gencpartigenelmerkez/',
        twitter: 'https://twitter.com/gp_genel_merkez',
        phone: '425 36 23',
      },
      partyPurposes: [
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

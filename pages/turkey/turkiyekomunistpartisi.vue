<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/turkey/turkiyekomunistpartisi.png" alt="tkp-logo" />
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
      partyDetails: { country: 'turkey', dbcode: 'turkiyekomunistpartisi' },
      partyInfo: {
        name: 'TÜRKİYE KOMÜNİST PARTİSİ',
        shortname: 'TKP',
        established: '16.08.1993',
        founder: '?',
        address: 'Kızılırmak Caddesi 13/4 Ankara',
        internet_address: 'http://www.tkp.org.tr/anasayfa',
        public_relation: 'Kemal Okuyan',
        current_member: '2.271',
        president: 'Kemal Okuyan',
        facebook: 'https://www.facebook.com/TurkiyeKomunistPartisi/',
        twitter: 'https://twitter.com/tkpninsesi/',
        phone: '0312 417 29 68',
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

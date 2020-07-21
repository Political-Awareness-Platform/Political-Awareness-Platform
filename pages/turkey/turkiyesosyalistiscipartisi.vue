<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/turkey/turkiyesosyalistiscipartisi.png" alt="tsip-logo" />
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
      partyDetails: { country: 'turkey', dbcode: 'turkiyesosyalistiscipartisi' },
      partyInfo: {
        name: 'TÜRKİYE SOSYALİST İŞÇİ PARTİSİ',
        shortname: 'TSİP',
        established: '16 Haziran 1974',
        founder: 'Ahmet Kaçmaz',
        address: 'Meşrutiyet, Karanfil Sk. No:24, 06640 Çankaya/Ankara',
        internet_address: 'http://www.tsip1974.com/',
        public_relation: '',
        current_member: '70',
        president: 'Turgut Koçak',
        facebook: 'https://www.facebook.com/TsipGenelMerkezi',
        twitter: 'https://twitter.com/tipgenelmerkez',
        phone: '337 82 10',
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

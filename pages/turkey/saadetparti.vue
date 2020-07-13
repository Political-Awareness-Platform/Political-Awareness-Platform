<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/turkey/saadet.png" alt="saadet-logo" />
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
      partyDetails: { country: 'turkey', dbcode: 'saadetparti' },
      partyInfo: {
        name: 'Saadet Parti',
        shortname: 'SAADET',
        established: '20 Temmuz 2001',
        founder: 'Necmettin Erbakan',
        address: 'Nasuh Akar Mahallesi, 1419. Sk. No:3, 06520 Balgat, Çankaya / Ankara',
        internet_address: 'http://saadet.org.tr/',
        public_relation: '?',
        current_member: '222.239',
        president: 'Temel Karamollaoğlu',
        facebook: 'https://www.facebook.com/SaadetPartisi',
        twitter: 'https://twitter.com/SaadetPartisi',
        phone: '+90 312 284 88 00',
      },
      partyPurposes: [
        {
          description:
            'Evrensel İnsan Hakları Beyannamesi ve Avrupa İnsan Hakları Sözleşmesi’ndeki kıstasların, Anayasanın 2. Maddesinde yazılı temel niteliklerin, bireysel hak ve hürriyetlerin gerçek manasıyla ve evrensel esaslara uygun olarak uygulanmasına ve ülkemizin maddi ve manevi kalkınmasının “Önce Ahlak ve Maneviyat” anlayışıyla sağlanmasına gayret gösterir.'
        },
        {
          description:
            'Milletin huzur, saadet ve özgürlüğünü, refah ve itibarını artırmaya gayret eder',
        },
        {
          description:
            'Adaletin mülkün temeli olduğu ilkesi doğrultusunda gerçek bir hukuk devletinin oluşmasını hedefler.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

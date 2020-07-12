<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/turkey/milletpartisi.png" alt="millet-logo" />
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
      partyDetails: { country: 'turkey', dbcode: 'milletpartisi' },
      partyInfo: {
        name: 'Millet Partisi',
        shortname: 'MİLLET',
        established: '23 November 1992',
        founder: 'Aykut Edibali',
        address: 'Atatürk Bulvarı No:72/37 Kat:10 Kızılay - Ankara',
        internet_address: 'http://www.milletpartisi.org.tr/',
        public_relation: '?',
        current_member: '4,052',
        president: 'Aykut Edibali',
        facebook: 'https://www.facebook.com/milletpartisi',
        twitter: 'https://twitter.com/milletpartisi',
        phone: '312 419 40 60',
      },
      partyPurposes: [
        {
          description:
            'Parti, Anayasa ve kanunlara uygun olarak; milletvekili ve mahalli seçimler yoluyla, program ve tüzüğünde belirtilen görüşler doğrultusunda çalışma ve açık propaganda ile milli iradenin oluşmasını sağlamak, demokratik devlet ve toplum düzeni içinde ileri, mutlu ve çağdaş, çağdaş medeniyet seviyesini aşmış, müreffeh, mamur “Muhteşem Türkiye” hedefini gerçekleştirmek üzere kamu faaliyetlerini yönetmek, denetlemek ve etkilemek amacındadır.',
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

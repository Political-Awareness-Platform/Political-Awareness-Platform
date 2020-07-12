<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/turkey/dsp.png" alt="dsp-logo" />
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
      partyDetails: { country: 'turkey', dbcode: 'demokratiksolparti' },
      partyInfo: {
        name: 'Demokratik Sol Parti',
        shortname: 'DSP',
        established: '14 November 1985',
        founder: 'Rahşan ve Bulent Ecevit',
        address: 'Mareşal Fevzi Çakmak Cad.17, Beşevler - Ankara',
        internet_address: 'https://www.dsp.org.tr/',
        public_relation: '?',
        current_member: '34,266',
        president: 'Önder AKSAKAL',
        facebook: 'https://www.facebook.com/dspgenelmerkez/',
        twitter: 'https://twitter.com/DSPGenelMerkez',
        phone: '+90 312 212 49 50',
      },
      partyPurposes: [
        {
          description:
            'Demokratik Sol Parti, insanca ve hakça gelişmeyi dirlik düzen içinde hızlandırarak, Türkiye’yi Atatürk Devrimi ve İlkeleri doğrultusunda çağdaş uygarlık düzeyinin üstüne eriştirmeyi; demokrasiye her alanda geçerlilik kazandırmayı; insan haklarını ve özgürlükleri sağlam güvencelere dayandırarak genişletmeyi; halk katılımının her alanda sürekli ve etkili olmasını sağlayarak ulusal egemenliği pekiştirmeyi amaçlayan; hukukun ve emeğin üstünlüğünü; toplumda ve uluslararasında eşitliği, adaleti ve dayanışmayı; ulusal bağımsızlığı ve Türkiye Cumhuriyeti Devleti’nin ulusu ve ülkesiyle bölünmez bütünlüğünü gözeten; yurtta ve dünyada barış için çalışan; ve gücünü halktan alan bir siyasal Kuruluştur,',
        },
        {
          description:
            'Halkın siyasete ve yönetime sürekli ve etkili katılımını öncelikle kendi yapısında ve isleyişinde gerçekleştirir',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/turkey/buyukbirlik.png" alt="buyukbirlik-logo" />
      </div>
      <PartyDetails :partyInfo="partyInfo" :partyDetails="partyDetails" />
    </div>
    <PartyPurpose :partyPurposeList="partyPurposes" purposeText="Partinin Amaclari" />
    <Authentication v-show="!this.$store.state.user.userUID" />
    <div class="party-comment-section" v-if="this.$store.state.user.userUID">
      <div class="positive-section">
        <ThePositiveCommentList
          headerTitle="Yapilmasi Istenenler"
          TopHeaderTitle="En cok istenen"
          :partyDetails="partyDetails"
        />
      </div>
      <div class="negative-section">
        <TheNegativeCommentList
          headerTitle="Istenmeyenler"
          TopHeaderTitle="En uzak durulmasi gereken"
          :partyDetails="partyDetails"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partyDetails: { country: 'turkey', dbcode: 'buyukbirlikpartisi' },
      partyInfo: {
        name: 'Büyük Birlik Partisi',
        shortname: 'BBP',
        established: '29 Ocak 1993',
        founder: 'Muhsin Yazıcıoğlu',
        address: 'Gazi Mah. Silahtar Cad. No: 90 Yenimahalle/Ankara',
        internet_address: 'http://www.bbp.org.tr/',
        public_relation: 'ÜNSAL KARABULUT',
        current_member: '28.839',
        president: 'Mustafa Destici',
        facebook: 'https://www.facebook.com/BBPGenelMerkez/',
        twitter: 'https://twitter.com/bbpgenelmerkez',
        phone: '+90 312 434 09 20',
      },
      partyPurposes: [
        {
          description:
            'Büyük Birlik Partisi, Türkiye Cumhuriyeti’nin temel değerlerine; Atatürk\'ün onurlu, tam bağımsızlıkçı ilkesine bağlı; evrensel hukuk çerçevesinde, temel insan hak ve ürriyetlerini kabul eden, demokratik meşruiyet anlayışı içerisinde, milli kültüre dayalı milliyetçiliği esas alan bir ülke ve devlet idaresini gaye edinmiştir.',
        },
        {
          description:
            'Millî, demokratik, laik ve sosyal bir hukuk devleti olan Türkiye Cumhuriyeti’nin, birlik ve bütünlük içinde gelişmesini, sosyal devlet anlayışıyla, milletin devletiyle bütünleşmiş olduğu çağdaş, akılcı ve bilime dayalı bir yönetim yapısına kavuşturulmasını savunur. Demokrasi anlayışımız, siyasi manada millet iradesinin üzerinde hiçbir iradenin tanınmamasını esas alır.',
        },
        {
          description:
            'İktisadî karar ve uygulamaların "Milli İktisat Siyaseti" anlayışıyla, ülkenin ve dünyanın gelişen ve değişen ekonomik dengelerini gözeterek,  üretim ekonomisine dayalı bir model öngörür. Milli gelirin hakça paylaşıldığı, sosyal devlet ilkesinin en geniş anlamda uygulandığı bir toplumun inşasını hedef alır. Dışarıdan müdahalelerle İktisadî ve sosyal yapımızın tahrip edilmesine izin verilemez.',
        },
        {
          description:
            'Dış Siyasette, Türk Devletleri ile iktisadî, sosyal ve kültürel birlikler kurmayı esas alan; İslam coğrafyası ve bölge ülkeleriyle yakın işbirliği ve bütün dünya ile barışçı ilişkiler içinde olmayı kabul eden, milli menfaatler doğrultusunda siyasî coğrafyamızın imkânlarını değerlendiren çok yönlü işbirliklerinden yanadır. Dış politikada teslimiyetçi tavırlar kabul edilemez.',
        },
        {
          description:
            'Büyük Birlik Partisi olarak; Türk milleti, Türk yurdu ve bütün ülkelerle barış içerinde yaşamayı savunan yeni bir siyaset anlayışına inanıyoruz.',
        },
        {
          description:
            'Bizler aileyi Türk toplumunun temeli kabul ediyoruz. Bu çerçevede insanı merkeze alan bir siyaset anlayışıyla, bireylerin güvenlik içinde, özgürce ve refaha ulaşmış mutlu, düşünen, üreten bir Türkiye ülküsüne bağlı vatandaşlar olmasını arzuluyoruz.',
        },
        {
          description:
            'Toplumun geleceğinin;  iyi eğitim almış, yetişmiş, ülkesine ve milletine hizmet etme sorumluluğu taşıyan nesillerde olduğunun bilinci içinde, eğitimde fırsat eşitliğinin sağlanmasına inanıyoruz.',
        },
        {
          description:
            'Gençlik Milletin geleceğidir.  Milli ve manevi değerlere bağlı, akılcı; duyarlı, bilimi kendine rehber edinmiş, yüksek sorumluluk sahibi bir gençlik BBP’nin arzuladığı gençliktir.',
        },
        {
          description:
            'Halkın iradesinin mutlak olduğu,  siyasi manada halkın iradesi üzerinde hiçbir iradenin olamayacağı, demokrasinin bütün kurum ve kurulları ile devletin bekası ve milletin mutluluğunu esas alacağı, temel hak ve özgürlüklerin teminat altında olduğu bir demokrasi anlayışı BBP’nin demokrasi anlayışının temelidir.',
        },
        {
          description:
            'Büyük Birik Hareketi, dünyada ve Türkiye’de huzuru, barışı ve kardeşliği tesis etmenin, hukukun üstünlüğüne dayalı, temel insan hak ve hürriyetlerinin sağlanması ile mümkün olacağına inanan, bu anlayışı siyasetin merkezine almış, siyasette esas amacın milletin birlik ve beraberliği ile refah ve saadetini tesis etmek olduğuna inanan bir siyasi harekettir.',
        },
        {
          description:
            'Partimizin ilkesi özetle; Dik duracağız, Düz Yürüyeceğiz ve Doğru söyleyeceğiz. İktidarımızda “Güçlü Türkiye” hedefine, Hakk’a dayanarak ve halkla bütünleşerek başaracağız.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
buyukbi
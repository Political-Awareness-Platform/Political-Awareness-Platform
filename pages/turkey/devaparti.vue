<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/deva.png" alt="deva-logo" />
      </div>
      <PartyDetails
        party_name_text="Pari Adi"
        party_shortname_text="Kisaltmasi"
        party_established_text="Kurulus Tarihi"
        party_founder_text="Kurucu Lider"
        party_president_text="Genel Baskan"
        party_publicrelation_text="Iletisim Sozcusu"
        party_currentmember_text="Uye sayisi"
        party_internetaddress_text="Internet Adresi"
        party_telefonnumber_text="Telefon"
        party_address_text="Adres"
        :party_name_value="partyInfo.name"
        :party_shortname_value="partyInfo.shortname"
        :party_established_value="partyInfo.established"
        :party_founder_value="partyInfo.founder"
        :party_president_value="partyInfo.president"
        :party_publicrelation_value="partyInfo.public_relation"
        :party_currentmember_value="partyInfo.current_member"
        :party_internetaddress_value="partyInfo.internet_address"
        :party_telefonnumber_value="partyInfo.phone"
        :party_address_value="partyInfo.address"
        :party_twitter_value="partyInfo.twitter"
        :party_facebook_value="partyInfo.facebook"
      />
    </div>
    <PartyPurpose
      :partyPurposeList="partyPurposes"
      purposeText="Partinin Amaclari"
    />
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
      partyDetails: { country: 'turkey', dbcode: 'devaparti' },
      partyInfo: {
        name: 'Demokrasi ve Atılım Partisi',
        shortname: 'DEVA',
        established: 'March 9, 2020',
        founder: ' Ali Babacan',
        address:
          'Yukarı Öveçler Mahallesi, 1235. Cadde, No:9/22, 06410 Çankaya, Ankara',
        internet_address: 'https://devapartisi.org/',
        public_relation: '?',
        current_member: '?',
        president: ' Ali Babacan',
        facebook: 'https://www.facebook.com/devapartisi/',
        twitter: 'https://twitter.com/devapartisi',
        phone: '?',
      },
      partyPurposes: [
        {
          description:
            'Demokrasi ve Atılım Partisinin amacı, parti programında yer alan politikaların gerçekleştirilmesi suretiyle; kuvvetler ayrılığı esasına ve hukukun üstünlüğüne dayanan; yargının tarafsız ve bağımsızlığı ile hukuk güvenliğinin en üst düzeyde sağlandığı; katılımcı ve çoğulcu demokrasinin hakim olduğu; uluslararası sözleşmeler ve evrensel değerler çerçevesinde temel insan haklarının ve başta ifade ile basın özgürlüğü olmak üzere tüm özgürlüklerin garanti altına alındığı; şiddet, korku, baskı, ötekileştirme, ayrıştırma ve ayrımcılığın yaşanmadığı; hukuka bağlı, vatandaş odaklı, katılımcı, tarafsız, saydam, hesap verebilir, denetlenebilir, etkili ve verimli bir kamu yönetiminin hayata geçirildiği; herkesin insan onuruna yaraşır yaşam ve refah standartlarına ulaştığı; çocuklarımızın ve gençlerimizin geleceğe umutla baktığı, milletimizin barış ve huzur içinde yaşayacağı, saygın ve güçlü bir Türkiye idealini gerçekleştirmektir.',
        },
        {
          description:
            'Partimiz tüm politika oluşturma, karar alma ve uygulamalarında; şeffaflık, hesap verebilirlik, dürüstlük, çoğulculuk, katılımcılık, kurumsallaşma, her alanda liyakatı esas alma, işi ehline verme, istişareye ve ortak akla dayalı yönetim, vatandaşlarımız arasında hiçbir ayrım yapmama, her koşulda gelişmiş bir demokrasiyi, insan haklarını, özgürlükleri ve hukukun üstünlüğünü savunma,  toplumun değerlerine, ihtiyaç ve taleplerine duyarlı olma, kendini değerlendirmede tevazu ve ahlakı temel alma, politika uygulamalarında tutarlılık, öngörülebilirlik ve bütüncül yaklaşımı esas alma ilkelerine bağlı kalacaktır.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

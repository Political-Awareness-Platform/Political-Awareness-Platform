<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/turkey/chp.png" alt="chp-logo" />
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
      partyDetails: { country: 'turkey', dbcode: 'cumhuriyethalkpartisi' },
      partyInfo: {
        name: 'Cumhuriyet Halk Partisi',
        shortname: 'CHP',
        established: '9 September 1923',
        founder: 'Mustafa Kemal Atatürk',
        address: 'Anadolu Bulvarı No: 12, Çankaya, Ankara',
        internet_address: 'https://www.chp.org.tr/',
        public_relation: 'Faik Öztrak',
        current_member: '1,257,753',
        president: 'Kemal Kılıçdaroğlu',
        facebook: 'https://www.facebook.com/herkesicinCHP',
        twitter: 'https://twitter.com/herkesicinchp',
        phone: '+90 (312) 207 40 00',
      },
      partyPurposes: [
        {
          description:
            'Cumhuriyet Halk Partisinin amacı, ilkeleri ve değerleri doğrultusunda, özgürlükçü, eşitlikçi, katılımcı, kuvvetler ayrılığını ve hukukun üstünlüğünü esas alan, çağdaş laik ve çoğulcu bir demokrasi içerisinde;',
        },
        {
          description:
            'Ülkenin birliğini ve bağımsızlığını, yurttaşların güvenliğini “Yurtta Barış, Dünyada Barış” ilkesi doğrultusunda koruyup güçlendirmek,',
        },
        {
          description:
            'Yurttaşların temel hak ve özgürlüklerinin güvence altına alınmasını sağlamak,',
        },
        {
          description:
            'Hakça bir toplum için sosyal adaleti, dayanışmayı ve işbirliğini geliştirmek,',
        },
        {
          description:
            'Örgütlü ve eşitlikçi bir toplum oluşturmak, grev ve toplu sözleşme hakkının tanınmasını sağlamak',
        },
        {
          description:
            'Sürdürülebilir kalkınmayı sağlamak, gelir dağılımındaki adaletsizliği kaldırmak, her türlü yoksulluk ve yoksunlukla hak temelinde mücadele etmek, tam istihdam hedefine ulaşmak, insan onuruna yaraşır yaşam koşullarını sağlamak,',
        },
        {
          description:
            'Her türlü sömürüye ve emperyalizme karşı çıkmak; ülkemizin ve yurttaşlarımızın refah ve saygınlığını korumak ve yükseltmek,',
        },
        {
          description:
            'Her bireyin kendi kişiliğini ve potansiyelini geliştirmesinin önündeki engelleri kaldırmak,',
        },
        {
          description:
            'Her türlü ayrımcılığa ve dışlanmaya karşı mücadele etmek; ayrımcılık ve dışlanmayla yüz yüze kalan kişiler ve gruplarla dayanışma içinde olmak,',
        },
        {
          description:
            'Doğayı, çevreyi ve hayvan haklarını korumak,',
        },
        {
          description:
            'Cinsiyet eşitliğinin toplumsal yaşamın her alanında uygulanmasını sağlamak, kadına karşı her türlü şiddeti önlemek,',
        },
        {
          description:
            'Çocukların birey olarak sahip olduğu tüm hakları korumak ve çocuklara yönelik her türlü şiddet ve istismarı önlemek,',
        },
        {
          description:
            'Gençlerin bilimsel, teknolojik ve kültürel yeniliklere açık; özgür, eleştirel ve demokratik düşünceye sahip yurttaşlar olarak yetişmeleri için gerekli eğitim koşullarını yaratmak,',
        },
        {
          description:
            'Engellilerin ve dezavantajlı grupların haklarını korumak, toplumsal yaşama katılımını sağlayacak önlemleri almak,',
        },
        {
          description:
            'Bilimin, sanatın, kültürün gelişmesini sağlayacak özgür ortamı yaratmak; kültürel ve tarihsel mirasın korunması için gerekli duyarlılığı göstermek,',
        },
        {
          description:
            'Tüm yurttaşlar ve insanlık için, barışı, adaleti ve huzuru tesis etmektir.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

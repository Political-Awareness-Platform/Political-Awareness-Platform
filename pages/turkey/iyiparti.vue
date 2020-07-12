<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/turkey/iyi.png" alt="iyi-logo" />
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
      partyDetails: { country: 'turkey', dbcode: 'iyiparti' },
      partyInfo: {
        name: 'IYI Parti',
        shortname: 'IYI',
        established: '25 October 2017',
        founder: 'Meral Akşener',
        address: '2120. Cadde No: 9 Çankaya, Ankara',
        internet_address: 'https://iyiparti.org.tr/',
        public_relation: 'Yavuz Ağıralioğlu',
        current_member: '266,440',
        president: 'Meral Akşener',
        facebook: 'https://www.facebook.com/iyiparti/',
        twitter: 'https://twitter.com/iyiparti',
        phone: '+90 312 408 08 08',
      },
      partyPurposes: [
        {
          description:
            'Türk Milletinin ülkesi ve devleti ile bölünmez bütünlüğünü korumayı; Kurtuluş Savaşımızın eşsiz kahraman başkomutanı, Cumhuriyetimizin kurucusu büyük önder Atatürk\'ün ilke ve inkılâplarını esas almayı; Türkiye Cumhuriyeti\'ni milletler topluluğunun bağımsız, egemen, şerefli ve itibarlı bir üyesi olarak etkin bir bölgesel güç ve lider ülke yapmayı; böylece, bölge ve dünya barışına katkıda bulunmayı amaç edinir.',
        },
        {
          description:
            'Cumhuriyetimizin kurucu iradesine bağlı olarak, Anayasa\'nın ilk dört maddesinde yer alan; temel niteliklerin varlığını, devletimizin bekasının teminatı olarak kabul eder.',
        },
        {
          description:
            'Demokrasi, insan hakları, adalet, eşitlik, özgür düşünce, hür irade, liyakat, bağımsız ve tarafsız yargı, denge ve denetim sistemleri gibi demokratik hukuk devletlerinin temel kavram ve ilkelerini benimser.',
        },
        {
          description:
            'İnsan Hakları Evrensel Beyannamesi ve Avrupa İnsan Hakları Sözleşmesinde belirtilen ölçütlerin, bireysel hak ve hürriyetlerin gerçek manasıyla ve evrensel değerler kapsamında uygulanmasını sağlamayı amaç edinir.',
        },
        {
          description:
            'Egemenliğin kayıtsız şartsız Türk Milletine ait olduğu, kuvvetler ayrılığının tesis edildiği, hukukun üstünlüğü ilkesinin özümsendiği bir devlet yapılanmasını zaruri görür. Bunun için çok partili demokratik parlamenter sistemin geliştirilerek uygulanması gerektiğine inanır.',
        },
        {
          description:
            'Türk tarihinin ve kültürünün geçmişten günümüze taşınmış bütün değerleri ile bu değerleri temsil eden Ahmet Yesevî, Hacı Bektaş-ı Veli, Mevlana ve Yunus Emre gibi düşünürlerin anlayış ve felsefesini kılavuz edinir. Düşünce, inanç ve din hürriyetini vazgeçilmez ilkeler olarak kabul ederken, laikliği din ve vicdan hürriyetinin teminatı olarak görür.',
        },
        {
          description:
            'Milli geliri artırarak refah seviyesini yükseltmeyi, gelir dağılımındaki dengesizliği ortadan kaldırarak adil paylaşımı ve toplumsal huzuru sağlamayı hedefler. İktisadi değer ve kaynaklarımıza sahip çıkarak, bu değer ve kaynakların en verimli şekilde değerlendirilmesini sağlar.',
        },
        {
          description:
            'Milli ve manevi değerlerimizi yaşatmayı, evrensel değerlere katkıda bulunmayı, bilim, sanat, estetik gibi medeni değerleri geliştirmeyi, milli eğitim sistemini nitelik ve nicelik yönünden en ileri seviyeye taşımayı, siyaseti ahlak kuralları çerçevesinde yapmayı, devletin temeli olan adaleti sağlamayı ve bu ilkelerle ülkemizi muasır medeniyetler seviyesinin üzerine çıkararak insanların daha mutlu, huzurlu ve özgür yaşamasını temin etmeyi hedefler.',
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/turkey/vatan.png" alt="vatan-logo" />
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
      partyDetails: { country: 'turkey', dbcode: 'vatanpartisi' },
      partyInfo: {
        name: 'Vatan Partisi',
        shortname: 'Vatan Partisi',
        established: '10 July 1992',
        founder: 'Doğu Perinçek',
        address: 'Toros Sokak 9, 06430 Sıhhiye, Çankaya, Ankara',
        internet_address: 'http://vatanpartisi.org.tr/',
        public_relation: '?',
        current_member: '20,487',
        president: 'Doğu Perinçek',
        facebook: 'https://www.facebook.com/VatanPartisi',
        twitter: 'https://twitter.com/vatan_partisi',
        phone: '0312 231 81 11',
      },
      partyPurposes: [
        {
          description:
            'Vatan Partisi’nin yakın amacı, Meşrutiyetlerle başlayıp Kemalist Devrim’le en büyük atılımını gerçekleştiren millî demokratik devrimimizi tamamlayarak, millî devleti ve halk yönetimini yeniden kurmak, emperyalizmin baskı ve denetimine son vermek, Ortaçağ kalıntısı bütün ilişki ve kurumları hayatın her alanından temizlemek, halkı özgürlüğe, esenliğe ve aydınlığa kavuşturmaktır.',
        },
        {
          description:
            'Vatan Partisi, Türkiyemizin bugün Asya’dan yükselen çağdaş ve toplumcu uygarlığın önündeki seçkin yerini alması için, artık mafyalaşan kapitalizmin her tür sömürü ve baskısını arasız devrimlerle ortadan kaldırmayı ve imtiyazsız, sınıfsız, kaynaşmış bir toplum kurmayı hedefler.',
        },
        {
          description:
            'İstiklâl Marşımızda belirtildiği gibi, “tek dişi kalmış canavar” olan bugünkü Batı merkezli mafya-tarikat sisteminin, insanın insana kulluğuna, kadın ile erkek arasındaki eşitsizliğe, yabancılaşmaya, yozlaşma ve çürümeye yol açan kurum ve ilişkileri, bütün siyasal, ekonomik ve toplumsal temelleriyle birlikte temizlenecektir. İnsan ve doğa yıkımdan kurtarılacaktır. Bencilliğe ve özel çıkara değil, kamu yararına öncelik veren yeni toplumun kurulmasında, halkımızın güçbirliği, elbirliği, kardeşlik ve dayanışma geleneği, en büyük itici güç olarak harekete geçirilecektir.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

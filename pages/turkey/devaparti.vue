<template>
  <div class="single-party-page">
    <div class="party-logo"><img src="~/assets/logos/deva_logo.svg" /></div>
    <Party :partyDetails="partyDetails" />
  </div>
</template>

<script>
import Party from '@/components/turkey/Party'
export default {
  pageTransition: 'page',
  components: { Party },
  data() {
    return {
      partyDetails: {
        adi: 'Demokrasi ve Atılım Partisi',
        ulke: 'turkey',
        dbcode: 'devaparti',
        kisaltmasi: 'DEVA',
        kurulus_tarihi: 'March 9, 2020',
        kurucu_lider: ' Ali Babacan',
        adresi:
          'Yukarı Öveçler Mahallesi, 1235. Cadde, No:9/22, 06410 Çankaya, Ankara',
        internet_adresi: 'https://devapartisi.org/',
        iletisim_sozcusu: '?',
        guncel_uye_sayisi: '?',
        genel_baskan: ' Ali Babacan',
        facebook: 'https://www.facebook.com/devapartisi/',
        twitter: 'https://twitter.com/devapartisi',
        kurulus_amaci: {
          p1:
            'Demokrasi ve Atılım Partisinin amacı, parti programında yer alan politikaların gerçekleştirilmesi suretiyle; kuvvetler ayrılığı esasına ve hukukun üstünlüğüne dayanan; yargının tarafsız ve bağımsızlığı ile hukuk güvenliğinin en üst düzeyde sağlandığı; katılımcı ve çoğulcu demokrasinin hakim olduğu; uluslararası sözleşmeler ve evrensel değerler çerçevesinde temel insan haklarının ve başta ifade ile basın özgürlüğü olmak üzere tüm özgürlüklerin garanti altına alındığı; şiddet, korku, baskı, ötekileştirme, ayrıştırma ve ayrımcılığın yaşanmadığı; hukuka bağlı, vatandaş odaklı, katılımcı, tarafsız, saydam, hesap verebilir, denetlenebilir, etkili ve verimli bir kamu yönetiminin hayata geçirildiği; herkesin insan onuruna yaraşır yaşam ve refah standartlarına ulaştığı; çocuklarımızın ve gençlerimizin geleceğe umutla baktığı, milletimizin barış ve huzur içinde yaşayacağı, saygın ve güçlü bir Türkiye idealini gerçekleştirmektir.',
          p2:
            'Partimiz tüm politika oluşturma, karar alma ve uygulamalarında; şeffaflık, hesap verebilirlik, dürüstlük, çoğulculuk, katılımcılık, kurumsallaşma, her alanda liyakatı esas alma, işi ehline verme, istişareye ve ortak akla dayalı yönetim, vatandaşlarımız arasında hiçbir ayrım yapmama, her koşulda gelişmiş bir demokrasiyi, insan haklarını, özgürlükleri ve hukukun üstünlüğünü savunma,  toplumun değerlerine, ihtiyaç ve taleplerine duyarlı olma, kendini değerlendirmede tevazu ve ahlakı temel alma, politika uygulamalarında tutarlılık, öngörülebilirlik ve bütüncül yaklaşımı esas alma ilkelerine bağlı kalacaktır.'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

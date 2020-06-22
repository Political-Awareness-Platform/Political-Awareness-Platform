<template>
  <div class="single-party-page">
    <div class="party-logo"><img src="~/assets/logos/akparti_logo.png" /></div>
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
        adi: 'AK Parti',
        ulke: 'turkey',
        dbcode: 'akparti',
        kisaltmasi: 'AKP',
        kurulus_tarihi: 'August 14, 2001',
        kurucu_lider: 'Recep Tayyip Erdoğan',
        adresi: 'Söğütözü Caddesi No : 6 Çankaya/ANKARA Çankaya / Ankara',
        internet_adresi: 'https://www.akparti.org.tr/',
        iletisim_sozcusu: 'Ömer Çelik',
        guncel_uye_sayisi: '10,195,904',
        genel_baskan: 'Recep Tayyip Erdoğan',
        facebook: 'https://www.facebook.com/akparti',
        twitter: 'https://twitter.com/akparti',
        kurulus_amaci: {
          p1:
            'Türk Milleti’nin en önemli yönetim kazanımının, Cumhuriyet olduğuna ve egemenliğin, kayıtsız ve şartsız milletimize ait bulunduğuna inanır. “Milli irade”nin tek belirleyici güç olduğunu kabul eder. Millet adına egemenlik yetkisi kullanan kurumların ve kişilerin gözetmeleri gereken en üstün gücün ise, hukukun üstünlüğü ilkesi olduğunu savunur. Akıl, bilim ve tecrübenin yol gösterici olduğunu benimser. Milli irade, hukukun üstünlüğü, akıl, bilim, tecrübe, demokrasi, bireyin temel hak ve özgürlükleri ve ahlakiliği, siyasi yönetim anlayışının temel referansları olarak kabul eder.',
          p2:
            'Türk Milleti’nin Ülkesi ve Devletiyle bölünmez bütünlüğünü savunur. Geçmişten gelen değerlerimizi koruyarak, Cumhuriyetimizin kurucusu Mustafa Kemal Atatürk’ün gösterdiği muasır medeniyet seviyesine ulaşmak ve hatta onu aşabilmek için ikinci maddede açıklanan normlar ve genel kabullere uygun faaliyetlerde bulunmayı, siyasi hayatın zemini kabul eder.',
          p3:
            'Insan merkezli siyasi bir Partidir. En üstün hizmetin, insana hizmet olduğuna inanır. İnsanın mutluluğu, huzuru, güveni ve sağlığı çalışmalarının hedefini teşkil eder. Bütün insanlarımızı, “Türkiye” coğrafyasında kurulu “Türkiye Cumhuriyeti Devleti” ismi altında büyük bir aile, diğer devletleri kendi sınırları içinde komşu aileler olarak kabul eder. Sulh içinde bir arada yaşamanın, insana verilen değerle mümkün olacağına inanır',
          p4:
            ' insanların farklı inanç, düşünce, ırk, dil, ifade etme, örgütlenme ve yaşama gibi doğuştan var olan tüm haklara 23 sahip olduklarını bilir ve saygı duyar. Farklı olmanın ayrışma değil, pekiştirici kültürel zenginliğimiz olduğunu kabul eder.'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

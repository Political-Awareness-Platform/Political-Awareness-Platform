<template>
  <div class="single-party-page">
    <div class="party-logo"><img src="~/assets/logos/iyiparti_logo.png" /></div>
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
        adi: 'İYİ Parti',
        ulke: 'turkey',
        dbcode: 'iyiparti',
        kisaltmasi: 'İYİ Parti',
        kurulus_tarihi: '25 October 2017',
        kurucu_lider: 'MERAL AKŞENER',
        adresi:
          'Mustafa Kemal Mahallesi, 2120. Cadde, No:9 Çankaya / Ankara',
        internet_adresi: 'https://iyiparti.org.tr',
        iletisim_sozcusu: 'Yavuz Ağıralioğlu',
        guncel_uye_sayisi: '?',
        genel_baskan: 'MERAL AKŞENER',
        facebook: 'https://www.facebook.com/iyiparti/',
        twitter: 'https://twitter.com/iyiparti',
        kurulus_amaci: {
          p1:
            'Türk Milletinin ülkesi ve devleti ile bölünmez bütünlüğünü korumayı; Kurtuluş Savaşımızın eşsiz kahraman başkomutanı, Cumhuriyetimizin kurucusu büyük önder Atatürk\'ün ilke ve inkılâplarını esas almayı; Türkiye Cumhuriyeti\'ni milletler topluluğunun bağımsız, egemen, şerefli ve itibarlı bir üyesi olarak etkin bir bölgesel güç ve lider ülke yapmayı; böylece, bölge ve dünya barışına katkıda bulunmayı amaç edinir',
          p2:
            'Cumhuriyetimizin kurucu iradesine bağlı olarak, Anayasa\'nın ilk dört maddesinde yer alan; temel niteliklerin varlığını, devletimizin bekasının teminatı olarak kabul eder.',
          p3:
            'Demokrasi, insan hakları, adalet, eşitlik, özgür düşünce, hür irade, liyakat, bağımsız ve tarafsız yargı, denge ve denetim sistemleri gibi demokratik hukuk devletlerinin temel kavram ve ilkelerini benimser ',
          p4:
            'İnsan Hakları Evrensel Beyannamesi ve Avrupa İnsan Hakları Sözleşmesinde belirtilen ölçütlerin, bireysel hak ve hürriyetlerin gerçek manasıyla ve evrensel değerler kapsamında uygulanmasını sağlamayı amaç edinir',
          p5:
            'Egemenliğin kayıtsız şartsız Türk Milletine ait olduğu, kuvvetler ayrılığının tesis edildiği, hukukun üstünlüğü ilkesinin özümsendiği bir devlet yapılanmasını zaruri görür. Bunun için çok partili demokratik parlamenter sistemin geliştirilerek uygulanması gerektiğine inanır'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

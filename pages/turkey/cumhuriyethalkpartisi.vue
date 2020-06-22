<template>
  <div class="single-party-page">
    <div class="party-logo"><img src="~/assets/logos/chp_logo.png" /></div>
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
        adi: 'Cumhuriyet Halk Partisi',
        ulke: 'turkey',
        dbcode: 'cumhuriyethalkpartisi',
        kisaltmasi: 'CHP',
        kurulus_tarihi: '9 Eylül 1923',
        kurucu_lider: ' Mustafa Kemal Atatürk',
        adresi:
          'Cumhuriyet Halk Partisi Genel Merkezi, Anadolu Bulvarı No:12 Söğütözü Çankaya / ANKARA',
        internet_adresi: 'https://www.chp.org.tr',
        iletisim_sozcusu: 'Faik Öztrak',
        guncel_uye_sayisi: '1,257,753',
        genel_baskan: 'Kemal Kılıçdaroğlu',
        facebook: 'https://www.facebook.com/herkesicinCHP',
        twitter: 'https://twitter.com/herkesicinchp',
        kurulus_amaci: {
          p1:
            'Cumhuriyet Halk Partisinin amacı, ilkeleri ve değerleri doğrultusunda, özgürlükçü, eşitlikçi, katılımcı, kuvvetler ayrılığını ve hukukun üstünlüğünü esas alan, çağdaş laik ve çoğulcu bir demokrasi içerisinde',
          p2:
            'Ülkenin birliğini ve bağımsızlığını, yurttaşların güvenliğini “Yurtta Barış, Dünyada Barış” ilkesi doğrultusunda koruyup güçlendirmek,',
          p3:
            'Yurttaşların temel hak ve özgürlüklerinin güvence altına alınmasını sağlamak, ',
          p4:
            'Hakça bir toplum için sosyal adaleti, dayanışmayı ve işbirliğini geliştirmek',
          p5:
            'Örgütlü ve eşitlikçi bir toplum oluşturmak, grev ve toplu sözleşme hakkının tanınmasını sağlamak'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

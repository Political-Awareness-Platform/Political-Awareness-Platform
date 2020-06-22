<template>
  <div class="single-party-page">
    <div class="party-logo"><img src="~/assets/logos/mhp_logo.png" /></div>
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
        adi: 'Milliyetci Hareket Partisi',
        ulke: 'turkey',
        dbcode: 'milliyetcihareketparti',
        kisaltmasi: 'MHP',
        kurulus_tarihi: '9 Subat 1969',
        kurucu_lider: 'Alparslan Türkeş',
        adresi: 'Ceyhun Atuf Kansu Caddesi No: 128 Balgat Ankara-TÜRKİYE',
        internet_adresi: 'http://www.mhp.org.tr',
        iletisim_sozcusu: '?',
        guncel_uye_sayisi: '479.199',
        genel_baskan: 'Devlet Bahceli',
        facebook: 'https://www.facebook.com/milliyetcihareketpartisi',
        twitter: 'https://twitter.com/MHP_Bilgi',
        kurulus_amaci: {
          p1:
            'Meşruiyeti milli irade olan, insan odaklı, seviyeli, ilkeli,dürüst bir siyaset anlayışı ile adaleti ve hakkaniyeti esas alan bir yönetim anlayışını tesis etmek; toplumsal barış ve huzuru hâkim kılmak, Yüce Türk Milletinin milli ve anevi değerleri ile tarihi ve kültürel zenginliklerine sahip çıkmak,',

          p2:
            'Devletin, ülkesi ve milletiyle bölünmez bütünlüğünü, hak ve menfaatlerini korumak, İnançlı, yüksek ahlaklı ve çağın gerektirdiği niteliklere sahip nesiller yetiştirmek,   16 Temel insan hak ve hürriyetlerini geliştirmek, hukukun üstünlüğünü hâkim kılmak, demokratik standartları yükseltmek,',

          p3:
            'Hürriyet, adalet, hakkaniyet ve fırsat eşitliğini esas alan, milli,  insani ve ahlaki değerlerin ön plana çıktığı siyasi ve toplumsal düzen ile kültürel iklimi tesis etmek, Kardeşlik hukukunu ve dayanışma kültürünü geliştirmek, milli birlik ve bütünlüğü tesis etmek, Türk milletinin maddi ve manevi gelişmesi önündeki engelleri kaldırmak;  dengeli ve adaletli bölüşüm sistemine dayanan bir gelir dağılımı oluşturmak, Yatırım ve istihdam kapasitesi yüksek, ileri teknolojiyi ve teşebbüs hürriyetini esas alan, uluslar arası rekabet gücüne sahip sürdürülebilir büyümeyi gerçekleştirecek bir ekonomi tesis etmek,  Barış, mutluluk ve adaletin hâkim olduğu bir Dünya nizamının tesisinde ülkemizin söz sahibi olmasını sağlamak, suretiyle milletimizi çağın kudretli, itibarlı ve önder toplumlarından biri yapmak ve tarih sahnesinde ebedi kılmaktır.'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

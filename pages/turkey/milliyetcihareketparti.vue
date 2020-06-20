<template>
  <div class="single-party-page">
    <div class="party-intro">
      <div class="party-logo"><img src="~/assets/logos/mhp_logo.png" /></div>
      <div class="party-details">
        <p><b>Adi : </b> Milliyetci Hareket Partisi</p>
        <p><b>Kisalmasi : </b> MHP</p>
        <p><b>Kurulus tarihi : </b> 9 Subat 1969</p>
        <p><b>Kurucu lider : </b> Alparslan Türkeş</p>
        <p>
          <b>Fiziksek adresi : </b> Ceyhun Atuf Kansu Caddesi No: 128 Balgat,
          Ankara-TÜRKİYE
        </p>
        <p><b>Internet adresi : </b> http://www.mhp.org.tr</p>
        <p><b>Telefon numarasi : </b> +90 312 472 55 55</p>
        <p><b>Genel baskani : </b> Devlet Bahçeli</p>
        <p><b>Iletisim sozcusu : </b> ?</p>
        <p><b>Guncel Uye sayisi : </b> 479.199</p>
        <p>
          <b>Facebook : </b> https://www.facebook.com/milliyetcihareketpartisi
        </p>
        <p><b>Twitter : </b> https://twitter.com/MHP_Bilgi</p>
      </div>
    </div>
    <div class="party-purpose">
      <p>
        <b>Tuzukteki kurulus amaci: </b> <br> Meşruiyeti milli irade olan, insan odaklı, seviyeli, ilkeli,
        dürüst bir siyaset anlayışı ile adaleti ve hakkaniyeti esas alan bir
        yönetim anlayışını tesis etmek; toplumsal barış ve huzuru hâkim kılmak,
        <br /> <br>
        Yüce Türk Milletinin milli ve manevi değerleri ile tarihi ve kültürel
        zenginliklerine sahip çıkmak, <br /> <br>
        Devletin, ülkesi ve milletiyle bölünmez bütünlüğünü, hak ve
        menfaatlerini korumak, <br> <br />
        İnançlı, yüksek ahlaklı ve çağın gerektirdiği niteliklere sahip nesiller
        yetiştirmek, <br /> <br>
        16 Temel insan hak ve hürriyetlerini geliştirmek, hukukun üstünlüğünü
        hâkim kılmak, demokratik standartları yükseltmek, <br> <br />
        Hürriyet, adalet, hakkaniyet ve fırsat eşitliğini esas alan, milli,
        insani ve ahlaki değerlerin ön plana çıktığı siyasi ve toplumsal düzen
        ile kültürel iklimi tesis etmek, <br /> <br>
        Kardeşlik hukukunu ve dayanışma kültürünü geliştirmek, milli birlik ve
        bütünlüğü tesis etmek, <br /> <br>
        Türk milletinin maddi ve manevi gelişmesi önündeki engelleri kaldırmak;
        dengeli ve adaletli bölüşüm sistemine dayanan bir gelir dağılımı
        oluşturmak, <br /> <br>
        Yatırım ve istihdam kapasitesi yüksek, ileri teknolojiyi ve teşebbüs
        hürriyetini esas alan, uluslar arası rekabet gücüne sahip sürdürülebilir
        büyümeyi gerçekleştirecek bir ekonomi tesis etmek, <br> <br />
        Barış, mutluluk ve adaletin hâkim olduğu bir Dünya nizamının tesisinde
        ülkemizin söz sahibi olmasını sağlamak, suretiyle milletimizi çağın
        kudretli, itibarlı ve önder toplumlarından biri yapmak ve tarih
        sahnesinde ebedi kılmaktır.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  pageTransition: 'page'
}
</script>

<style lang="scss" scoped>
.single-party-page {
  margin: 1em;

  .party-intro {
    display: grid;
    grid-template-columns: 1fr 2fr;

    @media only screen and (max-width: 900px) {
      grid-template-columns: auto;
    }

    .party-logo {
      margin: auto;
    }

    .party-details {
    }
  }
  .party-purpose {
    margin-top: 2em;
  }
}
</style>

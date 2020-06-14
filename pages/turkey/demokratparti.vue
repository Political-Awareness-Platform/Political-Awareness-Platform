<template>
  <div class="country-page-container">
    <div class="country-info">
      <div class="country-flag">
        <img src="~/assets/logos/demokrat_parti_logo.png" />
      </div>
      <div class="country-numbers">
        <p><b>Adi : </b> Demokrat Parti</p>
        <p><b>Kisalmasi : </b> DP</p>
        <p><b>Kurulus tarihi : </b> 27 Mayıs 2007</p>
        <p><b>Kurucu lider : </b> Mehmet Ağar</p>
        <p>
          <b>Fiziksek adresi : </b> Dr. Sadık Ahmet Caddesi No:3 Balgat / Ankara
        </p>
        <p><b>Internet adresi : </b> -</p>
        <p><b>Telefon numarasi : </b> +90 (312) 420 65 98</p>
        <p><b>Genel baskani : </b> Gültekin Uysal</p>
        <p><b>Iletisim sozcusu : </b> -</p>
        <p><b>Guncel Uye sayisi : </b> 450.990</p>
        <p>
          <b>Sosyal medya linkleri : </b> https://www.facebook.com/dp.org.tr
        </p>
        <p>
          <b>Sosyal medya linkleri : </b>
          https://www.instagram.com/partidemokrat
        </p>
        <p>
          <b>Sosyal medya linkleri : </b> https://twitter.com/_DemokratParti
        </p>
        <p><b>Tuzukteki kurulus amaci: </b> -</p>
        <p><b>Secim vaadleri : </b> -</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase, { firestore } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-functions'
export default {
  pageTransition: 'page',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.country-page-container {
  max-width: 1000px;
  margin: auto;
  padding: 1em;

  .country-info {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    
    .country-flag {
     img{
     width: 200px;
     }
      @media only screen and (max-width: 600px) {
        margin-bottom: 10px;
      }
    }

    .country-numbers {
    
      @media only screen and (max-width: 600px) {
        width: 100%;
      }
    }

    @media only screen and (max-width: 600px) {
      grid-template-columns: auto;
    }
  }


}

</style>

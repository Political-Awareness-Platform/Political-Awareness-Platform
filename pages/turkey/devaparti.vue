<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/deva.png" alt="deva-logo" />
      </div>
      <div class="party-info">
        <div class="party-details">
          <p>
            <b>Adi :</b>
            {{ partyInfo.adi }}
          </p>
          <p>
            <b>Kisalmasi :</b>
            {{ partyInfo.kisaltmasi }}
          </p>
          <p>
            <b>Kurulus tarihi :</b>
            {{ partyInfo.kurulus_tarihi }}
          </p>
          <p>
            <b>Kurucu lider :</b>
            {{ partyInfo.kurucu_lider }}
          </p>
          <p>
            <b>Genel baskani :</b>
            {{ partyInfo.genel_baskan }}
          </p>
        </div>
        <div class="party-addresses">
          <p>
            <b>Iletisim sozcusu :</b>
            {{ partyInfo.iletisim_sozcusu }}
          </p>
          <p>
            <b>Guncel Uye sayisi :</b>
            {{ partyInfo.guncel_uye_sayisi }}
          </p>
          <p>
            <b>Internet adresi :</b>
            <a
              :href="partyInfo.internet_adresi"
              style="text-decoration:none;"
            >{{ partyInfo.internet_adresi }}</a>
          </p>
          <p>
            <b>Telefon :</b>
            ?
          </p>
          <p>
            <b>Adres :</b>
            {{ partyInfo.adresi }}
          </p>

          <a :href="partyInfo.facebook">
            <img src="~assets/logos/facebookicon.svg" alt="facebook-icon" class="icon" />
          </a>
          <a :href="partyInfo.twitter">
            <img src="~assets/logos/twittericon.svg" alt="twitter-icon" class="icon" />
          </a>
        </div>
      </div>
    </div>
    <div class="party-comment-section">
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
    partyDetails: { country: 'turkey', dbcode: 'devaparti' },
    partyInfo: {
        adi: 'Demokrasi ve Atılım Partisi',
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
        
  },
  kurulus_amaci: {
          p1:
            'Demokrasi ve Atılım Partisinin amacı, parti programında yer alan politikaların gerçekleştirilmesi suretiyle; kuvvetler ayrılığı esasına ve hukukun üstünlüğüne dayanan; yargının tarafsız ve bağımsızlığı ile hukuk güvenliğinin en üst düzeyde sağlandığı; katılımcı ve çoğulcu demokrasinin hakim olduğu; uluslararası sözleşmeler ve evrensel değerler çerçevesinde temel insan haklarının ve başta ifade ile basın özgürlüğü olmak üzere tüm özgürlüklerin garanti altına alındığı; şiddet, korku, baskı, ötekileştirme, ayrıştırma ve ayrımcılığın yaşanmadığı; hukuka bağlı, vatandaş odaklı, katılımcı, tarafsız, saydam, hesap verebilir, denetlenebilir, etkili ve verimli bir kamu yönetiminin hayata geçirildiği; herkesin insan onuruna yaraşır yaşam ve refah standartlarına ulaştığı; çocuklarımızın ve gençlerimizin geleceğe umutla baktığı, milletimizin barış ve huzur içinde yaşayacağı, saygın ve güçlü bir Türkiye idealini gerçekleştirmektir.',
          p2:
            'Partimiz tüm politika oluşturma, karar alma ve uygulamalarında; şeffaflık, hesap verebilirlik, dürüstlük, çoğulculuk, katılımcılık, kurumsallaşma, her alanda liyakatı esas alma, işi ehline verme, istişareye ve ortak akla dayalı yönetim, vatandaşlarımız arasında hiçbir ayrım yapmama, her koşulda gelişmiş bir demokrasiyi, insan haklarını, özgürlükleri ve hukukun üstünlüğünü savunma,  toplumun değerlerine, ihtiyaç ve taleplerine duyarlı olma, kendini değerlendirmede tevazu ve ahlakı temel alma, politika uygulamalarında tutarlılık, öngörülebilirlik ve bütüncül yaklaşımı esas alma ilkelerine bağlı kalacaktır.'
       } 
  }
},
}
</script>

<style lang="scss" scoped>
</style> 
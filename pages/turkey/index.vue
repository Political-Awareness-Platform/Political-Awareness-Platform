<template>
  <div class="country-page">
    <div class="country-intro">
      <div class="country-flag">
        <img src="~assets/flags/tr.svg" alt="turkey-flag" />
      </div>
      <div class="country-info">
        <p><b>Faliyette olan parti sayisi :</b> 83</p>
        <p><b>Meclisteki parti sayisi :</b> 11</p>
        <p><b>Secmen sayisi :</b> 57.058.636</p>
        <p><b>Secime katilim yuzdesi :</b> 84,67</p>
      </div>
    </div>
    <h2 style="text-align: center; margin: 2em 0px;">Partiler</h2>
    <div class="country-parties">
      <div
        v-for="party in parties"
        :key="party.party_name"
        class="country-party-card"
      >
        <nuxt-link :to="party.link">{{ party.party_name }}</nuxt-link>
      </div>
    </div>
    <h2 style="text-align: center; margin: 2em 0px;">Ideal / Hayali Parti</h2>
    <Authentication v-show="!this.$store.state.user.userUID" />
    <div class="country-ideal-party" v-if="this.$store.state.user.userUID">
      <div class="positive-section">
        <CountryPagePositiveCommentSection :partyDetails="partyDetails" />
      </div>
      <div class="negative-section">
        <CountryPageNegativeCommentSection :partyDetails="partyDetails" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partyDetails: { country: 'turkey', dbcode: 'imaginary' },
      parties: [
        {
          party_name: 'Cumhuriyet Halk Partisi',
          link: '/turkey/cumhuriyethalkpartisi',
        },
        {
          party_name: 'Milliyetci Hareket Parti',
          link: '/turkey/milliyetcihareketparti',
        },
        {
            party_name: 'Millet Partisi',
            link: '/turkey/milletpartisi',
        },
        {
          party_name: 'Demokratik Sol Parti',
          link: '/turkey/demokratiksolparti',
        },
        {
          party_name: 'Vatan Partisi',
          link: '/turkey/vatanpartisi',
        },
         {
          party_name: 'Genc Parti',
          link: '/turkey/gencparti',
        },
         {
          party_name: 'TÜRKİYE SOSYALİST İŞÇİ PARTİSİ',
          link: '/turkey/turkiyesosyalistiscipartisi',
        },
        {
          party_name: 'Buyuk Birlik Partisi',
          link: '/turkey/buyukbirlikpartisi',
        },
        {
          party_name: 'TÜRKİYE KOMÜNİST PARTİSİ',
          link: '/turkey/turkiyekomunistpartisi',
        },
        {
          party_name: 'SOL Parti',
          link: '/turkey/solparti',
        },
        {
          party_name: 'LİBERAL DEMOKRAT PARTİ',
          link: '/turkey/liberaldemokratparti',
        },
        {
          party_name: 'EMEK PARTİSİ',
          link: '/turkey/emekpartisi',
        },
        {
          party_name: 'DEVRİMCİ SOSYALİST İŞÇİ PARTİSİ',
          link: '/turkey/devrimcisosyalistiscipartisi',
        },
        {
          party_name: 'İLK PARTİ',
          link: '/turkey/ilkparti',
        },
        {
          party_name: 'SAADET PARTİSİ',
          link: '/turkey/saadetpartisi',
        },
        {
          party_name: 'AK PARTİ',
          link: '/turkey/adaletvekalkinmapartisi',
        },
        {
          party_name: 'BAĞIMSIZ TÜRKİYE PARTİSİ',
          link: '/turkey/bagimsizturkiyepartisi',
        },
        {
          party_name: 'HAK VE ÖZGÜRLÜKLER PARTİSİ',
          link: '/turkey/hakveozgurluklerpartisi',
        },
        {
          party_name: 'YURT PARTİSİ',
          link: '/turkey/yurtpartisi',
        },
        {
          party_name: 'BAĞIMSIZ CUMHURİYET PARTİSİ',
          link: '/turkey/bagimsizcumhuriyetpartisi',
        },
        {
          party_name: 'SAĞDUYU PARTİSİ',
          link: '/turkey/sagduyupartisi',
        },
        {
          party_name: 'AYYILDIZ PARTİSİ',
          link: '/turkey/ayyildizpartisi',
        },
        {
          party_name: 'EMEKÇİ HAREKET PARTİSİ',
          link: '/turkey/emekcihareketpartisi',
        },
        {
          party_name: 'HALKIN KURTULUŞ PARTİSİ',
          link: '/turkey/halkinkurtuluspartisi',
        },
        {
          party_name: 'MÜDAFAA-İ HUKUK HAREKETİ PARTİSİ',
          link: '/turkey/mudafaaihukukhareketipartisi',
        },
        {
          party_name: 'İŞÇİNİN KENDİ PARTİSİ',
          link: '/turkey/iscininkendipartisi',
        },
        {
          party_name: 'YÜCE DİRİLİŞ PARTİSİ',
          link: '/turkey/yucedirilispartisi',
        },
        {
          party_name: 'DOĞRUYOL PARTİSİ',
          link: '/turkey/dogruyolpartisi',
        },
        {
          party_name: 'DEVRİMCİ İŞÇİ PARTİSİ',
          link: '/turkey/devrimciiscipartisi',
        },
        {
          party_name: 'EBEDİ NİZAM PARTİSİ',
          link: '/turkey/ebedinizampartisi',
        },
        {
          party_name: 'DEMOKRATİK BÖLGELER PARTİSİ',
          link: '/turkey/demokratikbolgelerpartisi',
        },
        {
          party_name: 'HAK VE HAKİKAT PARTİSİ',
          link: '/turkey/hakvehakikatpartisi',
        },
        {
          party_name: 'YENİ DÜNYA PARTİSİ',
          link: '/turkey/yenidunyapartisi',
        },
        {
          party_name: 'EZİLENLERİN SOSYALİST PARTİSİ',
          link: '/turkey/ezilenlerinsosyalistpartisi',
        },
        {
          party_name: 'ULUSAL PARTİ',
          link: '/turkey/ulusalparti',
        },
        {
          party_name: 'TÜRKİYE İŞÇİ KÖYLÜ PARTİSİ',
          link: '/turkey/turkiyeiscikoylupartisi',
        },
        {
          party_name: 'ESNAF VE ÇİFTÇİ PARTİSİ',
          link: '/turkey/esnafveciftcipartisi',
        },
        {
          party_name: 'ANAVATAN PARTİSİ',
          link: '/turkey/anavatanpartisi',
        },
        {
          party_name: 'ÖZGÜRLÜK VE SOSYALİZM PARTİSİ',
          link: '/turkey/ozgurlukvesosyalizmpartisi',
        },
        {
          party_name: 'ENGELSİZ TÜRKİYE PARTİSİ',
          link: '/turkey/engelsizturkiyepartisi',
        },
        {
          party_name: 'TOPLUMCU KURTULUŞ PARTİSİ ',
          link: '/turkey/toplumcukurtuspartisi',
        },
        {
          party_name: 'HAK VE ADALET PARTİSİ',
          link: '/turkey/hakveadaletpartisi',
        },
        {
          party_name: 'HALKLARIN DEMOKRATİK PARTİSİ',
          link: '/turkey/halklarindemokratikpartisi',
        },
        {
          party_name: 'TÜRK BİRLİĞİ PARTİSİ',
          link: '/turkey/turkbirligipartisi',
        },
        {
          party_name: 'YEŞİLLER VE SOL GELECEK PARTİSİ',
          link: '/turkey/yesillervesolgelecekpartisi',
        },
        {
          party_name: 'HÜR DAVA PARTİSİ',
          link: '/turkey/hurdavapartisi',
        },
        {
          party_name: 'MUHAFAZAKÂR YÜKSELİŞ PARTİSİ',
          link: '/turkey/muhafazakaryukselispartisi',
        },
        {
          party_name: 'SOSYALİST YENİDEN KURULUŞ PARİTSİ',
          link: '/turkey/sosyalistyenidenkuruluspartisi',
        },
        {
          party_name: 'GENÇ ANADOLU PARTİSİ',
          link: '/turkey/gencanadolupartisi',
        },
        {
          party_name: 'KADIN PARTİSİ',
          link: '/turkey/kadinpartisi',
        },
        {
          party_name: 'TURAN HAREKETİ PARTİSİ',
          link: '/turkey/turanhareketipartisi',
        },
        {
          party_name: 'MERKEZ PARTİ',
          link: '/turkey/merkezparti',
        },
        {
          party_name: 'HAK VE HUZUR PARTİSİ',
          link: '/turkey/hakvehuzurpartisi',
        },
        {
          party_name: 'KOMÜNİST PARTİ',
          link: '/turkey/komunistparti',
        },
        {
          party_name: 'CİHAN PARTİSİ',
          link: '/turkey/cihanpartisi',
        },
        {
          party_name: 'ÇOĞULCU DEMOKRASİ PARTİSİ',
          link: '/turkey/cogulcudemokrasipartisi',
        },
        {
          party_name: 'TÜRKİYE EKONOMİ VE KALKINMA PARTİSİ',
          link: '/turkey/turkiyeekonomivekalkinmapartisi',
        },
        {
          party_name: 'MİLLİ MÜCADELE PARTİSİ',
          link: '/turkey/millimucadelepartisi',
        },
        {
          party_name: 'AS PARTİ',
          link: '/turkey/asparti',
        },
        {
          party_name: 'İŞÇİ DEMOKRASİSİ PARTİSİ',
          link: '/turkey/iscidemokrasisipartisi',
        },
        {
          party_name: 'TÜRKİYE KOMÜNİST HAREKETİ',
          link: '/turkey/turkiyekomunisthareketi',
        },
        {
          party_name: 'BİRLEŞİK DEVRİMCİ PARTİ',
          link: '/turkey/birlesikdevrimciparti',
        },
        {
          party_name: 'ADALET PARTİSİ',
          link: '/turkey/adaletpartisi',
        },
        {
          party_name: 'SOSYALİST EMEKÇİLER PARTİSİ',
          link: '/turkey/sosyalistemekcilerpartisi',
        },
        {
          party_name: 'DEMOKRASİ ZAMANI PARTİSİ',
          link: '/turkey/demokrasizamanipartisi',
        },
        {
          party_name: 'BÜYÜK TÜRKİYE PARTİSİ',
          link: '/turkey/buyukturkiyepartisi',
        },
        {
          party_name: 'DEMOKRATİK GENÇ PARTİ',
          link: '/turkey/demokratikgencparti',
        },
        {
          party_name: 'OSMANLI PARTİSİ',
          link: '/turkey/osmanlipartisi',
        },
        {
          party_name: 'GÜVEN ADALET VE AYDINLIK PARTİSİ',
          link: '/turkey/guvenadaletveaydinlikpartisi',
        },
        {
          party_name: 'İYİ Parti',
          link: '/turkey/iyiparti',
        },
        {
          party_name: 'TÜRKİYE İŞÇİ PARTİSİ',
          link: '/turkey/turkiyeiscipartisi',
        },
        {
          party_name: 'ÖTÜKEN BİRLİĞİ PARTİSİ',
          link: '/turkey/otukenbirligipartisi',
        },
        {
          party_name: 'ADALET BİRLİK PARTİSİ',
          link: '/turkey/adaletbirlikpartisi',
        },
        {
          party_name: 'YENİDEN REFAH PARTİSİ',
          link: '/turkey/yenidenrefahpartisi',
        },
        {
          party_name: 'ÜLKEM PARTİSİ',
          link: '/turkey/ulkempartisi',
        },
        {
          party_name: 'TÜRK VE DÜNYA BİRLİĞİ PARTİSİ',
          link: '/turkey/turkvedunyabirligipartisi',
        },
        {
          party_name: 'GELECEK PARTİSİ',
          link: '/turkey/gelecekpartisi',
        },
        {
          party_name: 'ANADOLU BİRLİĞİ PARTİSİ',
          link: '/turkey/anadolubirligipartisi',
        },
        {
          party_name: 'AYDINLIK GELECEĞİN PARTİSİ',
          link: '/turkey/aydinlikgeleceginpartisi',
        },
        {
          party_name: 'MERKEZ ANA PARTİSİ',
          link: '/turkey/merkezanapartisi',
        },
        {
          party_name: 'BARIŞ VE EŞİTLİK PARTİSİ',
          link: '/turkey/barisveesitlikpartisi',
        },
        {
          party_name: 'GÜÇ BİRLİĞİ PARTİSİ',
          link: '/turkey/gucbirligipartisi',
        },
        {
          party_name: 'DEMOKRASİ VE ATILIM PARTİSİ',
          link: '/turkey/devaparti',
        },
        {
          party_name: 'TOPLUMSAL ÖZGÜRLÜK PARTİSİ',
          link: '/turkey/toplumsalozgurlukpartisi',
        },
        {
          party_name: 'YENİDEN BİRLİK PARTİSİ',
          link: '/turkey/yenidenbirlikpartisi',
        },
        {
          party_name: 'UMUT PARTİSİ',
          link: '/turkey/umutpartisi',
        },
        {
          party_name: 'YENİ YOL PARTİSİ',
          link: '/turkey/yeniyolpartisi',
        },
        {
          party_name: 'DEĞİŞİM VE DEMOKRASİ PARTİSİ',
          link: '/turkey/degisimvedemokrasipartisi',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

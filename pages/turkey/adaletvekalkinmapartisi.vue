<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/turkey/akparti.png" alt="akp-logo" />
      </div>
      <PartyDetails :partyInfo="partyInfo" :partyDetails="partyDetails" />
    </div>
    <PartyPurpose :partyPurposeList="partyPurposes" purposeText="Partinin Amaclari" />
    <Authentication v-show="!this.$store.state.user.userUID" />
    <div class="party-comment-section" v-if="this.$store.state.user.userUID">
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
      partyDetails: { country: 'turkey', dbcode: 'adaletvekalkinmapartisi' },
      partyInfo: {
        name: 'Adalet ve Kalkinma Partisi',
        shortname: 'AK Parti',
        established: 'August 14, 2001',
        founder: 'Recep Tayyip Erdoğan',
        address: 'Söğütözü Caddesi No 6 Çankaya, Ankara',
        internet_address: 'https://www.akparti.org.tr/',
        public_relation: 'Ömer Çelik',
        current_member: '10,195,904',
        president: 'Recep Tayyip Erdoğan',
        facebook: 'https://www.facebook.com/akparti',
        twitter: 'https://twitter.com/akparti',
        phone: '(0312) 204 50 00',
      },
      partyPurposes: [
        {
          description:
            'Türk Milleti’nin en önemli yönetim kazanımının, Cumhuriyet olduğuna ve egemenliğin, kayıtsız ve şartsız milletimize ait bulunduğuna inanır. “Milli irade”nin tek belirleyici güç olduğunu kabul eder. Millet adına egemenlik yetkisi kullanan kurumların ve kişilerin gözetmeleri gereken en üstün gücün ise, hukukun üstünlüğü ilkesi olduğunu savunur. Akıl, bilim ve tecrübenin yol gösterici olduğunu benimser. Milli irade, hukukun üstünlüğü, akıl, bilim, tecrübe, demokrasi, bireyin temel hak ve özgürlükleri ve ahlakiliği, siyasi yönetim anlayışının temel referansları olarak kabul eder.',
        },
        {
          description:
            'Türk Milleti’nin Ülkesi ve Devletiyle bölünmez bütünlüğünü savunur. Geçmişten gelen değerlerimizi koruyarak, Cumhuriyetimizin kurucusu Mustafa Kemal Atatürk’ün gösterdiği muasır medeniyet seviyesine ulaşmak ve hatta onu aşabilmek için ikinci maddede açıklanan normlar ve genel kabullere uygun faaliyetlerde bulunmayı, siyasi hayatın zemini kabul eder.',
        },
        {
          description:
            '“insan” merkezli siyasi bir Partidir. En üstün hizmetin, insana hizmet olduğuna inanır. İnsanın mutluluğu, huzuru, güveni ve sağlığı çalışmalarının hedefini teşkil eder. Bütün insanlarımızı, “Türkiye” coğrafyasında kurulu “Türkiye Cumhuriyeti Devleti” ismi altında büyük bir aile, diğer devletleri kendi sınırları içinde komşu aileler olarak kabul eder. Sulh içinde bir arada yaşamanın, insana verilen değerle mümkün olacağına inanır',
        },
        {
          description:
            ' insanların farklı inanç, düşünce, ırk, dil, ifade etme, örgütlenme ve yaşama gibi doğuştan var olan tüm haklara sahip olduklarını bilir ve saygı duyar. Farklı olmanın ayrışma değil, pekiştirici kültürel zenginliğimiz olduğunu kabul eder',
        },
        {
          description:
            'birey-devlet ilişkilerinde, demokratik toplum olmanın gereklerine uygun düşmeyen yaklaşımları ve her türlü ayırımcılığı reddeder. Devleti, bireye hizmet için, bireylerin oluşturduğu etkin bir hizmet kurumu olarak kabul eder',
        },
        {
          description:
            'milli iradenin egemen olabilmesinin, bütün siyasal hakların ancak özgür kullanımı ile mümkün olabileceğine, özgür siyasal hak kullanımının ise, çoğulcu ve katılımcı hür demokratik düzen içinde hayat bulabileceğine inanır.',
        },
        {
          description:
            ' millet adına egemenlik yetkisi kullanan yasama, yürütme ve yargı erkleri ile devlet şeması içinde kamusal işlev gören bütün kişi, kurum ve kuruluşların; yetki kullanımlarında ve görev ifa etmelerinde, ikinci maddede atıf yapılan belgelerde yer alan hukuk devleti normlarına uygunluğu gözetir olmaları gereğini vurgular ve bu gerekliliğe uygunluğu, meşruiyetin esası kabul eder.',
        },
        {
          description:
            ' bireylerin inandıkları gibi yaşama, düşündükleri gibi ifade etme haklarının tartışılamaz olduğunu, inanç ve düşüncenin hukuka uygun olarak tanıtım ve propagandasının, bireylere ve sivil toplum kuruluşlarına ait bir hak ve yetki olduğunu, her bireyin her kurumda ve yaşamın her alanında eşit ve ortak hakları bulunduğunu, dolayısıyla devletin, hiç bir inanç ve düşünceden yana veya karşı tutum sergilememesi gerektiğini, Anayasa’da yer alan laiklik ve kanun önünde eşitlik ilkelerinin, bu anlayış ve bakışın güvencesini teşkil ettiğini vurgular. Devletin ve Parti tüzel kişiliğinin bu alanda yüklenebileceği işlevin, sadece hak kullanımlarını sağlayıcı ve güvence altına alıcı özgür ortam hazırlamaktan ibaret olması gereğini kabul eder. Temel hak ve özgürlüklerin, oylama konusu olamayacağını savunur',
        },
        {
          description:
            ' insanın, insanca yaşamasının yöntemi olan sosyal devlet anlayışının hayata geçirilmesine özel önem verir',
        },
        {
          description:
            'ekonomik gelişmenin kaynağı ve hedefi olarak insanı esas kabul eder. Piyasa ekonomisinin, tüm kurum ve kurallarıyla tesisini amaçlar. Devletin ekonomi içindeki rolünü, düzenleyici ve gözetici fonksiyonları ile tanımlar. Gelir dağılımındaki dengesizliği ve işsizliği, ülkemizin en önemli sosyo ekonomik sorunu olarak görür. Küreselleşmenin meydana getirdiği fırsatlardan yararlanmak ve beraberinde getirdiği olumsuzluklardan korunmak amacıyla gereken yapısal dönüşümlerin gerçekleştirilmesini savunur.',
        },
         {
          description:
            'aileyi Türk toplumunun temeli kabul eder. Geçmişle gelecek arasında köprü görevini yerine getiren aile kurumunun; milli değerlerimizin, duygularımızın, düşüncelerimizin ve ülkemize has adet ve geleneklerimizin yeni kuşaklara aktarılmasında en temel, en vazgeçilmez sosyal bir kurum olduğuna inanır.',
        },
         {
          description:
            'herkesin ve özellikle gençliğin; güven içinde, gelişmiş, kalkınmış, refah düzeyi yüksek, her yönden güvenli bir Türkiye sevdalısı olma ülküsüne bağlı, moral değerlerle bezenmiş bireyler olmalarını önemser. Bu nedenle her düzeyde özgür, bilgi toplumu olma yolunda bilimsel araçlarla ve ilmi verilerle donatılmış bir eğitim, öğretim ve öğrenim anlayışını pratiğe geçirmeyi amaçlar.',
        },
         {
          description:
            ' temsili demokrasinin çoğulcu, katılımcı, yarışmacı niteliğini önemser. Bu özelliklerin hayata geçirilmesinde verimli, kaliteli ve denetimli bir kamu yönetiminin kurulmasında, sürdürülmesinde, sivil toplum örgütlerinin önemine ve vazgeçilmezliğine inanır.',
        },
        {
          description:
            'referandumu, halkımızın yönetim sürecine katılımını temin için etkili bir yöntem olarak benimser',
        },
        {
          description:
            ' içte ve dışta güçlü duruşun adaletle mümkün olacağına inanır. Hukukun “güç”ten değil, “güç”ün hukuktan kaynaklandığı inancı ile her iş ve faaliyette doğrunun ve haklının egemen olmasını önleyici engelleri ortadan kaldırmayı, adil yargılanma hakkını ve hak arama özgürlüğünü bütün unsurları ile gerçekleştirmeyi, ülkemizi, onun sahibi insanlarımız için yaşanılır hale getirmeyi, her halükarda milletin ülkesini ve devletinin bağımsızlığını ve üniter yapısını korumayı amaçlar',
        },
        {
          description:
            ' köklü devlet geleneğimizin üzerine bina edildiği “insanı yaşat ki devlet yaşasın” ilkesini, siyasetinin merkezi olarak görür. Milletin tüm fertleri, hiç bir ayrım gözetilmeksizin ülkemizin birinci sınıf vatandaşlarıdır. Türkiye Cumhuriyeti’nin tüm vatandaşları tek bir milleti teşkil eder. Bayrağımız bağımsızlığımızın ortak sembolüdür. Şehitlerimizin emaneti olan, milletimizin üzerinde yaşadığı, bayrağımızın özgürce dalgalandığı toprak, vatanımızdır. Devlet, milletimizin ortak eseridir. AK PARTİ, yukarda belirtilen temel amaç ve hedefler doğrultusunda, Tek Millet, Tek Bayrak, Tek Vatan, Tek Devlet anlayışını sarsılmaz bir ilke olarak kabul eder.',
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

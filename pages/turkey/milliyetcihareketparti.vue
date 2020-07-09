<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/mhp.png" alt="mhp-logo" />
      </div>
      <PartyDetails
        party_name_text="Pari Adi"
        party_shortname_text="Kisaltmasi"
        party_established_text="Kurulus Tarihi"
        party_founder_text="Kurucu Lider"
        party_president_text="Genel Baskan"
        party_publicrelation_text="Iletisim Sozcusu"
        party_currentmember_text="Uye sayisi"
        party_internetaddress_text="Internet Adresi"
        party_telefonnumber_text="Telefon"
        party_address_text="Adres"
        :party_name_value="partyInfo.name"
        :party_shortname_value="partyInfo.shortname"
        :party_established_value="partyInfo.established"
        :party_founder_value="partyInfo.founder"
        :party_president_value="partyInfo.president"
        :party_publicrelation_value="partyInfo.public_relation"
        :party_currentmember_value="partyInfo.current_member"
        :party_internetaddress_value="partyInfo.internet_address"
        :party_telefonnumber_value="partyInfo.phone"
        :party_address_value="partyInfo.address"
        :party_twitter_value="partyInfo.twitter"
        :party_facebook_value="partyInfo.facebook"
      />
    </div>
    <PartyPurpose
      :partyPurposeList="partyPurposes"
      purposeText="Partinin Amaclari"
    />
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
      partyDetails: { country: 'turkey', dbcode: 'milliyetcihareketparti' },
      partyInfo: {
        name: 'Milliyetci Hareket Partisi',
        shortname: 'MHP',
        established: '1969',
        founder: 'Basbug Alparslan Turkes',
        address: 'Ceyhun Atuf Kansu Caddesi No: 128 Balgat, Ankara',
        internet_address: 'http://www.mhp.org.tr',
        public_relation: '?',
        current_member: '479.199',
        president: 'Devlet Bahceli',
        facebook: 'http://www.facebook.com/milliyetcihareketpartisi',
        twitter: 'http://twitter.com/#!/dbdevletbahceli',
        phone: '+90 312 472 55 55',
      },
      partyPurposes: [
        {
          description:
            'Meşruiyeti milli irade olan, insan odaklı, seviyeli, ilkeli, dürüst bir siyaset anlayışı ile adaleti ve hakkaniyeti esas alan bir yönetim anlayışını tesis etmek; toplumsal barış ve huzuru hâkim kılmak',
        },
        {
          description:
            'Yüce Türk Milletinin milli ve manevi değerleri ile tarihi ve kültürel zenginliklerine sahip çıkmak',
        },
        {
          description:
            'Devletin, ülkesi ve milletiyle bölünmez bütünlüğünü, hak ve menfaatlerini korumak,',
        },
        {
          description:
            'İnançlı, yüksek ahlaklı ve çağın gerektirdiği niteliklere sahip nesiller yetiştirmek',
        },
        {
          description:
            'Temel insan hak ve hürriyetlerini geliştirmek, hukukun üstünlüğünü hâkim kılmak, demokratik standartları yükseltmek,',
        },
        {
          description:
            'Hürriyet, adalet, hakkaniyet ve fırsat eşitliğini esas alan, milli, insani ve ahlaki değerlerin ön plana çıktığı siyasi ve toplumsal düzen ile kültürel iklimi tesis etmek',
        },
        {
          description:
            'Kardeşlik hukukunu ve dayanışma kültürünü geliştirmek, milli birlik ve bütünlüğü tesis etmek',
        },
        {
          description:
            'Türk milletinin maddi ve manevi gelişmesi önündeki engelleri kaldırmak; dengeli ve adaletli bölüşüm sistemine dayanan bir gelir dağılımı oluşturmak,',
        },
        {
          description:
            'Yatırım ve istihdam kapasitesi yüksek, ileri teknolojiyi ve teşebbüs hürriyetini esas alan, uluslar arası rekabet gücüne sahip sürdürülebilir büyümeyi gerçekleştirecek bir ekonomi tesis etmek',
        },
        {
          description:
            'Barış, mutluluk ve adaletin hâkim olduğu bir Dünya nizamının tesisinde ülkemizin söz sahibi olmasını sağlamak, suretiyle milletimizi çağın kudretli, itibarlı ve önder toplumlarından biri yapmak ve tarih sahnesinde ebedi kılmaktır.',
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

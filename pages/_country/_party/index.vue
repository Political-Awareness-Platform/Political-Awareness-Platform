<template>
  <div class="container">
    <div class="party_details">
      <div v-if="logo" class="party_flag">
        <img width="100%" :src="require(`~/assets/logos/${this.countryofParty}/${this.dbofParty}.jpg`)"/>
        <div class="social_links">
          <a v-show="partyInternetAddress" :href="partyInternetAddress" target="_blank"><img src="~assets/logos/world-wide-web.svg" alt="website-icon" class="icon" width="42px" height="42px" /></a>
          <a v-show="partyFacebook" :href="partyFacebook" target="_blank"><img src="~assets/logos/facebookicon.svg" alt="facebook-icon" class="icon" width="42px" height="42px" /></a>
          <a v-show="partyTwitter" :href="partyTwitter" target="_blank"><img src="~assets/logos/twittericon.svg" alt="twitter-icon" class="icon" width="42px" height="42px" /></a>
        </div>
      </div>
      <div v-else class="no_flag_display"> 
        <p>🤷‍♂ No Image</p>
      </div>
      <div class="party_stats">
        <div class="block">
          <p><b>{{ $t('PartyPage.PartyName') }} </b><br /> {{ partyName }}</p>
          <p v-show="partyShortName"><b>{{ $t('PartyPage.ShortName') }} </b><br /> {{ partyShortName }}</p>
          <p v-show="partyEstablished"><b>{{ $t('PartyPage.Established') }} </b><br /> {{ partyEstablished }}</p>
          <p v-show="partyFounder"><b>{{ $t('PartyPage.Founder') }} </b><br /> {{ partyFounder }}</p>
          <p v-show="partyPresident"><b>{{ $t('PartyPage.President') }} </b><br /> {{ partyPresident }}</p>
          <p v-show="partyPublicRelation"><b>{{ $t('PartyPage.PublicRelation') }} </b><br /> {{ partyPublicRelation }}</p>
          <p v-show="partyCurrentMember"><b>{{ $t('PartyPage.CurrentMember') }} </b><br /> {{ partyCurrentMember }}</p>
          <p v-show="partyPhone"><b>{{ $t('PartyPage.PhoneNumber') }} </b><br /> {{ partyPhone }}</p>
          <p v-show="partyAddress"><b>{{ $t('PartyPage.Address') }} </b><br /> {{ partyAddress }}</p>
        </div>
      </div>
    </div> 
    <h3 style="text-align:center; font-family: Quicksand;">{{ $t('PartyPage.PartyPurposesTitle') }}</h3>
    <div class="party_purposes" v-for="purpose in partyPurposes" :key="purpose.description">
      <p>{{purpose.description}}</p>
    </div>

    <h2 style="text-align:center; margin-top:16px; font-family: Quicksand;"> {{ $t('PartyPage.CommentSectionTitle') }} </h2>
    
    <div class="comment_sections">
      <div class="positive_comment_section">
        <PartyPCS :country="countryofParty" :dbcode="dbofParty" />
      </div>
      <div class="negative_comment_section">
        <PartyNCS :country="countryofParty" :dbcode="dbofParty" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countryofParty: '',
      dbofParty: '',
      partyPurposes: [],
      partyName : '',
      partyShortName : '',
      partyEstablished : '',
      partyFounder : '',
      partyPresident : '',
      partyPublicRelation : '',
      partyCurrentMember : '',
      partyPhone : '',
      partyAddress : '',
      partyInternetAddress : '',
      partyFacebook : '',
      partyTwitter : '',
      logo : false
    };
  },
  async fetch() {
    this.countryofParty = await this.$store.getters['AllPartiesDetails/getSingleParty'](this.$route.params.party).partyDetails.country;
    this.dbofParty = await this.$store.getters['AllPartiesDetails/getSingleParty'](this.$route.params.party).partyDetails.dbcode;
    this.partyName = await this.$store.getters['AllPartiesDetails/getSingleParty'](this.$route.params.party).partyInfo.name;
    this.partyShortName = await this.$store.getters['AllPartiesDetails/getSingleParty'](this.$route.params.party).partyInfo.shortname;
    this.partyEstablished = await this.$store.getters['AllPartiesDetails/getSingleParty'](this.$route.params.party).partyInfo.established;
    this.partyFounder = await this.$store.getters['AllPartiesDetails/getSingleParty'](this.$route.params.party).partyInfo.founder;
    this.partPresident = await this.$store.getters['AllPartiesDetails/getSingleParty'](this.$route.params.party).partyInfo.president;
    this.partyPublicRelation = await this.$store.getters['AllPartiesDetails/getSingleParty'](this.$route.params.party).partyInfo.public_relation;
    this.partyCurrentMember = await this.$store.getters['AllPartiesDetails/getSingleParty'](this.$route.params.party).partyInfo.current_member;
    this.partyPhone = await this.$store.getters['AllPartiesDetails/getSingleParty'](this.$route.params.party).partyInfo.phone;
    this.partyInternetAddress = await this.$store.getters['AllPartiesDetails/getSingleParty'](this.$route.params.party).partyInfo.internet_address;
    this.partyAddress = await this.$store.getters['AllPartiesDetails/getSingleParty'](this.$route.params.party).partyInfo.address;
    this.partyFacebook = await this.$store.getters['AllPartiesDetails/getSingleParty'](this.$route.params.party).partyInfo.facebook;
    this.partyTwitter = await this.$store.getters['AllPartiesDetails/getSingleParty'](this.$route.params.party).partyInfo.twitter;
    this.partyPurposes = await this.$store.getters['AllPartiesDetails/getSingleParty'](this.$route.params.party).partyPurposes

    try { (require(`~/assets/logos/${this.countryofParty}/${this.dbofParty}.jpg`) != null) ? this.logo = true : this.logo = false;}
    catch (error) { this.logo = false; }

  },
  fetchOnServer: true,
};
</script>

<style lang="scss" scoped> 
.container {
  margin: auto;
  max-width: 1400px;
  p { font-family: "Quicksand"; }

  .party_details { 
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    .party_flag {
      max-width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media screen and (max-width: 1320px) {
        max-width: 100%;
        margin: auto;
      }

      img { border-radius: 12px; border: 1px #eee solid; max-width: 300px; margin: auto; padding: 8px;}

    .social_links {
      margin-top:2rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      
      img { border:none; }
      }
    }

    .no_flag_display {
      border-radius: 12px;
      display: grid;
      place-items: center; 
    }

    .party_stats {
      max-width: 900px;
      

      @media screen and (max-width: 1250px) {
        max-width: 100%;
        margin: 12px auto;
      }

      .block {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      p {
        border: 1px #eee solid;
        border-radius: 12px;
        padding: 10px;
        margin: 8px;
        line-height: 24px;
        font-family: "Quicksand";
      }

      }
    }
  }
  .party_purposes{

    line-height: 24px;

      p {
        font-family: "Quicksand";
        background-color: rgb(247, 247, 247);
        padding: 8px;
        margin-top:10px;
        border-radius: 8px;
        
      }
  }

  .comment_sections {
    display: grid;
    grid-template-columns: 50% 50%;

    @media only screen and (max-width: 800px) {
      grid-template-columns: auto;
    }
  }
}
</style>
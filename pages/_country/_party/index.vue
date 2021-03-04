<template>
  <div class="container">
    <div class="party_details">
      <div v-if="logo" class="party_flag">
        <img width="100%" :src="require(`~/assets/logos/${this.party.partyDetails.country}/${this.party.partyDetails.dbcode}.jpg`)"/>
        <div class="social_links">
          <a :href="this.party.partyInfo.internet_address" target="_blank"><img src="~assets/logos/world-wide-web.svg" alt="website-icon" class="icon" width="32px" height="32px" /></a>
          <a :href="this.party.partyInfo.facebook" target="_blank"><img src="~assets/logos/facebookicon.svg" alt="facebook-icon" class="icon" width="32px" height="32px" /></a>
          <a :href="this.party.partyInfo.twitter" target="_blank"><img src="~assets/logos/twittericon.svg" alt="twitter-icon" class="icon" width="32px" height="32px" /></a>
        </div>
      </div>
      <div class="no_flag_display" v-else> <p>There is no LOGO for this party</p> </div>
      <div class="party_stats">
        <div class="block">
          <p><b>{{ $t('PartyPage.PartyName') }} </b><br /> {{ this.party.partyInfo.name }}</p>
          <p><b>{{ $t('PartyPage.ShortName') }} </b><br /> {{ this.party.partyInfo.shortname }}</p>
          <p v-if="this.party.partyInfo.established"><b>{{ $t('PartyPage.Established') }} </b><br /> {{ this.party.partyInfo.established }}</p>
          <p v-if="this.party.partyInfo.founder"><b>{{ $t('PartyPage.Founder') }} </b><br /> {{ this.party.partyInfo.founder }}</p>
          <p v-if="this.party.partyInfo.president"><b>{{ $t('PartyPage.President') }} </b><br /> {{ this.party.partyInfo.president }}</p>
          <p v-if="this.party.partyInfo.public_relation"><b>{{ $t('PartyPage.PublicRelation') }} </b><br /> {{ this.party.partyInfo.public_relation }}</p>
          <p v-if="this.party.partyInfo.current_member"><b>{{ $t('PartyPage.CurrentMember') }} </b><br /> {{ this.party.partyInfo.current_member }}</p>
          <p v-if="this.party.partyInfo.phone"><b>{{ $t('PartyPage.PhoneNumber') }} </b><br /> {{ this.party.partyInfo.phone }}</p>
          <p v-if="this.party.partyInfo.address"><b>{{ $t('PartyPage.Address') }} </b><br /> {{ this.party.partyInfo.address }}</p>
        </div>
      </div>
    </div> 
    <h3 style="text-align:center; font-family: Quicksand;">{{ $t('PartyPage.PartyPurposesTitle') }}</h3>
    <div class="party_purposes" v-for="purpose in this.party.partyPurposes" :key="purpose.description">
      <p>{{purpose.description}}</p>
    </div>

    <h2 style="text-align:center; font-family: Quicksand;"> {{ $t('PartyPage.CommentSectionTitle') }} </h2>
    
    <div class="comment_sections">
      <div class="positive_comment_section">
        <PositiveCommentSection :partyDetails="this.party.partyDetails" />
      </div>
      <div class="negative_comment_section">
         <NegativeCommentSection :partyDetails="this.party.partyDetails" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      party: null,
      logo : false
    };
  },
  async fetch() {
    const allparties = this.$store.state.AllPartiesDetails.AllPartiesDetails;
    await allparties.forEach((oneparty) => {
      if (this.$route.query.partydbcode === oneparty.partyDetails.dbcode) {
        try {
          (require(`~/assets/logos/${oneparty.partyDetails.country}/${oneparty.partyDetails.dbcode}.jpg`) != null) ? (this.logo = true) : this.logo = false;
        } catch (error) {
          this.logo = false;
        }
        this.party = oneparty;
        return;
      }
    });
  },
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
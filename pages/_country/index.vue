<template>
  <div class="container">

    <div class="country_details">
      <div class="country_flag">
        <img width="100%" :src="require(`~/assets/flags/${this.country.partyDetails.country}.jpg`)" alt="country-flag">
      </div>
      <div class="country_stats">
        <p><b>{{ $t('CountryPage.ActivePoliticParties') }} : </b>{{this.country.partyDetails.active_parties}}</p>
        <p><b>{{ $t('CountryPage.PartiesinParlament') }} : </b>{{this.country.partyDetails.parties_in_parlament}}</p>
        <p><b>{{ $t('CountryPage.NumberofVoters') }} : </b>{{this.country.partyDetails.number_of_voters}}</p>
        <p><b>{{ $t('CountryPage.ContributiontoElection') }} : </b>{{this.country.partyDetails.contribution}}</p>
      </div>
    </div>

    <div class="parties_list">
      <div v-for="party in this.country.parties" :key="party.partyInfo.name" class="party_box">
       <nuxt-link class="party_link" :to="localePath({ name: 'country-party', params: { party: party.partyInfo.name } })"> {{ party.partyInfo.name }} </nuxt-link>
      </div>
    </div>

    <h3 style="text-align:center; margin-top: 1em; font-family: Quicksand;"> {{ $t('CountryPage.IdealImaginaryPartySectionTitle') }} </h3>
    
    <div class="comment_sections">
      <div class="positive_comment_section">
        <CountryPCS :partyDetails="this.country.partyDetails" />
      </div>
      <div class="negative_comment_section">
        <CountryNCS :partyDetails="this.country.partyDetails" />
      </div>
    </div>
  </div>
</template>

<script>
import { countriesDetails } from "~/assets/countryDetails/countrydetails.js";
export default {
  data() {
    return {
      country: {},
    };
  },
  async fetch() {
    await countriesDetails.find( oneofthecountry => {
      if (this.$route.params.country === oneofthecountry.partyDetails.country) {
        return this.country = oneofthecountry;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  
  margin: 0px;

  .country_details { 

    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .country_flag {
      max-width: 320px;
      
      img { border-radius: 12px;}
    }

    .country_stats {

      p { font-family: "Quicksand"; }
      
      @media only screen and (max-width: 800px) {
        margin-top: 10px;
      }
    }
  }

  .parties_list {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: stretch;


    @media screen and (max-width: 600px) {
    overflow: auto hidden;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    overscroll-behavior-x: contain;
    }

    .party_box {
      display: flex;
      justify-content: center;
    }

    .party_link {
      padding: 0.8rem;
      text-decoration: none;
      color: rgb(96, 111, 123); 
      margin: 1rem;
      font-family: "Quicksand";
      width: 180px;
      display: grid;
      place-items: center;
      border-radius: 12px;
      background: #ffffff;
      box-shadow:  6px 6px 16px #e0e0e0, -6px -6px 16px #ffffff;

      @media only screen and (max-width: 500px) {
        width: 280px;
      }
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
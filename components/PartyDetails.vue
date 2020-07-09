<template>
  <div class="party-info">
    <div class="party-details">
      <p>
        <b>{{ party_name_text }} :</b>
        {{ party_name_value }}
      </p>
      <p>
        <b>{{ party_shortname_text }} :</b>
        {{ party_shortname_value }}
      </p>
      <p>
        <b>{{ party_established_text }} :</b>
        {{ party_established_value }}
      </p>
      <p>
        <b>{{ party_founder_text }} :</b>
        {{ party_founder_value }}
      </p>
      <p>
        <b>{{ party_president_text }} :</b>
        {{ party_president_value }}
      </p>
    </div>
    <div class="party-addresses">
      <p>
        <b>{{ party_publicrelation_text }} :</b>
        {{ party_publicrelation_value }}
      </p>
      <p>
        <b>{{ party_currentmember_text }} :</b>
        {{ party_currentmember_value }}
      </p>
      <p>
        <b>{{ party_internetaddress_text }} :</b>
        <a :href="party_internetaddress_value" style="text-decoration: none;"
          >{{ party_internetaddress_value }}
        </a>
        <a :href="party_facebook_value">
          <img
            src="~assets/logos/facebookicon.svg"
            alt="facebook-icon"
            class="icon"
            width="22px"
            height="22px"
          />
        </a>
        <a :href="party_twitter_value">
          <img
            src="~assets/logos/twittericon.svg"
            alt="twitter-icon"
            class="icon"
            width="22px"
            height="22px"
          />
        </a>
      </p>
      <p>
        <b>{{ party_telefonnumber_text }} :</b>
        {{ party_telefonnumber_value }}
      </p>
      <p>
        <b>{{ party_address_text }} :</b>
        {{ party_address_value }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    party_name_text: {
      type: String,
      required: true,
    },
    party_shortname_text: {
      type: String,
      required: true,
    },
    party_established_text: {
      type: String,
      required: true,
    },
    party_founder_text: {
      type: String,
      required: true,
    },
    party_president_text: {
      type: String,
      required: true,
    },
    party_publicrelation_text: {
      type: String,
      required: true,
    },
    party_currentmember_text: {
      type: String,
      required: true,
    },
    party_internetaddress_text: {
      type: String,
      required: true,
    },
    party_telefonnumber_text: {
      type: String,
      required: true,
    },
    party_address_text: {
      type: String,
      required: true,
    },
    party_name_value: {
      type: String,
      required: true,
    },
    party_shortname_value: {
      type: String,
      required: true,
    },
    party_established_value: {
      type: String,
      required: true,
    },
    party_founder_value: {
      type: String,
      required: true,
    },
    party_president_value: {
      type: String,
      required: true,
    },
    party_publicrelation_value: {
      type: String,
      required: true,
    },
    party_currentmember_value: {
      type: String,
      required: true,
    },
    party_internetaddress_value: {
      type: String,
      required: true,
    },
    party_telefonnumber_value: {
      type: String,
      required: true,
    },
    party_address_value: {
      type: String,
      required: true,
    },
    party_twitter_value: {
      type: String,
      required: true,
    },
    party_facebook_value: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.party-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5em;
  margin-top: 1em;

  @media only screen and (max-width: 900px) {
    grid-template-columns: auto;
  }

  .party-details {
    line-height: 2em;
  }

  .party-addresses {
    line-height: 2em;
  }
}
</style>

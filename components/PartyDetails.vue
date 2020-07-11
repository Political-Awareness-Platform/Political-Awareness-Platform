<template>
  <div class="party-info">
    <div class="party-details">
      <p>
        <b>{{ name_text }} :</b>
        {{ partyInfo.name }}
      </p>
      <p>
        <b>{{ shortname_text }} :</b>
        {{ partyInfo.shortname }}
      </p>
      <p>
        <b>{{ established_text }} :</b>
        {{ partyInfo.established }}
      </p>
      <p>
        <b>{{ founder_text }} :</b>
        {{ partyInfo.founder }}
      </p>
      <p>
        <b>{{ president_text }} :</b>
        {{ partyInfo.president }}
      </p>
    </div>
    <div class="party-addresses">
      <p>
        <b>{{ public_relation_text }} :</b>
        {{ partyInfo.public_relation }}
      </p>
      <p>
        <b>{{ current_member_text }} :</b>
        {{ partyInfo.current_member }}
      </p>
      <p>
        <b>{{ internet_address_text }} :</b>
        <a
          :href="partyInfo.internet_address"
          style="text-decoration: none;"
        >{{ partyInfo.internet_address }}</a>
        <a :href="partyInfo.facebook">
          <img
            src="~assets/logos/facebookicon.svg"
            alt="facebook-icon"
            class="icon"
            width="22px"
            height="22px"
          />
        </a>
        <a :href="partyInfo.twitter">
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
        <b>{{ phone_number_text }} :</b>
        {{ partyInfo.phone }}
      </p>
      <p>
        <b>{{ address_text }} :</b>
        {{ partyInfo.address }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: { partyInfo: { type: Object, required: true }, partyDetails: { type: Object, required: true },
  },
  data() {
    return {
      name_text: "Name",
      shortname_text: 'Short Name',
      established_text: 'Established',
      founder_text: 'Founder',
      president_text: 'President',
      public_relation_text: 'Public Relation Person',
      current_member_text: 'Current Member',
      internet_address_text: 'Internet Address',
      phone_number_text: 'Phone Number',
      address_text: 'Address',
    }
  },
  fetch() {
    if (this.partyDetails.country == 'turkey') { // Translation to Turkish
      this.name_text= "Adi",
      this.shortname_text= 'Kisa Adi',
      this.established_text= 'Kurulus',
      this.founder_text= 'Kurucu',
      this.president_text= 'Baskan',
      this.public_relation_text= 'Sozcu',
      this.current_member_text= 'Uye sayisi',
      this.internet_address_text= 'Internet Adresi',
      this.phone_number_text= 'Telefon numarasi',
      this.address_text= 'Adresi'
    }
  },
  fetchOnServer: false,
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

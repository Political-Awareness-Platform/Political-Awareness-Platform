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
          :href="partyInfo.internet_address" target="_blank"
          style="text-decoration: none;"
        >
        <svg style="width:22px; height:22px" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
         </a>
        <a :href="partyInfo.facebook" target="_blank">
          <img
            src="~assets/logos/facebookicon.svg"
            alt="facebook-icon"
            class="icon"
            width="22px"
            height="22px"
          />
        </a>
        <a :href="partyInfo.twitter" target="_blank">
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
    if (this.partyDetails.country == 'germany') { // Translation to Deutsche
      this.name_text= "Name",
      this.shortname_text= 'Kurzer Name',
      this.established_text= 'Etabliert',
      this.founder_text= 'Gründerin',
      this.president_text= 'derGeneraldirektor',
      this.public_relation_text= 'PR-Person',
      this.current_member_text= 'Derzeitiges Mitglied',
      this.internet_address_text= 'Internetadresse',
      this.phone_number_text= 'Telefonnummer',
      this.address_text= 'Adresse'
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
  font-family:Quicksand;

  @media only screen and (max-width: 900px) {
    grid-template-columns: auto;
  }

  .party-details {
    line-height: 2em;
    font-family:Quicksand;
  }

  .party-addresses {
    line-height: 2em;
  }
}

p { font-family: "Quicksand";}
</style>

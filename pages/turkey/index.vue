<template>
  <v-layout column justify-center align-center>
    <v-flex d-flex flex-wrap align-items xs12 sm10 md10 class="mt-8">
      <v-img class="mt-7" height="200px" src="/flags/turkey_flag.png"> </v-img>
      <v-layout column justify-center class="ml-12 mt-6">
        <p><b>Faliyette olan parti sayisi :</b> 83</p>
        <br />
        <p><b>Meclisteki parti sayisi :</b> 11</p>
        <br />
        <p><b>Secmen sayisi :</b> 57.058.636</p>
        <br />
        <p><b>Secime katilim yuzdesi :</b> 84,67</p>
      </v-layout>
    </v-flex>

    <v-flex class="mb-7">
      <h2>Partiler</h2>
    </v-flex>

    <v-flex>
      <v-sheet class="mx-auto" max-width="700">
        <v-slide-group multiple>
          <v-slide-item
            class="ma-1"
            v-for="party in parties"
            :key="party.party_name"
          >
            <v-card max-width="300" class="mx-2" nuxt-link :to="party.link">
              <v-img contain height="100px" width="180px" :src="party.logo">
              </v-img>
              <v-card-text class="text--primary text-center">
                <p>{{ party.party_name }}</p>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-flex>

    <v-flex mt-6>
      <h2>Ideal Parti Bolumu</h2>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      parties: [
        {
          party_name: "Demokrat Parti",
          link: "/turkey/demokratparti",
          logo: "/party_logos/turkey/demokrat_parti_logo.png"
        },
        {
          party_name: "Milliyetci Hareket Parti",
          link: "/turkey/milliyetcihareketparti",
          logo: "/party_logos/turkey/mhp_logo.png"
        },
        {
          party_name: "Millet Partisi",
          link: "/turkey/milletpartisi",
          logo: "/party_logos/turkey/millet_partisi_logo.png"
        }
      ]
    };
  },
  fetch() {}
};
</script>

<style></style>

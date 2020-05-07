<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md8 mt-5>
      <p class="text-justify font-weight-light">
        This platform created to heal the relationship problem between citizens
        and politicians / political parties. Hopefully, this platform may help
        citizens and political parties to understand each other better.
      </p>

      <p class="text-justify font-weight-light">
        There are 3 goals of this platform :
      </p>
      <v-row class="center mt-5">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header>Goal I</v-expansion-panel-header>
            <v-expansion-panel-content>
              Understanding each party's purpose. Most of the citizens can only
              name a few political parties however there are ususaly more than
              thier aknowlegde registered parties to vote on. Therefore, this
              platform aims to help citizens to get to know every single option
              when it comes to voting. Many people do not like politics and do
              not feel like voting for any party at all because they do not like
              the popular parties or do not know of the unpopular parties
              because of the media influence. Therefore, in this platform every
              party will be portrayed equally and hopefully, citizens will gain
              access to knowledge of not well-known parties as well.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Goal II</v-expansion-panel-header>
            <v-expansion-panel-content>
              This platform also aims to find out what people think about each
              party, positively and negatively. Therefore we can see what
              parties good and bad at according to the citizens. Then we can
              easily compare parties, and politicians can also understand what
              citizens think about them in general.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Goal III</v-expansion-panel-header>
            <v-expansion-panel-content>
              Eventually, this platform will also help citizens to express their
              ideas or desires from an imaginary political party, what to focus
              on, and what to avoid the most. Therefore, political parties can
              see what citizens care about the most and the least.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>

    </v-flex>
    <v-flex xs12 sm8 md8 class="mt-12">
      <h2 class="text-justify font-weight-bold">Available countries</h2>
    </v-flex>

    <v-container>
      <v-row>
        <v-card class="mx-auto ma-3" max-width="300" nuxt-link to="/turkey">
          <v-img
            class="white--text align-end"
            height="200px"
            src="/flags/turkey_flag.png"
          >
          </v-img>
          <v-card-text class="text--primary text-center">
            <h2>Türkiye</h2>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto ma-3" max-width="300" nuxt-link to="/germany">
          <v-img
            class="white--text align-end"
            height="200px"
            src="/flags/germany_flag.png"
          >
          </v-img>
          <v-card-text class="text--primary text-center">
            <h2>Deutschland</h2>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  components: {}
};
</script>

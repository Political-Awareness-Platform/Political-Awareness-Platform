<template>
  <v-app>
    <v-app-bar app flat class="blue lighten-5">
      <v-spacer></v-spacer>
      <nuxt-link to="/" style="text-decoration:none;">
      <v-toolbar-title class="font-weight-bold" >Political Awareness Platfrom</v-toolbar-title>
      </nuxt-link>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
    
    }
  }
}
</script>

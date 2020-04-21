<template>
  <v-app>
<<<<<<< HEAD
    <v-app-bar app flat class="blue lighten-5">
      <v-spacer></v-spacer>
      <v-toolbar-title class="font-weight-bold">Political Awareness Platfrom</v-toolbar-title>
      <v-spacer></v-spacer>
=======
    <v-app-bar app>
      <v-toolbar-title v-text="title" />
>>>>>>> 068dea6f99c81861d9df4b744f14f60a99f2f3ca
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
<<<<<<< HEAD

    <v-footer>
=======
    <v-footer app>
>>>>>>> 068dea6f99c81861d9df4b744f14f60a99f2f3ca
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
<<<<<<< HEAD
    return {}
=======
    return {
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
>>>>>>> 068dea6f99c81861d9df4b744f14f60a99f2f3ca
  }
}
</script>

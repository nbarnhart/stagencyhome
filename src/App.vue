<template>
  <div id="app">
    <v-app>

    <!-- Top Navigation -->

      <v-toolbar fixed style="background-color: white">
        <v-toolbar-title>STAGENCY</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat router-link to="/">Festivals</v-btn>
          <v-btn flat router-link to="agent">Agents</v-btn>
          <v-btn flat router-link to="#">Contact</v-btn>
          <v-btn flat router-link to="#">Login</v-btn>
        </v-toolbar-items>
      </v-toolbar>


    <router-view/>

    <!-- Contact Form -->



    <!-- Footer -->

    <v-footer dark class="pa-3">
      <v-spacer></v-spacer>
      <div>© {{ new Date().getFullYear() }} Stagency, LLC</div>
    </v-footer>
    </v-app>
  </div>
</template>


<!-- Start Script -->

<script>

export default {
  name: 'app',
  $validates: true,
  data () {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.name = ''
      this.email = ''
      this.$validator.clean()
    }
  }

}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

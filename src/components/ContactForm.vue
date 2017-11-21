<template>
<v-container fluid>
  <v-layout class="sectional">
    <h2 style="color: white;">Send Us A Note</h2>
  </v-layout>
  <v-layout>
      <form>
        <v-text-field
          v-model="name"
          label="Name"
          :counter="10"
          :error-messages="errors.collect('name')"
          v-validate="'required|max:10'"
          data-vv-name="name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="E-mail"
          :error-messages="errors.collect('email')"
          v-validate="'required|email'"
          data-vv-name="email"
          required
        ></v-text-field>

        <v-btn @click="submit">submit</v-btn>
      </form>
  </v-layout>
</v-container>
</template>


<script>
  export default {
    name: 'ContactForm',
    data () {
      return {
        valid: false,
        name: '',
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      }
    }
  }
</script>

<style>

  .sectional {
    margin-top: 10%;
    margin-bottom: 10%;
    padding: 2%;
    background-color: #1976D2;
  }

</style>

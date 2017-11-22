<template>
  <v-app>
    <v-container fluid>
      <div class="sectional">
        <h2 style="color: white;">Questions? Contact Us.</h2>
      </div>

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
            <v-text-field
              v-model="message"
              label="Message"
              :error-messages="errors.collect('message')"
              v-validate="'required|message'"
              data-vv-name="message"
              required
            ></v-text-field>
            <v-btn color="primary" @click="submit">submit</v-btn>
          </form>

    </v-container>
  </v-app>
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
        ],
        message: '',
        messageRules: [
          (v) => !!v || 'Message is required',
          (v) => v.length <= 500 || 'Name must be less than 500 characters'
        ],
      }
    }
  }
</script>

<style>

  .sectional {
    margin-top: 0%;
    margin-bottom: 5%;
    padding: 2%;
    background-color: #1976D2;
  }

  form {
    margin-right: 20%;
    margin-left: 20%;
  }

</style>

<template>
  <v-app>
    <v-container fluid grid-list-md >

      <!-- Headline Page -->

      <v-layout style="background-color: white;">
        <v-flex xs12 class="home_top">
          <h1>BOOK MORE FESTIVALS.</h1>
          <h2>Stagency helps agents organize and optimize music festival submissions.</h2>
        </v-flex>
      </v-layout>

      <!-- Feature 1 -->

        <v-layout row row justify-center class="feature_gray">
          <v-flex class="feature_text_gray">
                <h2>Submit Artists with One Click</h2>
                <br>
                <p>Select a festival, select the artists and submit with one click. We create a beautiful template email submission automatically. No more crafting submission emails for every festival.</p>
            <div>
              <v-btn color="primary">Sign Up Free</v-btn>
            </div>
          </v-flex>
          <v-flex class="feature_image_gray">
                <img src="../assets/agent_feature1.png" alt="Festival Feature 1">
          </v-flex>
        </v-layout>

      <!-- Feature 2 -->

      <v-layout row row justify-center class="feature_white">
        <v-flex xs6 class="feature_image_white">
          <img src="../assets/agent_feature2.png" alt="Festival Feature 1">
        </v-flex>
        <v-flex xs6 class="feature_text_white">
          <h2>Your Up & Coming Artists WILL Get Noticed!</h2>
          <br>
          <p>Deliver all of your client submissions to festivals as one interactive page to make your clients stand out.</p>
          <div>
            <v-btn color="primary">Sign Up Free</v-btn>
          </div>
        </v-flex>
      </v-layout>

      <!-- Feature 3 -->

      <v-layout row row justify-center class="feature_gray">
        <v-flex xs6 class="feature_text_gray">
          <h2>Keep Your Clients Updated</h2>
          <br>
          <p>Sign your clients up for automated alerts on your festival submission activity OR simply send them an activity report with one click.</p>
          <div>
            <v-btn color="primary">Sign Up Free</v-btn>
          </div>
        </v-flex>
        <v-flex xs6 class="feature_image_gray">
          <img src="../assets/agent_feature3.png" alt="Festival Feature 1">
        </v-flex>
      </v-layout>


      <!-- Feature 4 -->

      <v-layout row row justify-center class="feature_white">
        <v-flex xs6 class="feature_image_white">
          <img src="../assets/agent_feature4.png" alt="Festival Feature 1">
        </v-flex>
        <v-flex xs6 class="feature_text_white">
          <h2>Never Miss a Festival Deadline</h2>
          <br>
          <p>Discover new festivals and submit on time with our submission deadline alerts. Coming Soon!</p>
          <div>
            <v-btn color="primary">Sign Up Free</v-btn>
          </div>
        </v-flex>
      </v-layout>

        <contact-form></contact-form>

    </v-container>
  </v-app>
</template>



<script>
  import ContactForm from '@/components/ContactForm'

  export default {
    name: 'Agent',
    components: { ContactForm }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-size: 20pt;
  font-weight: normal;
}
h1 {
  font-size: 38pt;
  font-weight: heavy;

}
p {
  font-size: 14pt;
  font-weight: normal;

}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .home_top {
    margin-top: 25%;
    margin-bottom: 25%;
    padding: 5%;
  }
  .feature_gray {
    background-color: whitesmoke;
    text-align: left;
  }

.feature_white {
  background-color: white;
  text-align: left;
}

  .feature_text_gray {
    margin-top: 15%;
    margin-bottom: 10%;
    margin-left: 10%;
    margin-right: 0%;
    padding: 5%;
  }
  .feature_image_gray {
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 5%;
    margin-right: 10%;
    padding: 5%;
  }
.feature_text_white {
  margin-top: 15%;
  margin-bottom: 10%;
  margin-left: 0%;
  margin-right: 10%;
  padding: 5%;
}
.feature_image_white {
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 10%;
  margin-right: 10%;
  padding: 5%;
}

</style>

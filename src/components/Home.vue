<template>
  <v-app>
  <v-container fluid grid-list-md >

    <!-- Headline Page -->

    <v-layout>
      <v-flex xs12 class="home_top">
        <h1>BOOK THE BEST ACTS FASTER.</h1>
        <h2>Stagency aggregates your festival artist submissions onto one interactive page. </h2>
      </v-flex>
    </v-layout>

    <!-- Feature 1 -->

      <v-layout row row justify-center class="feature_gray">
        <v-flex class="feature_text_gray">
              <h2>Artist Info, Songs & Videos Embedded on One Page</h2>
              <br>
              <p>Integrated with YouTube, Spotify & social media so you can do all your artist research on one page!</p>
          <div>
            <v-btn color="primary">Sign Up Free</v-btn>
          </div>
        </v-flex>
        <v-flex class="feature_image_gray">
              <img src="../assets/festival_feature1.png" alt="Festival Feature 1">
        </v-flex>
      </v-layout>

    <!-- Feature 2 -->

    <v-layout row row justify-center class="feature_white">
      <v-flex xs6 class="feature_image_white">
        <img src="../assets/festival_feature_thumbs.png" alt="Festival Feature 1">
      </v-flex>
      <v-flex xs6 class="feature_text_white">
        <h2>Rate Artists as You Go</h2>
        <br>
        <p>Simply click a thumbs up or thumbs down to rate artists as you review. Save your shortlist and reach out to the best artists with offers.</p>
        <div>
          <v-btn color="primary">Sign Up Free</v-btn>
        </div>
      </v-flex>
    </v-layout>

    <!-- Feature 3 -->

    <v-layout row row justify-center class="feature_gray">
      <v-flex xs6 class="feature_text_gray">
        <h2>Artists Can Apply Directly From Your Website</h2>
        <br>
        <p>Copy and paste our embedded form onto your submission page and artists who apply directly will appear in your feed.</p>
        <div>
          <v-btn color="primary">Sign Up Free</v-btn>
        </div>
      </v-flex>
      <v-flex xs6 class="feature_image_gray">
        <img src="../assets/festival_feature3.png" alt="Festival Feature 1">
      </v-flex>
    </v-layout>


    <!-- Feature 4 -->

    <v-layout row row justify-center class="feature_white">
      <v-flex xs6 class="feature_image_white">
        <img src="../assets/festival_feature_collaborate.png" alt="Festival Feature 1">
      </v-flex>
      <v-flex xs6 class="feature_text_white">
        <h2>Collaborate With Your Team</h2>
        <br>
        <p>Multiple user accounts allows your team to view and rate artists simultaneously.</p>
        <div>
          <v-btn color="primary">Sign Up Free</v-btn>
        </div>
      </v-flex>
    </v-layout>

    <layout>
      <contact-form></contact-form>
    </layout>

  </v-container>

  </v-app>
</template>



<script>

  import ContactForm from '@/components/ContactForm'

  export default {
    name: 'Home',
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
    margin-bottom: 30%;
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
    margin-top: 10%;
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
  margin-top: 10%;
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

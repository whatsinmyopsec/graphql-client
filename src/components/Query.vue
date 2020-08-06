<template>
  <v-app dark>
    <v-layout align-center justify-center>
      <v-flex xs4 sm8 md4 text-xs-center>
        <v-card>
          <v-form>
            <v-text-field
              v-model="query"
              label="query"
              ref="textinput"
              class="query-input"
              @input="$v.query.$touch()"
            ></v-text-field>
            <v-btn @click="submit">submit</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
import WebFontLoader from "webfontloader";
//import queryservice from "@/services/queryservice";
export default {
  data: () => ({
    query: "",
  }),
  mounted() {
    WebFontLoader.load({
      google: {
        families: ["Roboto:100,300,400,500,700,900"],
      },
      active: this.setFontLoaded,
    });
  },
  methods: {
    // getQuery: function(Query) {
    //   queryservice
    //     .fetchQuery(Query)
    //     .then((response) => {
    //       this.query = data.response;
    //     })
    //     .catch((error) => {
    //       this.errors.push(error);
    //       console.log(error);
    //     });
    // },
  },
};
</script>

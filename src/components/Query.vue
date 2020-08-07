<template>
  <v-app max-height="200" dark>
    <v-flex xs12>
      <v-layout align-center justify-center raw wrap>
        <v-flex xs12 sm6 md4 lg5>
          <v-card dark class=" elevation-12">
            <v-form class="px-3">
              <v-textarea v-model="Query" label="Query"></v-textarea>
            </v-form>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="success mx-0 mt-3"
                @click="() => getQuery(Query)"
                justify-center
                >submit</v-btn
              >
            </v-card-actions>
          </v-card>
          <ul>
            <li>
              {{ results.data }}
            </li>
          </ul>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-app>
</template>
<script>
import WebFontLoader from "webfontloader";
import queryservice from "@/services/queryservice";

export default {
  data: () => ({
    Query: "",
    results: [],
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
    async getQuery(Query) {
      await queryservice
        .fetchQuery(Query)
        .then((Response) => {
          this.results = JSON.parse(JSON.stringify(Response.data));
          console.log(this.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

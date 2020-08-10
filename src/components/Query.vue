<template>
  <v-layout class="ml-16 pl-13">
    <v-flex xs12 sm6 md4 lg7 text-xs-center>
      <v-card dark max-width="800" class="elevation-12">
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
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

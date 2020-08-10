<template>
  <v-app>
    <v-app-bar app>Mapping the mappers </v-app-bar>
    <v-main>
      <v-row>
        <v-col md="auto"><app-Map /></v-col>
        <v-col class="ml-13"><app-Query /></v-col>
      </v-row>
      <app-howto />
    </v-main>
  </v-app>
</template>

<script>
import Query from "@/components/Query.vue";
import howto from "@/components/howto.vue";
import Map from "@/components/Map.vue";
export default {
  name: "App",

  components: {
    "app-Query": Query,
    "app-howto": howto,
    "app-Map": Map,
  },

  data: () => ({
    //
  }),
};
</script>

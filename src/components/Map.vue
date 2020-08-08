<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row :align="start" :justify="start">
          <v-card>
            <WorldMap :visitedCountries="visitedCountries"></WorldMap>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WorldMap from "./WorldMap";
import Countries from "../assets/countries";

export default {
  components: {
    WorldMap,
  },
  data() {
    return {
      countries: Countries,
      visitedCountries: {},
      selected: null,
    };
  },
  methods: {
    addToVisited(country) {
      this.$set(this.visitedCountries, country.code, 500);

      this.selected = null;
    },
  },
};
</script>

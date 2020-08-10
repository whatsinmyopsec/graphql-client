<template>
  <v-container fluid>
    <v-row class="ml-3">
      <v-col cols="12">
        <v-row :align="start" :justify="start">
          <v-card outline>
            <v-select
              label="createdAt"
              :items="dates"
              v-model="selected"
              placeholder="Select date to query"
            ></v-select>
            <v-card-actions>
              <v-btn @click="() => getQuery(selected)">Search</v-btn>
            </v-card-actions>
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
import Dates from "../assets/dates";
import queryservice from "@/services/queryservice";

export default {
  components: {
    WorldMap,
  },
  data() {
    return {
      countries: Countries,
      dates: Dates,
      visitedCountries: {},
      selected: null,
    };
  },
  methods: {
    addToVisited(country) {
      this.$set(this.visitedCountries, country.code, 500);

      this.selected = null;
    },

    async getQuery(Date) {
      await queryservice
        .fetchQuery(`{getAllIpinfosByDate(createdAt:"${Date}"){country}}`)
        .then((Response) => {
          this.results = JSON.parse(JSON.stringify(Response.data));
          console.log(this.results.data.getAllIpinfosByDate);
          this.$set(
            this.visitedCountries,
            this.results.data.getAllIpinfosByDate,
            500
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

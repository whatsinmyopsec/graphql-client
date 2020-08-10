<template>
  <v-container>
    <v-row class="ml-2">
      <v-col cols="12">
        <v-row :align="start" :justify="start">
          <v-card outline>
            <v-select
              :items="dates"
              v-model="selected"
              placeholder="Select date to query"
            ></v-select>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon color="green" @click="() => getQuery(selected)"
                ><v-icon>mdi-map</v-icon></v-btn
              >
            </v-card-actions>
            <WorldMap :visitedCountries="visitedCountries"></WorldMap>
            <v-list>
              <v-list-item
                v-for="(_, country) in visitedCountries"
                :key="country"
              >
                {{ country }}
              </v-list-item>
            </v-list>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WorldMap from "./WorldMap";
import Dates from "../assets/dates";
import queryservice from "@/services/queryservice";

export default {
  components: {
    WorldMap,
  },
  data() {
    return {
      dates: Dates,
      visitedCountries: {},
      selected: null,
    };
  },
  methods: {
    getQuery(Date) {
      const self = this;
      queryservice
        .fetchQuery(`{getAllIpinfosByDate(createdAt:"${Date}"){country}}`)
        .then((Response) => {
          const results = JSON.parse(JSON.stringify(Response.data));
          self.visitedCountries = results.data.getAllIpinfosByDate.reduce(
            (memo, { country }) => {
              memo[country] = 500;
              return memo;
            },
            {}
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

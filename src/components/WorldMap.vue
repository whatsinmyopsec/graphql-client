<template>
  <div class="worldmap">
    <vue-world-map
      id="worldmap"
      v-bind:countryData="visitedCountries"
      v-bind:defaultCountryFillColor="map.defaultCountryFillColor"
      v-bind:highColor="map.highColor"
      v-bind:countryStrokeColor="map.countryStrokeColor"
      v-bind:lowColor="map.lowColor"
    ></vue-world-map>
  </div>
</template>

<script>
import VueWorldMap from "vue-world-map";

export default {
  components: {
    VueWorldMap,
  },
  props: {
    visitedCountries: Object,
  },
  data() {
    return {
      map: {
        defaultCountryFillColor: "#00000000",
        highColor: "white",
        lowColor: "#00000000",
        countryStrokeColor: "#adadad",
      },
    };
  },
};
</script>

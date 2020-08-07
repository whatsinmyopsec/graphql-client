<template>
  <v-app dark>
    <v-app-bar app dark> </v-app-bar>
    <v-main>
      <app-Query />
      <app-howto />
    </v-main>
  </v-app>
</template>

<script>
import Query from "@/components/Query.vue";
import howto from "@/components/howto.vue";
export default {
  name: "App",

  components: {
    "app-Query": Query,
    "app-howto": howto,
  },

  data: () => ({
    //
  }),
};
</script>

import Vue from "vue";
import VueRouter from "vue-router";
import Query from "../views/Query.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Query",
    component: Query,
  },
  {
    path: "/about",
    name: "About",
    compontent: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

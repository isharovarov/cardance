import Home from "@/pages/home/index.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: Home }],
});

export default routes;

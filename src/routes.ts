import { createRouter, createWebHistory } from "vue-router";

const Home = { template: "<div>Home</div>" };
const About = { template: "<div>About</div>" };

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
  ],
});

export default routes;

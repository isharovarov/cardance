import App from "@/App.vue";
import routes from "@/routes";
import { createPinia } from "pinia";
import { createApp } from "vue";

import "@/assets/styles/index.scss";
import "@/assets/styles/tailwind.css";

const app = createApp(App);
const pinia = createPinia();

app.use(routes).use(pinia).mount("#app");

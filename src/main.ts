import { createApp } from "vue";
import App from "@/App.vue";
import routes from "@/routes";

import "@/assets/styles/index.scss";
import "@/assets/styles/tailwind.css";

createApp(App).use(routes).mount("#app");

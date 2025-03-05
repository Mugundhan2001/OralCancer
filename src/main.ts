import { createApp } from "vue";
import { createPinia } from "pinia";
import { createClient } from "@supabase/supabase-js";
import App from "./App.vue";
import router from "./router";

import "./assets/tailwind.css";

const supabase = createClient(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_KEY);

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.provide("supabase", supabase);

app.mount("#app");

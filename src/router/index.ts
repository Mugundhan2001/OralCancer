import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";
import { useAuthStore } from "@/stores/authStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/auth", name: "auth", component: AuthView },
  ],
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const user = await authStore.getUser();
  if (user && to.name === "auth") {
    next({ name: "home" });
  } else if (!user && to.name !== "auth") {
    next({ name: "auth" });
  } else {
    next();
  }
});

export default router;

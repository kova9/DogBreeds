import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FavoritesView from "../views/FavoritesView.vue";
import HomeV2View from "../views/HomeV2View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeV2View,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: FavoritesView,
    },
    {
      path: "/v1",
      name: "homeV1",
      component: HomeView,
    },
  ],
});

export default router;

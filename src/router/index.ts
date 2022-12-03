import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import SearchPage from "@/views/SearchPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/search",
    name: "search",
    component: SearchPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./views/Home";
import AboutPage from "./views/About";
import ProductPage from "./views/Product";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/shop", component: ProductPage },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

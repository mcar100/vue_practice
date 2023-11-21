import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./views/Home";
import AboutPage from "./views/About";
import ProductPage from "./views/Product";
import ToDoListPage from "./views/ToDoList";

const routes = [
  { path: "/", component: ToDoListPage },
  { path: "/about", component: AboutPage },
  { path: "/shop", component: ProductPage },
  { path: "/home", component: HomePage },
  { path: "/todolist", component: ToDoListPage },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

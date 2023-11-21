import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./views/Home";
import ProductPage from "./views/Product";
import ToDoListPage from "./views/ToDoList";

const routes = [
  { path: "/", component: ToDoListPage },
  { path: "/tutorial", component: ProductPage },
  { path: "/home", component: HomePage },
  { path: "/todolist", component: ToDoListPage },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "list",
      component: () => import("../views/TaskListView.vue"),
    },
    {
      path: "/create",
      name: "create",
      meta: {
        title: "Создать запись",
        action: "create",
      },

      component: () => import("../views/CreateTaskView.vue"),
    },
  ],
});

export default router;

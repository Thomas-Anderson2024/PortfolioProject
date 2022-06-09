import { createRouter, createWebHistory } from "vue-router";
import home from "../views/Home.vue";
import education from "../views/Education.vue";
import skills from "../views/Skills.vue";
import sports from "../views/Sports.vue";
import work from "../views/Work.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/education",
      name: "education",
      component: education,
    },
    {
      path: "/skills",
      name: "skills",
      component: skills,
    },
    {
      path: "/sports",
      name: "sports",
      component: sports,
    },
    {
      path: "/work",
      name: "work",
      component: work,
    },
  ],
});
export default router;

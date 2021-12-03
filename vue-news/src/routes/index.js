import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: NewsView,
    },
    {
      path: "/news",
      component: NewsView,
    },
    {
      path: "/ask",
      component: AskView,
    },
    {
      path: "/jobs",
      component: JobsView,
    },
    {
      path: "/user",
      componet: UserView,
    },
    {
      path: "/item",
      componet: ItemView,
    },
  ],
});

export default router;

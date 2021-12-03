import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
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
  ],
});

export default router;

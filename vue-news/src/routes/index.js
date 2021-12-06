import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
// import createListView from "../views/CreateListView.js";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      name: "news",
      path: "/news",
      component: NewsView,
      //component: createListView("NewsView"),
    },
    {
      name: "ask",
      path: "/ask",
      component: AskView,
      //component: createListView("AskView"),
    },
    {
      name: "jobs",
      path: "/jobs",
      component: JobsView,
      //component: createListView("JobsView"),
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import bus from "../utils/bus.js";
import store from "../store/index.js";
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
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        console.log(from, next);
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            // bus.$emit("end:spinner");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      name: "ask",
      path: "/ask",
      component: AskView,
      //component: createListView("AskView"),
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        console.log(from, next);
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            // bus.$emit("end:spinner");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      name: "jobs",
      path: "/jobs",
      component: JobsView,
      //component: createListView("JobsView"),
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        console.log(from, next);
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            // bus.$emit("end:spinner");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
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

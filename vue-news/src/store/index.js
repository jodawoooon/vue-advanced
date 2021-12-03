import Vuex from "vuex";
import Vue from "vue";
import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((res) => {
          console.log(res.data);
          context.commit("SET_NEWS", res.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then((res) => {
          console.log(res.data);
          context.commit("SET_JOBS", res.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    FETCH_ASK(context) {
      fetchAskList()
        .then((res) => {
          console.log(res.data);
          context.commit("SET_ASK", res.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
});

export default store;

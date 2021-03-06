import Vuex from "vuex";
import Vue from "vue";
import mutations from "./mutations";
import actions from "./actions.js";
import getters from "./getters.js";
import state from "./state.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
});

export default store;

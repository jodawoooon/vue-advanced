import { fetchList, fetchUserInfo, fetchItemInfo } from "../api/axios";

export default {
  //promise
  // FETCH_LIST({ commit }, page) {
  //   return fetchList(page)
  //     .then(({ data }) => commit("SET_LIST", data))
  //     .catch((err) => console.log(err));
  // },

  //async
  async FETCH_LIST({ commit }, page) {
    const res = await fetchList(page);
    commit("SET_LIST", res.data);
    return res;
  },
  async FETCH_USER({ commit }, name) {
    try {
      const res = await fetchUserInfo(name);
      commit("SET_USER", res.data);
      return res;
    } catch (err) {
      console.log(err);
    }
  },
  async FETCH_ITEM({ commit }, id) {
    try {
      const res = await fetchItemInfo(id);
      commit("SET_ITEM", res.data);
      return res;
    } catch (err) {
      console.log(err);
    }
  },
};

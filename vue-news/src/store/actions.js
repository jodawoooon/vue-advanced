import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
} from "../api/axios";

export default {
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
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then((res) => {
        console.log(res.data);
        commit("SET_JOBS", res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then((res) => {
        console.log(res.data);
        commit("SET_ASK", res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        console.log(data);
        commit("SET_USER", data);
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  FETCH_ITEM({ commit }, id) {
    fetchItemInfo(id)
      .then(({ data }) => {
        console.log(data);
        commit("SET_ITEM", data);
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};

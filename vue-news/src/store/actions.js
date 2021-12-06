import { fetchList, fetchUserInfo, fetchItemInfo } from "../api/axios";

export default {
  FETCH_LIST({ commit }, page) {
    return fetchList(page)
      .then(({ data }) => commit("SET_LIST", data))
      .catch((err) => console.log(err));
  },
  // FETCH_NEWS(context) {
  //   fetchNewsList()
  //     .then((res) => {
  //       console.log(res.data);
  //       context.commit("SET_NEWS", res.data);
  //       return res;
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // },
  // FETCH_JOBS({ commit }) {
  //   fetchJobsList()
  //     .then((res) => {
  //       console.log(res.data);
  //       commit("SET_JOBS", res.data);
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // },
  // FETCH_ASK({ commit }) {
  //   fetchAskList()
  //     .then((res) => {
  //       console.log(res.data);
  //       commit("SET_ASK", res.data);
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // },
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        console.log(data);
        commit("SET_USER", data);
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  FETCH_ITEM({ commit }, id) {
    return fetchItemInfo(id)
      .then(({ data }) => {
        console.log(data);
        commit("SET_ITEM", data);
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};

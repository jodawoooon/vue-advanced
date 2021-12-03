import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/axios";

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
};

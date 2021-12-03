<template>
  <div>
    <div v-for="ask in asks" :key="ask.id">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/axios.js";

export default {
  data() {
    return {
      asks: [],
    };
  },
  created() {
    var vm = this;
    fetchAskList()
      .then(function (res) {
        console.log(res);
        vm.asks = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>

<style></style>

<template>
  <div>
    <div v-for="job in jobs" :key="job.id">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/axios.js";

export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    var vm = this;
    fetchJobsList()
      .then(function (res) {
        console.log(res);
        vm.jobs = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>

<style></style>

<template>
  <div>
    <div v-for="user in users" :key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api/axios.js";

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    var vm = this;
    fetchNewsList()
      .then(function (res) {
        console.log(res);
        vm.users = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>

<style></style>

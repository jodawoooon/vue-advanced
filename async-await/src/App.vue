<template>
  <div id="app">
    {{ items.name }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      items: [],
    };
  },
  methods: {
    loginUser() {
      axios
        .get("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => {
          console.log(res);
          this.items = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
  async loginUser1() {
    try {
      var res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
      if (res.data.id === 1) {
        console.log("인증되었습니다!");
        var list = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        this.items = list.data;
      }
    } catch (err) {
      console.log(err);
    }
  },
  mounted() {
    this.loginUser();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

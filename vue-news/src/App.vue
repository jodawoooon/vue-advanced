<template>
  <div id="app">
    <toolbar></toolbar>
    <transition :name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Toolbar from "./components/ToolBar.vue";

export default {
  name: "App",
  components: {
    Toolbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}

body {
  padding: 0;
  margin: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

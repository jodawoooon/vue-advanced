<template>
  <div id="app">
    <toolbar></toolbar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import Toolbar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus.js";

export default {
  name: "App",
  components: {
    Toolbar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

a {
  color: #272525;
  text-decoration: none;
}

a:hover {
  color: #e97911;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
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

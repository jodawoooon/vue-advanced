<template>
  <div class="header">
    <router-link to="/news" class="item">News</router-link>
    <router-link to="/ask" class="item">Ask</router-link>
    <router-link to="/jobs" class="item">Jobs</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.item {
  font-weight: 800;
  margin-right: 15px;
}
.header {
  color: white;
  background: #e97911;
  display: flex;
  padding: 8px;
}

.header .router-link-exact-active {
  color: #35495e;
}

.header a {
  color: white;
}
</style>

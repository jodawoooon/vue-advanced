<template>
  <div>
    <div class="user-container">
      <div><i class="fas fa-user"></i></div>
      <div class="user-desc">
        <router-link :to="`/user/${itemInfo.user}`">
          {{ itemInfo.user }}
        </router-link>
        <div class="time">
          {{ itemInfo.time_ago }}
        </div>
      </div>
    </div>
    <div class="content">
      <h2>{{ itemInfo.title }}</h2>
      <div v-html="itemInfo.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    itemInfo() {
      return this.$store.state.item;
    },
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style scoped>
.user-container {
  padding: 0.5rem;
  display: flex;
  align-items: center;
}
.fa-user {
  font-size: 2.5rem;
}
.user-desc {
  padding-left: 8px;
}
.content {
  padding: 1rem;
}
</style>

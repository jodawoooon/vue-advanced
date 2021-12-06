<template>
  <div>
    <section>
      <user-profile :info="itemInfo">
        <router-link slot="username" :to="`/user/${itemInfo.user}`">{{
          itemInfo.user
        }}</router-link>
        <template slot="time">{{ "Posted " + itemInfo.time_ago }}</template>
      </user-profile>
    </section>
    <div class="content">
      <h2>{{ itemInfo.title }}</h2>
      <div v-html="itemInfo.content"></div>
    </div>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
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

<template>
  <div>
    <div v-for="item in this.fetchedAsk" :key="item.id">
      <a :href="item.url">{{ item.title }}</a>
      <small> {{ item.time_ago }} by {{ item.user }}</small>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedAsk"]),
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>

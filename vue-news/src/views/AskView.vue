<template>
  <div>
    <div v-for="ask in this.$store.state.ask" :key="ask.id">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      asks: [],
    };
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>

<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
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

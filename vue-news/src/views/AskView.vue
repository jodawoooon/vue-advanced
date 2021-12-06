<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import ListMixin from "../mixins/ListMixin.js";
// import bus from "../utils/bus";

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // mounted() {
  //   //인스턴스가 화면에 나타나고(완료되었을 때 )
  //   bus.$emit("end:spinner");
  // },
};
</script>

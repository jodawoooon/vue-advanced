<template>
  <div>
    <ul>
      <item>아이템1</item>
      <item>아이템2 <button>click!!!</button></item>
      <item><img src="./assets/logo.png" width="20" /> 아이템3</item>
      <item><div style="color: skyblue">아이템4</div></item>
    </ul>
  </div>
</template>

<script>
import Item from "./components/Item.vue";

export default {
  components: {
    Item,
  },
  data() {
    return {
      items: ["아이템1", "아이템2", "아이템3", "아이템4", "아이템5"],
    };
  },
};
</script>

<style></style>

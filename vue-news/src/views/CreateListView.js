import bus from "../utils/bus.js";
import ListView from "./ListView.vue";

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션이 들어갈 자리
    name: name,
    created() {
      bus.$emit("start:spinner");

      // router name에 따라 News, Ask, Jobs 데이터 호출
      this.$store
        .dispatch("FETCH_LIST", this.$route.name)
        .then(() => {
          bus.$emit("end:spinner");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}

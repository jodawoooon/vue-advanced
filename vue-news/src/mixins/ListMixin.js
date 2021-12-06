import bus from "../utils/bus.js";

export default {
  mounted() {
    //인스턴스가 화면에 나타나고(완료되었을 때 )
    bus.$emit("end:spinner");
  },
  // created() {
  //   bus.$emit("start:spinner");
  //   this.$store
  //     .dispatch("FETCH_LIST", this.$route.name)
  //     .then(() => {
  //       console.log("fetched");
  //       bus.$emit("end:spinner");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};

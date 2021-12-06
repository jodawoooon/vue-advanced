import Chart from "chart.js";

export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart;
    //prototype => 특정 객체 확장
    //$_ : 플러그인의 프리픽스 접두사
  },
};

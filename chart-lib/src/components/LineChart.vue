<template>
  <canvas id="myLineChart"></canvas>
</template>

<script>
import Chart from "chart.js";

export default {
  data() {
    return {
      config: {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: [0, 10, 5, 2, 20, 30, 45],
            },
          ],
        },
        options: {},
      },
    };
  },
  mounted() {
    new Chart(document.getElementById("myLineChart"), this.config);
  },
};
</script>

<style></style>

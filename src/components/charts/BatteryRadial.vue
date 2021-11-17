<template>
  <apexchart 
    width="500"
    type="radialBar"
    :options="options"
    :series="series"
  ></apexchart>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: 'BatteryRadial',
  components: {
    apexchart: VueApexCharts,
  },
  data () {
    return {
      options: {
        chart: {
          id: 'battery-radial'
        },
        colors:["#ea1515"],
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
              margin: 15,
              size: "70%"
            },
            track: {
              background: '#333',
              startAngle: -135,
              endAngle: 135,
            },
            dataLabels: {
              name: {
                show: true,
              },
              value: {
                fontSize: "30px",
                show: true
              }
            } 
          } 
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            gradientToColors: ["#1cf14c"],
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["Battery"]
      },
      series: [87]
    }
  }
}
</script>

<style>
</style>
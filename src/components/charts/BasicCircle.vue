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
  name: 'BasicCircle',
  components: {
    apexchart: VueApexCharts,
  },
  data () {
    return {
      options: {
        chart: {
          id: 'basic-circle'
        },
        labels: ['Pourcentage'],
        stroke: {
          lineCap: "round"
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: "70%"
            }
          }
        }
      },
      series: [70]
    }
  }
}
</script>

<style>
</style>
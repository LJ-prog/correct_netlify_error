<template>
  <apexchart
    width="500"
    type="bar"
    :options="options"
    :series="series"
  ></apexchart>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: 'ColumnLabel',
  components: {
    apexchart: VueApexCharts,
  },
  data () {
    return {
      options: {
        chart: {
          id: 'columnlabel-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  }
}
</script>

<style>
</style>
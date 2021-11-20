<template>
  <apexchart
    type="bar"
    :options="options"
    :series="series"
    :height="chartheight"
  ></apexchart>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: 'ColumnLabel',
  components: {
    apexchart: VueApexCharts,
  },
  props:{
    columnxaxiscategories:{
      default: [0],
    },
    columnseriesname:{
      default: 'Serie'
    },
    columnseriesdata:{
      default: [0,1,2,3],
    },
    chartheight:{
      default: 300
    },
    chartid:{
      default: 'columnlabel'
    },
    colorvalue:{
      default: ["#7198be"]
    }
  },
  data () {
    return {
      options: {
        chart: {
          id: this.chartid
        },
        xaxis: {
          categories: this.columnxaxiscategories
        },
        fill: {
          colors: this.colorvalue
        }
      },
      series: [{
        name: this.columnseriesname,
        data: this.columnseriesdata
      }]
    }
  }
}
</script>

<style>
</style>
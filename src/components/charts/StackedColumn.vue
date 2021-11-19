<template>
  <apexchart
    width="1000"
    height="350"
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
          id: 'stackedcolumn-example',
          stacked: true,
          toolbar: {show: true},
          zoom: {enabled: true}
        },
        plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 10
            },
        },
        xaxis: {
          type: 'datetime',
          categories: ['01/07/2021 GMT', '01/08/2021 GMT', '01/09/2021 GMT', '01/10/2021 GMT',
                '01/11/2021 GMT', '01/12/2021 GMT']
        },
        legend: {
            position: 'right',
            offsetY: 40
        },
      },
      series: [{
            name: 'Midipile 01',
            data: [44, 55, 41, 67, 22, 43]
          }, {
            name: 'Midipile 02',
            data: [13, 23, 20, 8, 13, 27]
          }, {
            name: 'Midipile 03',
            data: [11, 17, 15, 15, 21, 14]
          }, {
            name: 'Midipile 04',
            data: [11, 17, 15, 15, 21, 14]
          }, {
            name: 'Midipile 05',
            data: [21, 7, 25, 13, 22, 8]
      }]
    }
  }
}
</script>

<style>
</style>
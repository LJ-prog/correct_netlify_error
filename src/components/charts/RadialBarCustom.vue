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
  name: 'RadialBarCustom',
  components: {
    apexchart: VueApexCharts,
  },
  data () {
    return {
      options: {
        chart: {
          id: 'battery-radial'
        },
        colors:['#1ab7ea', '#0084ff', '#39539E', '#0077B5', '#0078B5'],
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
              margin: 10,
              size: "50%"
            },
            track: {
              background: '#333',
              startAngle: -135,
              endAngle: 135,
            },
            dataLabels: {
              total: {
                show: true,
                label: 'Mes véhicules'
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
        labels: ['Midipile 01', 'Midipile 02', 'Midipile 03', 'Midipile 04', 'Midipile 05']
      },
      series: [76, 67, 61, 90, 99]
    }
  }
}
</script>

<style>
</style>
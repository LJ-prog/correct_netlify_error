<template>
  <apexchart
    v-if="loaded"
    type="line"
    :options="options"
    :series="series1"
    :height="chartheight"
  ></apexchart>

  <apexchart
    v-if="loaded"
    type="line"
    :options="options"
    :series="series2"
    :height="chartheight"
  ></apexchart>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: 'BasicLine',
  components: {
    apexchart: VueApexCharts,
  },
  props:{
    basepath:{
      default: "bdd_json"
    },
    selectorname:{
      default: "midipile01"
    },
    filename:{
      default: "1110101107_route14.json"
    },
    linexaxiscategories:{
      default: ['sept','oct','nov','dec'],
    },
    lineseriesname1:{
      default: 'TimeSeries'
    },
    lineseriesdata1:{
      default: [0,1,2,3],
    },
    lineseriesname2:{
      default: 'TimeSeries'
    },
    lineseriesdata2:{
      default: [2,3,4,5],
    },
    chartheight:{
      default: 250
    },
    chartid:{
      default: 'Line'
    },
    group:{
      default: 'social'
    },
    colorvalue1:{
      default: ["#292929"]
    },
    colorvalue2:{
      default: ["#2424ff"]
    },
    colorvalue3:{
      default: ["#7198be"]
    },
    colorvalue4:{
      default: ["#5198be"]
    },
    titletext:{
      default: "Titre"
    }
  },
  data () {
    return {
      loaded: false,
      options: {
        chart: {
          id: this.chartid,
          group: this.group
        },
        xaxis: {
          categories: this.linexaxiscategories,
          labels: {
            hideOverlappingLabels: true,
          }
        },
        yaxis: {
          labels: {
            minWidth: 40
          }
        },
        title: {
          text: this.titletext,
          align: 'left'
        }
      },
      series1: [{
        name: this.lineseriesname1,
        data: this.lineseriesdata1,
        colors: this.colorvalue1
      },{
        name: this.lineseriesname2,
        data: this.lineseriesdata2,
        colors: this.colorvalue2
      }],
      series2: [{
        name: this.lineseriesname1,
        data: this.lineseriesdata1,
        colors: this.colorvalue3
      },{
        name: this.lineseriesname2,
        data: this.lineseriesdata2,
        colors: this.colorvalue4
      }]
    }
  },
  methods: {
    getdatafromjson(basepath, selectorname, filename) {
      const jsondatapath = basepath + '/' + selectorname + '/' + filename;

      console.log('JSON path: ' + jsondatapath);

      try {
        fetch(jsondatapath)
          .then(response => response.json())
          .then(result => this.plotdata(result));
      } catch (e) {
        console.log('Error fetch JSON: ' + e);
        return;
      }
    },
    plotdata(jsondata) {
      console.log('In extractpath');
      console.log(jsondata);

      if (jsondata != undefined) {
        this.series1 = [{
            name: 'Dénivelé (m)',
            data: jsondata.ele,
            colors: this.colorvalue1
          },{
            name: 'Vitesse (km/h)',
            data: jsondata.vitesse,
            colors: this.colorvalue2
          }],
        this.series2 = [{
            name: 'SOC fixe (%)',
            data: jsondata.SOC_fixe,
            colors: this.colorvalue3
          },{
            name: 'SOC mobile (%)',
            data: jsondata.SOC_mobile,
            colors: this.colorvalue4
          }],
        this.options = {
          xaxis: {
            categories: jsondata.temps,
            labels: {
              hideOverlappingLabels: true,
              show: false,
              rotate: 0,
            }
          }
        }
        this.loaded = true
        console.log('Load graph')
      }
    }
  },
  created() {
    this.getdatafromjson(this.basepath, this.selectorname, this.filename)
  }
}
</script>

<style>
</style>
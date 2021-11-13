<template>
 
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card class="my-card">
          <q-img src="/statics/images/M1.JPG"/>
        </q-card>
      </div>
      
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <chart> </chart>
      </div> 

    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'
const defgraph = [
  {
    type: 'bar',
    height: '100%',
    width: '100%',
    options: {
      chart: {
        id: 'test graphe',
        type: 'bar',
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
  ]

export default defineComponent({
  name: "Charts",
  components: {
    chart: defineAsyncComponent(() => import('components/charts/ApexChart')),
  },
})

</script>

<style lang="sass" scoped>
.my-card
  width: 80%
  max-width: 400px
</style>

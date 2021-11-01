<template>
 
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <line-chart></line-chart>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <guage-chart></guage-chart>
      </div>
    </div>
  </q-page>
</template>

<script>
import {defineComponent, defineAsyncComponent} from 'vue';

export default defineComponent({
  name: "Charts",
  components: {
    LineChart: defineAsyncComponent(() => import('components/charts/LineChart')),
    GuageChart: defineAsyncComponent(() => import('components/charts/GaugeChart')),
  },
})
</script>

<style>

</style>

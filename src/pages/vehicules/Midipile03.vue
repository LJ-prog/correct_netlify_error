<template>
 
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card class="my-card">
          <q-img src="/statics/images/M3.JPG"/>
        </q-card>
      </div>
      
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <apex-chart></apex-chart>
      </div>
    </div>
  </q-page>
</template>

<script>
import {defineComponent, defineAsyncComponent} from 'vue';

export default defineComponent({
  name: "Charts",
  components: {
    ApexChart: defineAsyncComponent(() => import('components/charts/ApexChartRef')),
  },
})
</script>

<style lang="sass" scoped>
.my-card
  width: 80%
  max-width: 400px
</style>
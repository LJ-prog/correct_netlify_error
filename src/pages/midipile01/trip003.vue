<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md">

      <div class="col-xs-12 col-sm-5 col-md-4">
        <q-card flat >
            <q-card-section>
              <table-trip-stat class="col-6"></table-trip-stat>
            </q-card-section>
          </q-card>
        </div>

      <div class="col-xs-12 col-sm-3 col-md-3">
        <q-card flat >
          <q-card-section>
            <battery-radial 
              :batteryvalue=[73]
              :batterylabel="['Mobility ECO Score']"
              :colormin="['#1a7a30']"
              :colormax="['#1a7a30']"
              :height=[250]
            ></battery-radial>
          </q-card-section>
        </q-card>

        <q-card flat >
          <q-card-section>
            <battery-radial 
              :batteryvalue=[64]
              :batterylabel="['Midipile Challenge']"
              :colormin="['#1a7a30']"
              :colormax="['#1a7a30']"
              :height=[250]
            ></battery-radial>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-10 col-sm-4 col-md-4">
        <div class="text-h6 text-grey-8">Répartition d'auto-production</div>
        <q-card flat >
          <q-card-section>
            <semi-donut
              :height=[400]
              :donutarrayvalues=[21,12,3]
            ></semi-donut>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-5">
        <q-card flat bordered >
          <q-card-section>
            <JSONSourceMap
              :stylemap="['height:35vh']"
            ></JSONSourceMap>
          </q-card-section>
        </q-card>
      </div>
     

      <div class="col-xs-12 col-sm-6 col-md-6">
        <JSONTwoLines
          :chartheight=[200]
        ></JSONTwoLines>

      </div>

    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    BatteryRadial: defineAsyncComponent(() => import('components/charts/BatteryRadial.vue')),
    TableTripStat: defineAsyncComponent(() => import('components/tables/TableTripStat')),
    JSONSourceMap: defineAsyncComponent(() => import('components/maps/JSONSourceMap.vue')),
    JSONTwoLines: defineAsyncComponent(() => import('components/charts/JSONTwoLines.vue')),
    SemiDonut: defineAsyncComponent(() => import('components/charts/SemiDonut.vue'))
},
  data () {
    return {
      loading: true,
      dialog: true,
    }
  }
})
</script>

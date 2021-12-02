<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md">

      <div class="col-xs-12 col-sm-5 col-md-3">
        <div class="text-h4 text-grey-8">Midipile 05</div>
        <q-card class="my-card">
          <q-img src="/statics/images/M5.JPG"/>
        </q-card>
      </div>
      
      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-card flat >
            <q-card-section>
              <table-actu></table-actu>
            </q-card-section>
          </q-card>
        </div>


      <div class="col-xs-12 col-sm-5 col-md-2">
        <q-card flat >
          <q-card-section>
            <battery-radial 
              :batteryvalue=[85]
              :batterylabel="['Mobility ECO Score']"
              :colormin="['#1a7a30']"
              :colormax="['#1a7a30']"
            ></battery-radial>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-2">
        <q-card flat >
          <q-card-section>
            <battery-radial 
              :batteryvalue=[85]
              :batterylabel="['Midipile Challenge']"
              :colormin="['#103e47']"
              :colormax="['#103e47']"
            ></battery-radial>
          </q-card-section>
        </q-card>

      </div>

    </div>

    <div class="q-pa-md row q-gutter-md">
      <div class="col-xs-12 col-sm-5 col-md-5">
        <apex-stacked-column></apex-stacked-column>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-5">
        <apex-basic-line></apex-basic-line>
      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    TableActu: defineAsyncComponent(() => import('components/tables/TableActu')),
    BatteryRadial: defineAsyncComponent(() => import('components/charts/BatteryRadial.vue')),
    ApexStackedColumn: defineAsyncComponent(() => import('components/charts/StackedColumn.vue')),
    ApexBasicLine: defineAsyncComponent(() => import('components/charts/BasicLine.vue'))
},
  data () {
    return {
      loading: true,
      dialog: true,
    }
  }
})
</script>

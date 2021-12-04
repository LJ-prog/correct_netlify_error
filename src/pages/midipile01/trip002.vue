<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md">

      <div class="col-xs-12 col-sm-6 col-md-5">
        <q-card flat bordered >
          <q-card-section>
            <popup-map
              :stylemap="['height:40vh']"
            ></popup-map>
          </q-card-section>
        </q-card>
      </div>
     
      <div class="col-xs-12 col-sm-5 col-md-4">
        <q-card flat >
            <q-card-section>
              <table-trip-stat class="col-6"></table-trip-stat>
            </q-card-section>
          </q-card>
        </div>

      <div class="col-xs-12 col-sm-3 col-md-2">
        <q-card flat >
          <q-card-section>
            <battery-radial 
              :batteryvalue=[80]
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
              :batteryvalue=[72]
              :batterylabel="['Midipile Challenge']"
              :colormin="['#1a7a30']"
              :colormax="['#1a7a30']"
              :height=[250]
            ></battery-radial>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-10 col-sm-4 col-md-4">
        <apex-stacked-column
          :height=[500]
          :stackedxaxiscategories=[0]
          :stackedseries="[{name:'Cycliste',data:[10]}, {name:'Solaire',data:[5]},{name:'Régénération',data:[5]}]"
        ></apex-stacked-column>
      </div>

      <div class="col-xs-1 col-sm-1 col-md-1">
        
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6">
        <apex-two-lines
          :height=[250]
          :linexaxiscategories=[0,5,10,15,20]
          :lineseriesname1="['Dénivelé']"
          :lineseriesdata1=[30,33,45,30,35]
          :lineseriesname2="['Vitesse']"
          :lineseriesdata2=[10,15,42,45,12]
        ></apex-two-lines>

        <apex-two-lines
          :height=[250]
          :linexaxiscategories=[0,5,10,15,20]
          :lineseriesname1="['SOC fixe']"
          :lineseriesdata1=[90,85,70,60,55]
          :lineseriesname2="['SOC mobile']"
          :lineseriesdata2=[45,44,42,45,50]
        ></apex-two-lines>
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
    PopupMap: defineAsyncComponent(() => import('components/maps/PopupMap.vue')),
    ApexTwoLines: defineAsyncComponent(() => import('components/charts/TwoLines.vue')),
    ApexStackedColumn: defineAsyncComponent(() => import('components/charts/StackedColumn.vue'))
},
  data () {
    return {
      loading: true,
      dialog: true,
    }
  }
})
</script>

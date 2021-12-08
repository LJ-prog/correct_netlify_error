<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md">

      <div class="col-xs-12 col-sm-5 col-md-3">
        <div class="text-h4 text-grey-8">Midipile 01</div>
        <q-card class="my-card">
          <q-img src="/statics/images/M1.JPG"/>
        </q-card>
      </div>
      
      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-card flat >
            <q-card-section>
              <table-actu
              :data3def="tabdata"
            ></table-actu>
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
              :batteryvalue=[79]
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
        <div class="text-h6 text-grey-8">Distance hebdomadaire</div>
          <JSONApexColumnLabel
            :filename="['midipile01_stat_semaine.json']"
          ></JSONApexColumnLabel>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-5">
        <div class="text-h6 text-grey-8">Suivi de consommation (W.h/km)</div>
          <JSONApexBasicLine
            :filename="['midipile01_stat.json']"
          ></JSONApexBasicLine>
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
    JSONApexColumnLabel: defineAsyncComponent(() => import('components/charts/JSONColumnLabel.vue')),
    JSONApexBasicLine: defineAsyncComponent(() => import('components/charts/JSONBasicLine.vue'))
},
  props:{
    tabdatadef:{
      default: [
        {
          name: 'Sebastien',
          des: '28 nov 2021 | 43,50 km | 1:46:11',
          avatar: "statics/images/Sebastien.JPG",
          lien: "/1111128116_route18"
        },
        {
          name: 'Ehouarn',
          des: '28 nov 2021 | 53,96 km | 2:12:0',
          avatar: "statics/images/Ehouarn.JPG",
          lien: "/1111128107_route06"
        },
        {
          name: 'Sebastien',
          des: '27 nov 2021 | 79,52 km | 2:54:39',
          avatar: "statics/images/Sebastien.JPG",
          lien: "/1111127115_route15"
        },
        {
          name: 'Sebastien',
          des: '27 nov 2021 | 43,37 km | 1:43:20',
          avatar: "statics/images/Sebastien.JPG",
          lien: "/1111127108_route18"
        },
        {
          name: 'Sebastien',
          des: '26 nov 2021 | 43,67 km | 1:50:19',
          avatar: "statics/images/Sebastien.JPG",
          lien: "/1111126116_route18"
        }
      ]
    },
  },
  
  data () {
    return {
      loading: true,
      dialog: true,
      tabdata : this.tabdatadef
    }
  }
})
</script>

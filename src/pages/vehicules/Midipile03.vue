<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md">

      <div class="col-xs-12 col-sm-5 col-md-3">
        <div class="text-h4 text-grey-8">Midipile 03</div>
        <q-card class="my-card">
          <q-img src="/statics/images/M3.JPG"/>
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
              :batteryvalue=[91]
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
              :batteryvalue=[87]
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
            :filename="['Midipile 03_stat_semaine.json']"
          ></JSONApexColumnLabel>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-5">
        <div class="text-h6 text-grey-8">Suivi de consommation (W.h/km)</div>
          <JSONApexBasicLine
            :filename="['Midipile 03_stat.json']"
          ></JSONApexBasicLine>      </div>
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
          name: 'Vincent',
          des: '28 nov 2021 | 35,39 km | 1:28:11',
          avatar: "statics/images/Vincent.JPG",
          lien: "/3111128116_route02"
        },
        {
          name: 'Benoit',
          des: '28 nov 2021 | 70,47 km | 2:51:12',
          avatar: "statics/images/Benoit.JPG",
          lien: "/3111128107_route05"
        },
        {
          name: 'Sebastien',
          des: '27 nov 2021 | 65,72 km | 2:39:12',
          avatar: "statics/images/Sebastien.JPG",
          lien: "/3111127117_route08"
        },
        {
          name: 'Vincent',
          des: '27 nov 2021 | 44,13 km | 1:49:9',
          avatar: "statics/images/Vincent.JPG",
          lien: "/3111127107_route18"
        },
        {
          name: 'Sebastien',
          des: '26 nov 2021 | 46,4 km | 1:44:7',
          avatar: "statics/images/Sebastien.JPG",
          lien: "/3111126114_route12"
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

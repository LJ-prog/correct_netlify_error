<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md">

      <div class="col-xs-12 col-sm-5 col-md-3">
        <div class="text-h4 text-grey-8">Midipile 04</div>
        <q-card class="my-card">
          <q-img src="/statics/images/M4.JPG"/>
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
              :batteryvalue=[80]
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
              :batteryvalue=[72]
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
            :filename="['Midipile 04_stat_semaine.json']"
          ></JSONApexColumnLabel>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-5">
        <div class="text-h6 text-grey-8">Suivi de consommation (W.h/km)</div>
          <JSONApexBasicLine
            :filename="['Midipile 04_stat.json']"
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
          name: 'Benoit',
          des: '28 nov 2021 | 29,36 km | 1:11:42',
          avatar: "statics/images/Benoit.JPG",
          lien: "/4111128114_route09"
        },
        {
          name: 'Sebastien',
          des: '28 nov 2021 | 38,1 km | 1:32:24',
          avatar: "statics/images/Sebastien.JPG",
          lien: "/4111128108_route02"
        },
        {
          name: 'Guillaume',
          des: '27 nov 2021 | 42,57 km | 1:46:48',
          avatar: "statics/images/Guillaume.JPG",
          lien: "/4111127117_route01"
        },
        {
          name: 'Guillaume',
          des: '27 nov 2021 | 39,86 km | 1:27:2',
          avatar: "statics/images/Guillaume.JPG",
          lien: "/4111127107_route01"
        },
        {
          name: 'Guillaume',
          des: '26 nov 2021 | 35,75 km | 1:27:19',
          avatar: "statics/images/Guillaume.JPG",
          lien: "/4111126116_route11"
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

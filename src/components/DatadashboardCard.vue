<template>
  <q-card style="width: 250px;">
    <q-card-section style="padding-top: 8px; text-align: center;">
      {{$props.titledef}}
    </q-card-section>

    <q-card-section style="text-align: center; padding-top: 0px; padding-bottom: 0px">
      <h6 style="margin-top:0px; margin-bottom: 0px; text-align: center; font-size: 35px">
        {{ $props.datadef}}
      </h6>
    </q-card-section>
    <q-card-section style="text-align: center; padding-top: 0px;">
        {{$props.unitydef}}
    </q-card-section>

    <q-icon class="absolute all-pointer-events" size="20px" name="info" style="top: 8px; left: 217px; justify-content: right" align="right">
      <q-tooltip class="bg-primary">
        {{$props.infodef}}
      </q-tooltip>
    </q-icon>

  </q-card>

</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'DatadashboardCard',
  props:{
    titledef: {
      default: 'Title'
    },
    //     [{name: 'Vmoy', label: 'Vitesse moyenne', field: 'Vmoy', sortable: false, align: 'center'},
    //     {name: 'Vmax', label: 'Vitesse max', field: 'Vmax', sortable: false, align: 'center'},
    //     {name: 'Solaire', label: 'Recharge solaire', field: 'Solaire', sortable: false, align: 'center'},
    //     {name: 'GAP', label: 'Recharge GAP', field: 'GAP', sortable: false, align: 'center'},
    //     {name: 'Autonomie', label: 'Autonomie', field: 'Autonomie', sortable: false, align: 'center'},
    //     {name: 'Kilométrage', label: 'Kilométrage', field: 'Kilométrage', sortable: false, align: 'center'},]
    datadef: {
      default: 50
    },
    unitydef: {
      default: 'km/h'
    },
    infodef: {
      default: ''
    }
    //     {name: 'DataVm', label: '45 km/h', field: 'Vmoy', sortable: false, align: 'center'},
    //     {name: 'DataVx', label: '90 km/h', field: 'Vmax', sortable: false, align: 'center'},
    //     {name: 'DataSun', label: '30%', field: 'Solaire', sortable: false, align: 'center'},
    //     {name: 'DataGap', label: '50%', field: 'GAP', sortable: false, align: 'center'},
    //     {name: 'DataAut', label: '3h', field: 'Autonomie', sortable: false, align: 'center'},
    //     {name: 'DataKm', label: '300 km', field: 'Kilométrage', sortable: false, align: 'center'},
  },
  data () {
    return {
      title: this.titledef,
      data : this.datadef,
    }
  }
})
</script>

<style>
</style>

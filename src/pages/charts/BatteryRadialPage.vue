<template>
  <q-page padding>
    <div>
      <battery-radial></battery-radial>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'ApexCharts',
  components:{
    BatteryRadial: defineAsyncComponent(() => import('components/charts/BatteryRadial.vue'))
  } 
})
</script>

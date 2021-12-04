<template>
  <q-page padding>
    <div>
      <semi-donut></semi-donut>
    </div>
  </q-page>
</template>

<script>
import SemiDonut from 'components/charts/SemiDonut.vue'
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'ApexCharts',
  components:{
    SemiDonut: defineAsyncComponent(() => import('components/charts/SemiDonut.vue'))
  } 
})
</script>

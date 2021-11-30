<template>
  <q-page padding>
    <div>
      <apex-column-label
        :columnseriesname="['stat_conso']"
        :columnxaxiscategories=[40,41,42,43,44,45,46,47]
        :columnseriesdata=[22.5,23.6,23.4,23.7,22.8,23.3,22.9,23.2]
      ></apex-column-label>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'ApexCharts',
  components:{
    ApexColumnLabel: defineAsyncComponent(() => import('components/charts/ColumnLabel.vue'))
  } 
})
</script>

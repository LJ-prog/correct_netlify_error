<template>
  <q-page padding>
    <div>
      <apex-column-label></apex-column-label>
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

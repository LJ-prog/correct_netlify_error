<template>
  <q-page padding>
    <div>
      <apex-basic-line></apex-basic-line>
      <apex-basic-line></apex-basic-line>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'ApexCharts',
  components:{
    ApexBasicLine: defineAsyncComponent(() => import('components/charts/BasicLine.vue'))
  } 
})
</script>

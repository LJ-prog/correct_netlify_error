<template>
  <q-page padding>
    <div>
      <apex-sparks></apex-spark>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'ApexCharts',
  components:{
    ApexSpark: defineAsyncComponent(() => import('components/charts/Spark.vue'))
  } 
})
</script>

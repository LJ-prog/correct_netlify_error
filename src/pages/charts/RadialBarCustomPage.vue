<template>
  <q-page padding>
    <div>
      <radial-bar-custom></radial-bar-custom>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'ApexCharts',
  components:{
    RadialBarCustom: defineAsyncComponent(() => import('components/charts/RadialBarCustom.vue'))
  } 
})
</script>

<template>
  <q-page>

    <div class="row" height="250px">
      <div class="col">
        <global-map></global-map>
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        <apex-column-label></apex-column-label>
      </div>
    </div>

  </q-page>
</template>

<script>

import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    ApexColumnLabel: defineAsyncComponent(() => import('components/charts/ColumnLabel.vue')),
    GlobalMap: defineAsyncComponent(() => import('components/maps/PopupMap.vue'))
  },
  data () {
    return {
      loading: true,
      dialog: true,
    }
  }
})
</script>
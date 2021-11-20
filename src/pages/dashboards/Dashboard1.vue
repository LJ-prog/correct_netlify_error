<template>
  <q-page>

    <div class="q-pa-md row q-gutter-md">
      <div class="col">
        
        <q-card>
          <q-card-section>
            <global-map></global-map>
          </q-card-section>
        </q-card>

      </div>
    </div>

    <div class="q-pa-md row q-gutter-md">
      <div class="col-4">
        <q-card>
          <q-card-section>
            <apex-column-label></apex-column-label>
          </q-card-section>
        </q-card>
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
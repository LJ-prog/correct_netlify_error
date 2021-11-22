<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">
      <ligne-menu></ligne-menu>
    </div>
    <div class="q-pa-md row q-gutter-md">
      <div class="col-4">
          <q-card flat bordered>
            <q-card-section>
              <table-active></table-active>
            </q-card-section>

            <q-card-section>
              <table-actu></table-actu>
            </q-card-section>
          </q-card>
        </div>

      <div class="col-7">
        <q-card flat bordered>
          <q-card-section>
            <table-progress></table-progress>
          </q-card-section>
        </q-card>
      </div>

    </div>

    <div class="q-pa-md row q-gutter-md">
      <div class="col-4">
        <q-card flat bordered>
          <q-card-section>
            <radial-bar-custom></radial-bar-custom>
          </q-card-section>
        </q-card>
      </div>


      <div class="col-7">
        <q-card flat bordered >
          <q-card-section>
            <popup-map></popup-map>
          </q-card-section>
        </q-card>
      </div>

    </div>

  </q-page>
</template>

<script>

import LigneMenu from 'components/Menu/LigneMenu.vue'
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    LigneMenu: defineAsyncComponent(() => import('components/Menu/LigneMenu.vue')),
    TableActu: defineAsyncComponent(() => import('components/tables/TableActu')),
    TableActive: defineAsyncComponent(() => import('components/tables/TableActive')),
    RadialBarCustom: defineAsyncComponent(() => import('components/charts/RadialBarCustom.vue')),
    TableProgress: defineAsyncComponent(() => import('components/tables/TableProgress')),
    PopupMap: defineAsyncComponent(() => import('components/maps/PopupMap.vue'))
  },
  data () {
    LigneMenu
    return {
      loading: true,
      dialog: true,
    }
  }
})
</script>
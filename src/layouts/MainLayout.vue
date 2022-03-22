<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="text-primary bg-white">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click= "toggleLeftDrawer"
        />

        <q-toolbar-title class="text-h4 text-grey-8">
          Midipile Fleet Manager
        </q-toolbar-title>

        <div class="q-gutter-md">
          <q-btn flat round color="primary" icon="fab fa-twitter"></q-btn>
          <q-btn flat round color="primary" icon="fab fa-facebook-f"></q-btn>
          <q-btn flat round color="primary" icon="fab fa-linkedin-in" href="https://fr.linkedin.com/company/midipile-mobility" target="_blank"></q-btn>
          <q-btn flat round color="primary" icon="bike_scooter" to="/"></q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model= "leftDrawerOpen"
    >
    <!-- <q-img src="statics/logo_valide_paysage.jpg"></q-img> -->
    <q-list>
        <q-item-label
          header
        >
          Demo 2021
        </q-item-label>

        <q-item to="/dashboardjson" exact>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section>
            Tableau de bord
          </q-item-section>
        </q-item>


        <q-expansion-item icon="bike_scooter" label="Mes véhicules" to="/mesvehicules" >
          <q-list dense >
            <q-item to="/midipile01" exact>
              <q-item-section > </q-item-section>
              <q-item-section > Midipile 01 </q-item-section>
              <q-item-section > </q-item-section>
            </q-item>

            <q-item to="/midipile02" exact>
              <q-item-section > </q-item-section>
              <q-item-section > Midipile 02 </q-item-section>
              <q-item-section > </q-item-section>
            </q-item>

            <q-item to="/midipile03" exact>
              <q-item-section > </q-item-section>
              <q-item-section > Midipile 03 </q-item-section>
              <q-item-section > </q-item-section>
            </q-item>

            <q-item to="/midipile04" exact>
              <q-item-section > </q-item-section>
              <q-item-section > Midipile 04 </q-item-section>
              <q-item-section > </q-item-section>
            </q-item>

            <q-item to="/midipile05" exact>
              <q-item-section > </q-item-section>
              <q-item-section > Midipile 05 </q-item-section>
              <q-item-section > </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-item to="/Administration" exact>
          <q-item-section avatar>
            <q-icon name="manage_accounts" />
          </q-item-section>

          <q-item-section> Administration </q-item-section>
        </q-item>


        <q-expansion-item icon="grid_view" label="Composants" v-if=debug >
          <q-expansion-item
            :header-inset-level="1"
            icon="insights"
            label="Charts"
          >
              <q-item to="columnlabel" exact>
                <q-item-section > Colonne simple </q-item-section>
              </q-item>

              <q-item to="stackedcolumn" exact>
                <q-item-section > Colonne multiple </q-item-section>
              </q-item>

              <q-item to="basiccircle" exact>
                <q-item-section > Cercle simple </q-item-section>
              </q-item>

              <q-item to="batteryradial" exact>
                <q-item-section > Batterie (Radial) </q-item-section>
              </q-item>

              <q-item to="minibatteryradial" exact>
                <q-item-section > Mini Batterie (Radial) </q-item-section>
              </q-item>

              <q-item to="radialbarcustom" exact>
                <q-item-section > Jauge multiple </q-item-section>
              </q-item>

              <q-item to="spark" exact>
                <q-item-section > Indicateur Spark </q-item-section>
              </q-item>

              <q-item to="basicline" exact>
                <q-item-section > Graphe ligne simple </q-item-section>
              </q-item>

              <q-item to="semidonut" exact>
                <q-item-section > Semi donut </q-item-section>
              </q-item>

              <q-item to="jsontwolines" exact>
                <q-item-section > 2 Lines </q-item-section>
              </q-item>

          </q-expansion-item>


          <q-expansion-item
            :header-inset-level="1"
            icon="location_on"
            label="Maps"
          >

            <q-item to="simplemap" exact>
              <q-item-section > Carte simple </q-item-section>
            </q-item>

            <q-item to="iconmap" exact>
              <q-item-section > Carte avec multiple icônes </q-item-section>
            </q-item>

            <q-item to="popupmap" exact>
              <q-item-section > Carte avec popup </q-item-section>
            </q-item>

            <q-item to="polylinemap" exact>
              <q-item-section > Carte avec chemin </q-item-section>
            </q-item>

          </q-expansion-item>

          <q-expansion-item
            :header-inset-level="1"
            icon="table_chart"
            label="Tables"
          >

            <q-item to="tableprogress" exact>
              <q-item-section > Suivi des véhicules </q-item-section>
            </q-item>

            <q-item to="tabletripstat" exact>
              <q-item-section > Statistique trajet </q-item-section>
            </q-item>

            <q-item to="tableactu" exact>
              <q-item-section > Flux d'actualité </q-item-section>
            </q-item>

            <q-item to="tableactive" exact>
              <q-item-section > Etat du parc </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item
            :header-inset-level="1"
            icon="dashboard"
            label="Dashboards"
          >

            <q-item to="dashboard1" exact>
              <q-item-section > Dashboard 1 </q-item-section>
            </q-item>

            <q-item to="dashboard2" exact>
              <q-item-section > Dashboard 2 </q-item-section>
            </q-item>

            <q-item to="dashboard3" exact>
              <q-item-section > Dashboard 3 </q-item-section>
            </q-item>

            <q-item to="dashboardjson" exact>
              <q-item-section > Dashboard avec index JSON </q-item-section>
            </q-item>

          </q-expansion-item>

          <q-expansion-item
            :header-inset-level="1"
            icon="bike_scooter"
            label="Trajet M01"
          >

            <q-item to="01trip001" exact>
              <q-item-section > Trajet 001 </q-item-section>
            </q-item>

            <q-item to="01trip002" exact>
              <q-item-section > Trajet 002 </q-item-section>
            </q-item>

            <q-item to="01trip003" exact>
              <q-item-section > Trajet 003 </q-item-section>
            </q-item>
          </q-expansion-item>

        </q-expansion-item>

      </q-list>
    </q-drawer>

    <q-page-container>
        <div class="q-pt-md q-pl-md">
          <ligne-menu></ligne-menu>
        </div>
        <router-view />
    </q-page-container>

    <q-footer class="bg-white text-primary">
      <q-toolbar>
        <q-toolbar-title>
          <div>
            <center>
              <div class="text-overline text-grey-8">MWS v0.1 - Copyright © 2021 - <a href="https://midipile.eu" class="text-grey-8">Midipile Mobility</a></div>
            </center>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>

import { defineComponent, defineAsyncComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    LigneMenu: defineAsyncComponent(() => import('components/Menu/LigneMenu.vue'))
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      debug: false,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

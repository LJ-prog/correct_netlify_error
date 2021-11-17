<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Midipile Web Services
        </q-toolbar-title>

        <div>MWS v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
    <q-img src="statics/logo_valide_paysage.jpg"></q-img>
    <q-list>
        <q-item-label
          header
        >
          Demo 2021
        </q-item-label>


        <q-item to="/index" exact>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section> Accueil </q-item-section>
        </q-item>

        <q-item to="/tableau" exact>
          <q-item-section avatar>
            <q-icon name="manage_accounts" />
          </q-item-section>

          <q-item-section>
            Suivi des véhicules
          </q-item-section>
        </q-item>

        
        <q-expansion-item icon="bike_scooter" label="Mes véhicules" to="/mesvehicules" default-opened >
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

        <q-separator></q-separator>

        <q-expansion-item icon="grid_view" label="Composants" >
          <q-list dense >
            <q-item to="/columnlabel" exact>
              <q-item-section > </q-item-section>
              <q-item-section > Colonne </q-item-section>                
              <q-item-section > </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        

        <q-item-label header>   </q-item-label>

        <q-item-label
          header
        >
          Contact Midipile
        </q-item-label>


        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Developpeur',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://gitlab.com/midipile/services_connectes'
  },
  {
    title: 'Forum',
    caption: 'forum Midipile',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@MidipileM',
    icon: 'rss_feed',
    link: 'https://twitter.com/MidipileM'
  },
  {
    title: 'Facebook',
    caption: '@midipilemobility',
    icon: 'public',
    link: 'https://www.facebook.com/midipilemobility'
  },
  {
    title: 'Midipile',
    caption: 'Site web',
    icon: 'language',
    link: 'https://midipile.eu/'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

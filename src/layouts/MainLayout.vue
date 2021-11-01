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
      <q-list>
        <q-item-label
          header
        >
          Demo 2021
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
    title: 'Gestion de flotte',
    caption: 'Administration',
    icon: 'manage_accounts',
    link: '#/tableau'
  },
  {
    title: 'Suivi des véhicules',
    caption: 'Utilisation',
    icon: 'bike_scooter',
    link: '#/table'
  },
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

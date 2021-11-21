<template>
  <q-breadcrumbs>
    <template
      v-for="menudef in menudefs" :key="menudef.label">
        <q-breadcrumbs-el 
          :label="menudef.label"
          :icon="menudef.icon"
          :to="menudef.to"
        />
    </template>
  </q-breadcrumbs>
</template>

<script>
export default {
  name: 'LigneMenu',
  props:{
    menudefs:{
      default:[
        {
          label:"Accueil",
          icon:"dashboard",
          to:"/index"
        },
        {
          label:"Suivi des véhicules",
          icon:"manage_accounts",
          to:"/tableau"
        },
        {
          label:"Mes véhicules",
          icon:"bike_scooter",
          to:"/mesvehicules"
        },
      ]
    }
  },
  data () {
    return {}
  }
}
</script>


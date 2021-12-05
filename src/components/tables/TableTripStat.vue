<template>
  <q-card>

    <q-card-section class="q-pa-none">
      <q-table class="" style="height: 450px" :rows="data3" :columns="column" :rows-per-page-options="[0]" hide-bottom dense>
        <template v-slot:body-cell-champ="props">
          <q-td :props="props" style="max-width: 50px">
            <q-item>
              <q-item-section>
                <q-item-label>{{ props.row.champ }}</q-item-label>
              </q-item-section>

            </q-item>
          </q-td>
        </template>

        <template v-slot:body-cell-valeur="props">
          <q-td :props="props" style="max-width: 50px">
            <q-item>
              <q-item-section>
                <q-item-label caption class="">{{ props.row.valeur }}</q-item-label>
              </q-item-section>

            </q-item>
          </q-td>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TableTripStat",
  props:{
    data3def:{
      default: [
        { champ: 'Utilisateur', valeur: 'Benoît Trouvé'},
        { champ: 'Distance (km)', valeur: '25,62'},
        { champ: 'Durée', valeur: '42:30'},
        { champ: 'Vitesse moyenne (km/h)', valeur: '36,18'},
        { champ: 'Consommation électrique (W.h/km)', valeur: '24 '},
        { champ: 'Puissance moyenne consommée (W)', valeur: '800'},
        { champ: 'Auto-consommation (%)', valeur: '16'},
        { champ: 'SOC fixe fin de trajet (%)', valeur: '46'},
        { champ: 'SOC mobile fin de trajet (%)', valeur: '32'}
      ]
    },
    colomndef:{
      default: [
        {name: 'champ', label: ' ', field: 'champ', sortable: false, align: 'left'},
        {name: 'valeur', label: ' ', field: 'valeur', sortable: false, align: 'left'},
      ]
    }
  },
  data() {
    return {
      column: this.colomndef,
      data3 : this.data3def,
    }
  },
})
</script>

<style scoped>

</style>

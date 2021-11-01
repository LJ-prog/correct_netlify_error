<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 text-grey-8">
        Statistiques du trajet
      </div>
    </q-card-section>
    <q-separator color="white"/>
    <q-card-section class="q-pa-none">
      <q-table class="" :rows="data3" :columns="column" hide-bottom>
        <template v-slot:body-cell-champ="props">
          <q-td :props="props" style="max-width: 100px">
            <q-item>
              <q-item-section>
                <q-item-label>{{ props.row.champ }}</q-item-label>
              </q-item-section>

            </q-item>
          </q-td>
        </template>

        <template v-slot:body-cell-valeur="props">
          <q-td :props="props" style="max-width: 100px">
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

const column = [
  {name: 'champ', label: ' ', field: 'champ', sortable: false, align: 'left'},
  {name: 'valeur', label: ' ', field: 'valeur', sortable: false, align: 'left'},
];

const data3 = [
  { champ: 'Utilisateur', valeur: 'Benoît Trouvé'},
  { champ: 'Distance', valeur: '25,62 km'},
  { champ: 'Durée', valeur: '42:30'},
  { champ: 'Vitesse moyenne', valeur: '36,18 km/h'},
  { champ: 'Puissance moyenne consommée', valeur: '800 W'},
  { champ: 'Auto-consommation', valeur: '16 %'},
  { champ: 'SOC fixe fin de trajet', valeur: '46 %'},
  { champ: 'SOC mobile fin de trajet', valeur: '32 %'}
];


export default defineComponent({
  name: "TableProgress",
  setup() {

    return {
      column,
      data3,
      getColor(val) {
        if (val > 70 && val <= 100) {
          return 'green'
        } else if (val > 50 && val <= 70) {
          return 'blue'
        }
        return 'red'
      }
    }
  },

})
</script>

<style scoped>

</style>

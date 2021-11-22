<template>
      <q-table 
        class=""
        :rows="ligne"
        :columns="colonne"
        hide-bottom>

        <template v-slot:body-cell-Actif="props">
          <q-td key="name" :props="props" style="max-width: 100px">
            <q-badge rounded color="green">
              {{ props.row.Actif }}
            </q-badge>
          </q-td>
        </template>

        <template v-slot:body-cell-Inactif="props">
          <q-td key="name" :props="props" style="max-width: 100px">
            <q-badge rounded color="orange">
              {{ props.row.Inactif }}
            </q-badge>
          </q-td>
        </template>

        <template v-slot:body-cell-Atelier="props">
          <q-td key="name" :props="props" style="max-width: 100px">
            <q-badge rounded color="red">
              {{ props.row.Atelier }}
            </q-badge>
          </q-td>
        </template>

      </q-table>
</template>

<script>
import {defineComponent} from 'vue'

const ligne = [
  {name: '', Actif: 3, Inactif: 1, Atelier: 1}
];

const colonne = [
  {name: 'Actif', label: 'Actif', field: 'Actif', sortable: false, align: 'left'},
  {name: 'Inactif', label: 'Inactif', field: 'Inactif', sortable: false, align: 'left'},
  {name: 'Atelier', label: 'Atelier', field: 'Atelier', sortable: false, align: 'left'},
];


export default defineComponent({
  name: "TableActive",
  setup() {

    return {
      colonne,
      ligne,
    }
  },
})
</script>
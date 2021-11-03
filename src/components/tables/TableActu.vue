<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 text-grey-8">
        Flux d'actualités
      </div>
    </q-card-section>
    <q-separator color="white"/>
    <q-card-section class="q-pa-none">
      <q-table class="" :rows="data3" :columns="column" hide-bottom>
        <template v-slot:body-cell-Trip="props">
          <q-td :props="props" style="max-width: 100px">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img :src="props.row.avatar">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ props.row.Trip }}</q-item-label>
                <q-item-label overline class="">{{ props.row.name }}</q-item-label>
                <q-item-label caption class="">{{ props.row.des }}</q-item-label>
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
  {name: 'Trip', label: 'Trajet', field: 'trip', sortable: true, align: 'left'},
];

const data3 = [
  {
    name: 'Benoît Trouvé',
    des: '26 nov 2021 | 17,62 km | 31:55',
    avatar: "statics/images/Benoit.JPG",
  },
  {
    name: 'Benoît Trouvé',
    des: '21 nov 2021 | 35,41 km | 58:20',
    avatar: "statics/images/Benoit.JPG",
  },
  {
    name: 'Sébastien Taliercio',
    des: '17 nov 2021 | 65,12 km | 1:52:10',
    avatar: "statics/images/Sebastien.JPG",
  },
  {
    name: 'Benoît Trouvé',
    des: '04 nov 2021 | 30,03 km | 29:56',
    avatar: "statics/images/Benoit.JPG",
  }
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

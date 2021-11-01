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
    avatar: "~statics/images/Benoit.JPG",
  },
  {
    name: 'Benoît Trouvé',
    des: '21 nov 2021 | 35,41 km | 58:20',
    avatar: 'https://avatars3.githubusercontent.com/u/34883558?s=400&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4',
  },
  {
    name: 'Sébastien Taliercio',
    des: '17 nov 2021 | 65,12 km | 1:52:10',
    avatar: 'https://avatars0.githubusercontent.com/u/55240045?s=400&u=cf9bffc2bd2d8e42ca6e5abf40ddd6c1a03ce2860&v=4',
  },
  {
    name: 'Benoît Trouvé',
    des: '04 nov 2021 | 30,03 km | 29:56',
    avatar: 'https://avatars3.githubusercontent.com/u/34883558?s=400&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4',
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

<template>
  <div class="q-pa-md items-start q-gutter-md">
     <div class="col q-gutter-md q-col-gutter-md">
      <q-card class="my-menu">
        <q-img src="statics/images/GestionFlotte.png">
          <div class="absolute-bottom">
            <div class="text-h6">Gestion de flotte</div>
          </div>
        </q-img>

        <q-card-actions>
          <q-btn flat
             label="Entrer"
             to="/table"
          />
        </q-card-actions>
      </q-card>


      <q-card class="my-menu">
        <q-img src="statics/images/AccueilMidipile.jpg">
          <div class="absolute-bottom">
            <div class="text-h6">Suivi des véhicules</div>
          </div>
        </q-img>

        <q-card-actions>
          <q-btn flat
             label="Entrer"
             to="/tableau"
          />
        </q-card-actions>
      </q-card>
    </div>

    <div class="col q-gutter-md q-col-gutter-md">
       <q-card class="my-card">
        <q-parallax
          src="statics/images/AccueilMidipile.jpg"
          :height="800"
        />

        <q-card-section>
          <div class="text-h6">VOTRE solution de mobilité décarbonée active et connectée</div>
          <div class="text-subtitle2">par Midipile</div>
        </q-card-section>
      </q-card>
    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>

<style lang="sass" scoped>
.my-card
  width: 80%
  max-width: 400px

.my-menu
  width: 80%
  max-width: 400px
</style>

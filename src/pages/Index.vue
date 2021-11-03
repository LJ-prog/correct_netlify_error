<template>
  <div class="q-pa-md">
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
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1000px
</style>

<template>
 
 <!-- <table-progress class="q-mt-lg"></table-progress>
    <table-actu class="q-mt-lg"></table-actu>
    <table-trip-stat class="q-mt-lg"></table-trip-stat> -->

  <q-page class="row">

    <table-progress class="col-12"></table-progress>

    <table-actu class="col-6"></table-actu>
    
    <table-trip-stat class="col-6"></table-trip-stat>

  </q-page>
</template>

<script>
import {defineComponent, defineAsyncComponent} from 'vue';

export default defineComponent({
  name: "Tables",
  components: {
    TableProgress: defineAsyncComponent(() => import('components/tables/TableProgress')),
    TableActu: defineAsyncComponent(() => import('components/tables/TableActu')),
    TableTripStat: defineAsyncComponent(() => import('components/tables/TableTripStat')),

  },
})
</script>

<style>

</style>

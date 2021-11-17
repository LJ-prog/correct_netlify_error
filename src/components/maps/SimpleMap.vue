<template>
  <l-map style="height:80vh" :zoom=13 :center="[45.63059,0.11664]">
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    ></l-tile-layer>
  </l-map>
</template>

<script>

import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      
    };
  },
};
</script>
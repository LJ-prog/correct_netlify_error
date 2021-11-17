<template>
  <l-map style="height:80vh" :zoom=13 :center="[45.63059,0.11664]">
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    ></l-tile-layer>

    <l-marker :lat-lng="[45.63059,0.11664]">
      <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
      <l-popup>
        <q-btn color="green" icon="thumb_up" to="/midipile01">Midipile 01</q-btn>
      </l-popup>
    </l-marker>

    <l-marker :lat-lng="[45.64059,0.16664]">
      <l-icon :icon-url="iconUrl2" :icon-size="iconSize" />
      <l-popup>
        <q-btn color="red" icon="warning" to="/midipile02">Midipile 02</q-btn>
      </l-popup>
    </l-marker>

  </l-map>
</template>

<script>

import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup,
  },
  data() {
    return {
      iconWidth: 90,
      iconHeight: 55,
    };
  },
  computed: {
    iconUrl() {
      return `/statics/images/M1.JPG`;
    },
    iconUrl2() {
      return `/statics/images/M2.JPG`;
    },
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  }
};
</script>
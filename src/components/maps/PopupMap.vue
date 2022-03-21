<template>
  <l-map 
    :style="stylemap"
    :zoom="zoommap"
    :center="centermap"
  >
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    ></l-tile-layer>

    <template
      v-for="marker in markers"
      :key="marker.id">

      <l-marker 
        :lat-lng="marker.coordinates"
      >

        <l-icon
          :icon-url="marker.iconurl"
        />

        <l-popup>
          <q-btn 
            :color="marker.popupcolor"
            :icon="marker.popupicon"
            :to="marker.popuptarget">
              {{ marker.popuptitle }}
          </q-btn>
        </l-popup>

      </l-marker>

    </template>

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
  props:{
    stylemap:{
      default: "height:35vh"
    },
    zoommap:{
      default: 14
    },
    centermap:{
      default: [45.63059,0.11664]
    },
    markers:{
      default:[
        {
          id:"Midipile 01",
          coordinates:[45.63059,0.11664],
          iconurl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png`,
          popupcolor: "green",
          popupicon: "thumb_up",
          popuptarget: "/midipile01",
          popuptitle: "Midipile 01"
        },
        {
          id:"Midipile 02",
          coordinates:[45.648597, 0.171102],
          iconurl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png`,
          popupcolor: "green",
          popupicon: "thumb_up",
          popuptarget: "/midipile02",
          popuptitle: "Midipile 02"
        },
        {
          id:"Midipile 03",
          coordinates:[45.643500, 0.150163],
          iconurl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png`,
          popupcolor: "green",
          popupicon: "thumb_up",
          popuptarget: "/midipile03",
          popuptitle: "Midipile 03"
        },
        {
          id:"Midipile 04",
          coordinates:[45.64059,0.12064],
          iconurl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png`,
          popupcolor: "orange",
          popupicon: "warning",
          popuptarget: "/midipile04",
          popuptitle: "Midipile 04"
        },
        {
          id:"Midipile 05",
          coordinates:[ 45.664345, 0.164602],
          iconurl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png`,
          popupcolor: "red",
          popupicon: "warning",
          popuptarget: "/midipile05",
          popuptitle: "Midipile 05"
        }
      ]
    }
  },
  data() {
    return {
      iconWidth: 90,
      iconHeight: 55,
    };
  },
  computed: {
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  }
};
</script>
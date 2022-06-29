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
              <b style="margin-left: 10px">{{ marker.popuptitle}}</b>
              <p class ="time" style="font-size: 11px"> il y a 5 min </p>
              <p class ="address" style="font-size: 12px">{{marker.popupaddress}}</p>
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
          popupaddress: "70 Rue Jean Doucet, 16470 Saint-Michel",
          iconurl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png`,
          popupcolor: "green",
          popupicon: "thumb_up",
          popuptarget: "/midipile01",
          popuptitle: "Midipile 01",
        },
        {
          id:"Midipile 02",
          coordinates:[45.648597, 0.171102],
          popupaddress: "88 Rue Monlogis, 16000 Angoulême",
          iconurl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png`,
          popupcolor: "green",
          popupicon: "thumb_up",
          popuptarget: "/midipile02",
          popuptitle: "Midipile 02"
        },
        {
          id:"Midipile 03",
          coordinates:[45.643500, 0.150163],
          popupaddress: "210 Rue de Clerac À Sillac, 16000 Angoulême",
          iconurl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png`,
          popupcolor: "green",
          popupicon: "thumb_up",
          popuptarget: "/midipile03",
          popuptitle: "Midipile 03"
        },
        {
          id:"Midipile 04",
          coordinates:[45.64059, 0.163642],
          popupaddress: "Rue de Fontgrave, 16000 Angoulême",
          iconurl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png`,
          popupcolor: "orange",
          popupicon: "warning",
          popuptarget: "/midipile04",
          popuptitle: "Midipile 04"
        },
        {
          id:"Midipile 05",
          coordinates:[ 45.664345, 0.164602],
          popupaddress: "Rue de l'Égalité, 16160 Gond-Pontouvre",
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

<style scoped>

.time {
  /* position: absolute;
  left: 220px;
  top: 0px; */
  margin-top: 0px;
  margin-bottom : 0px;
  text-transform: lowercase;
  margin-left: auto;
}
.address {
  margin: 0px;
}

/* span.q-btn {
  margin-top: 18px;
} */

</style>

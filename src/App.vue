<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'Midipile Web Services',
  setup () {
      // const $q = useQuasar()

      // // calling here; equivalent to when component is created
      // $q.dark.set('auto')
  },
  // methods: {
  //   DarkMode: function (){
  //     var element = document.body;
  //     element.classList.toggle("dark-mode");
  //   }

  // }

})
</script>

<style>

/* body {
  background-color: white;
  color: black;
}

.dark-mode {
  background-color: #121212;
  color: white;
} */

</style>

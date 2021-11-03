<template>
    <gauge
        heading="ECO score"
        :min="0"
        :max="100"
        :value="exampleValue"
    />
</template>

<script>
import Gauge from '@chrisheanan/vue-gauge';

export default {
  components: {
    Gauge
  },
  data() {
    return {
      exampleValue: 35
    };
  }
};
</script>
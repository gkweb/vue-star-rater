<script lang="ts">
import { defineComponent } from "vue";
import StarRate from "@/star-rate.vue";

export default defineComponent({
  name: "ServeDev",
  components: {
    StarRate
  },
  data() {
    return {
      value: 3
    };
  }
});
</script>

<template>
  <div id="app">
    <StarRate v-model="value" />
  </div>
</template>

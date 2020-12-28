<template>
<pre v-highlightjs><code class="javascript code-example">{{modelValue}}</code></pre>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: { type: String, default: "" }
  }
});
</script>

<style scoped>
.code-example {
  text-align: left;
  padding: 1rem;
}
</style>


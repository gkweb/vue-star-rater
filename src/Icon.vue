<template>
  <svg :viewBox.camel="'0 0 20 20'">
    <path
      d="M10 15l-5.878 3.090 1.123-6.545-4.756-4.635 6.572-0.955 2.939-5.955 2.939 5.955 6.572 0.955-4.756 4.635 1.123 6.545z"
    ></path>
  </svg>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Icon"
});
</script>

<style scoped>
svg {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  fill: currentColor;
}
</style>

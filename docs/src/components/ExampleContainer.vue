<template>
  <div class="example-container">
    <h3 class="example-container__title">
      <slot name="title"></slot>
    </h3>
    <div v-if="!nocontent" class="example-container__content">
      <slot name="content"></slot>
    </div>
    <div class="example-container__example">
      <slot name="example"></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {'nocontent': {type: Boolean, default: false}}
});
</script>

<style scoped>
.example-container {
  margin-bottom: 1rem;
}

.example-container__title {
  margin-bottom: 1rem;
}

.example-container__example {
  max-width: 30rem;
  margin: 0 auto;
}

.example-container__content {
  margin: 0 auto 2rem;
}
</style>

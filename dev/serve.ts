import { createApp, VNode, h } from "vue";
import Dev from "./serve.vue";

createApp({
  render(): VNode {
    return h(Dev);
  }
}).mount("#app");

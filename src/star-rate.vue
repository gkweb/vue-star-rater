<template>
  <div class="vue-star-rate" :style="styleVariables">
    <ul>
      <li v-for="r in maxAmount" :key="genRndKey() + r">
        <button
          @click="handleRate({ amount: r, currentValue: modelValue })"
          :aria-label="r + ' of ' + maxAmount"
          tabindex="-1"
          :class="{
            'vue-star-rate__item': true,
            'vue-star-rate__item--is-active': r === modelValue,
            'vue-star-rate__item--is-hovering-range': r <= hoverOverAmount,
            'vue-star-rate__item--is-selection-range': r <= modelValue
          }"
          @mouseover="hoverOverAmount = r"
          @mouseleave="hoverOverAmount = -1"
        >
          <slot
            name="icon"
            :maxAmount.camel="maxAmount"
            :modelValue.camel="modelValue"
          >
            <div>
              <Icon />
            </div>
          </slot>
        </button>
      </li>
    </ul>
    <slot
      name="rating-text"
      :maxAmount.camel="maxAmount"
      :modelValue.camel="modelValue"
    >
      <span class="vue-star-rate__rate-text"
        >{{ modelValue }} out of {{ maxAmount }} Stars</span
      >
    </slot>
  </div>
</template>

<script lang="ts">
import Icon from "./Icon.vue";
import { computed, defineComponent, ref, PropType, toRef } from "vue";
import { PropColours, HandleRateProps } from "@/types/props";

interface Props {
  modelValue?: number;
  maxAmount?: number;
  oneRatingOnly: boolean;
  colours: PropColours;
}

export default defineComponent({
  components: {
    Icon
  },
  name: "StarRate",
  props: {
    modelValue: { type: Number, default: 0 },
    maxAmount: { type: Number, default: 5 },
    oneRatingOnly: { type: Boolean, default: false },
    title: { type: String, default: "" },
    colours: {
      type: Object as PropType<PropColours>,
      default: function() {
        return {
          activeColour: "red",
          hoverColour: "red",
          inactiveColour: "#0002"
        } as PropColours;
      }
    }
  },
  emits: ["update:modelValue", "starRateHasRated", "starRateRated"],
  setup(props: Props, { emit }) {
    const oneRatingOnly = toRef(props, "oneRatingOnly");
    const genRndKey = (): string =>
      Math.random()
        .toString(36)
        .substr(2, 5);
    const hasRatedAlready = ref<boolean>(false);
    const hoverOverAmount = ref<number>(-1);

    const styleVariables = computed(() => {
      return `--vsr-active-colour:${props.colours.activeColour};--vsr-hover-colour:${props.colours.hoverColour};--vsr-inactive-colour:${props.colours.inactiveColour};`;
    });

    /**
     * Handles rating and emits specific events
     * Events of interest:
     *  - starRate - Every rating cast
     *  - starRateHasRated - First rating only
     * @param {Number} amount
     */
    const handleRate = ({ amount, currentValue }: HandleRateProps): void => {
      if (hasRatedAlready.value === true && oneRatingOnly.value === true)
        return; // Do nothing
      if (amount === 1 && currentValue === 1) {
        emit("update:modelValue", 0);
      }

      if (!hasRatedAlready.value) {
        hasRatedAlready.value = true;
        emit("starRateHasRated", true);
      }

      emit("starRateRated", true);
      emit("update:modelValue", amount);
    };

    return {
      genRndKey,
      hoverOverAmount,
      styleVariables,
      handleRate
    };
  }
});
</script>

<style scoped>
.vue-star-rate {
  text-align: center;
}

.vue-star-rate__rate-text {
  font-weight: bold;
}

/* The inactive state */
.vue-star-rate__item {
  color: var(--vsr-inactive-colour);
}

.vue-star-rate__item--is-active,
.vue-star-rate__item--is-selection-range {
  color: var(--vsr-active-colour);
  transition: color ease 0.25s;
}

.vue-star-rate__item--is-hovering-range {
  color: var(--vsr-hover-colour);
  transition: color ease 0.25s;
}

ul {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0 0 0.25rem;
  padding: 0;
}

button {
  appearance: none;
  background: transparent;
  padding: 0.25rem;
  border: none;
  cursor: pointer;
}
</style>
